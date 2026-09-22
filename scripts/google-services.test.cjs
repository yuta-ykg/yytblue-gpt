const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const moduleContext = { module: { exports: {} }, URL, URLSearchParams };
vm.runInNewContext(fs.readFileSync(path.join(root, "public/google-services.js"), "utf8"), moduleContext);
const GoogleServices = moduleContext.module.exports;
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/blue.html"), "utf8");
const file = (id = "abc123") => ({ url: `https://docs.google.com/document/d/${id}/edit`, title: "企画書" });
const plain = (value) => JSON.parse(JSON.stringify(value));

test("recognizes Drive, folders, Docs, Sheets, and Slides", () => {
  const cases = [
    [file().url, "docs"],
    ["https://docs.google.com/spreadsheets/d/abc_123/edit#gid=23", "sheets"],
    ["https://docs.google.com/presentation/u/1/d/abc-123/edit", "slides"],
    ["https://drive.google.com/file/d/abc123/view?usp=sharing", "drive"],
    ["https://drive.google.com/drive/u/0/folders/abc123", "folder"],
    ["https://drive.google.com/open?id=abc123&resourcekey=key123", "drive"],
  ];
  for (const [url, kind] of cases) assert.equal(GoogleServices.parseFileLink(url).kind, kind, url);
});

test("retains resource keys and document positions without tracking or redirect parameters", () => {
  const result = GoogleServices.parseFileLink("https://docs.google.com/spreadsheets/d/abc123/edit?resourcekey=0-key&gid=9&usp=sharing&continue=https://evil.test#gid=9");
  const url = new URL(result.url);
  assert.equal(url.searchParams.get("resourcekey"), "0-key");
  assert.equal(url.searchParams.get("gid"), "9");
  assert.equal(url.hash, "#gid=9");
  assert.equal(url.searchParams.has("continue"), false);
  assert.equal(url.searchParams.has("usp"), false);
});

test("rejects unsafe, unsupported, forged, and malformed URLs", () => {
  for (const url of [
    "javascript:alert(1)", "http://drive.google.com/file/d/abc123/view", "//docs.google.com/document/d/abc123/edit",
    "https://drive.google.com.evil.test/file/d/abc123/view", "https://evil.test/?url=https://drive.google.com/file/d/abc123/view",
    "https://user:pass@docs.google.com/document/d/abc123/edit", "https://docs.google.com:444/document/d/abc123/edit",
    "https://docs.google.com/redirect?url=https://evil.test", "https://drive.google.com/", "https://drive.google.com/open",
    "https://drive.google.com/open?id=../../evil", "https://docs.google.com/document/d/a/edit", "https://drive.google.com/file/d/abc123/view\n",
    "https://docs.google.com/document/d/abc123/../../redirect", null, "x".repeat(2049),
  ]) assert.equal(GoogleServices.parseFileLink(url), null, String(url));
});

test("normalizes old/malformed data, derives kind from URLs, deduplicates, and caps at four", () => {
  assert.deepEqual(plain(GoogleServices.normalizeFiles(undefined)), []);
  const files = GoogleServices.normalizeFiles([
    null, { url: "javascript:alert(1)" }, { ...file(), kind: "evil" },
    { ...file(), url: file().url.replace("edit", "view") },
    file("def456"), file("ghi789"), file("jkl123"), file("mno456"),
  ]);
  assert.equal(files.length, 4);
  assert.equal(files[0].kind, "docs");
  assert.equal(files[0].key, "docs:abc123");
  assert.equal(GoogleServices.parseFileLink(file().url, "😀".repeat(100)).title.length, 160);
});

test("Gmail and mailto carry text and quoted file links without recipients or automatic send", () => {
  for (const language of ["ja", "en", "ko"]) {
    const draft = GoogleServices.emailShare({
      post: { id: 123, text: "日本語 & Korean 한글 + ? # 😀\n本文", googleFiles: [file()], quoteOf: { text: "引用文", googleFiles: [file("def456")] } },
      author: { name: "名前", handle: "test" }, baseUrl: "https://site.example/blue.html?github=connected#old", language,
    });
    const url = new URL(draft.gmailUrl);
    assert.equal(url.origin, "https://mail.google.com");
    assert.equal(url.searchParams.get("body"), draft.body);
    assert.equal(url.searchParams.get("su"), draft.subject);
    assert.equal(url.searchParams.get("view"), "cm");
    assert.equal(url.searchParams.has("to"), false);
    assert.ok(draft.body.includes("日本語 & Korean 한글 + ? # 😀\n本文"));
    assert.ok(draft.body.includes("引用文"));
    assert.ok(draft.body.includes("def456"));
    assert.equal(draft.link, "https://site.example/blue.html#post-123");
    assert.ok(draft.mailto.startsWith("mailto:?subject="));
    assert.ok(!draft.mailto.includes("+"));
    assert.equal(decodeURIComponent(draft.mailto.split("&body=")[1]), draft.body);
  }
});

test("post links reject invalid IDs and remove callback queries", () => {
  assert.equal(GoogleServices.postIdFromHash("#post-1750000000000"), 1750000000000);
  for (const hash of ["#post-0", "#post--1", "#post-NaN", "#post-1.2", "#post-9007199254740992", "#post-01", "#other"]) assert.equal(GoogleServices.postIdFromHash(hash), null);
  assert.throws(() => GoogleServices.postUrl("https://site.example/", -1));
  assert.throws(() => GoogleServices.postUrl("javascript:alert(1)", 1));
});

function section(start, end) {
  const first = app.indexOf(start);
  const last = app.indexOf(end, first + start.length);
  assert.ok(first >= 0 && last > first, `Missing source section ${start}`);
  return app.slice(first, last);
}

function appHarness() {
  const elements = new Map();
  const $ = (selector) => {
    if (!elements.has(selector)) elements.set(selector, {
      value: "", textContent: "", innerHTML: "", hidden: false, open: false,
      setAttribute() {}, focus() {}, select() { this.selected = true; },
      showModal() { this.open = true; }, close() { this.open = false; }, reset() {},
    });
    return elements.get(selector);
  };
  const context = vm.createContext({
    GoogleServices, $, URL, URLSearchParams, Date,
    posts: [], users: [{ id: "you", name: "あなた", handle: "you", bio: "", initial: "Y" }],
    stories: [], questions: [], relationships: [], lists: [], following: new Set(), accountPrivate: false,
    lang: "ja", marketText: (...values) => values[context.lang === "ja" ? 0 : context.lang === "ko" ? 2 : 1],
    escape: (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]),
    render() {}, notify() {}, navigate(v) { context.view = v; }, setDrawer() {},
    rightWidgetLabel: () => "Google services", composingGoogleFiles: [], composingImages: [], composingDocuments: [],
    composingAudio: null, composingStock: null, composingYoutube: null, pollReady: () => false,
    location: new URL("https://site.example/"), history: { replaceState() {} },
    navigator: { clipboard: { async writeText(value) { context.copied = value; } } },
    view: "home", postReturnView: "home", selectedPostId: null,
  });
  vm.runInContext(section("function googleServiceIcon(", "let serverReady = false,"), context);
  vm.runInContext(section("function createPost(", "function pollInputs("), context);
  vm.runInContext(section("function updatePostButton()", "function renderImagePreview("), context);
  vm.runInContext(section("function quoteSnapshot(", '$("#post-form").onsubmit'), context);
  vm.runInContext(section("function stateSnapshot()", "function persistState()"), context);
  vm.runInContext(section("function restorePostRoute()", 'window.addEventListener("hashchange"'), context);
  return { context, $, elements };
}

test("attachment form supports link-only posts, rejects duplicates/overflow, and removes links", () => {
  const { context, $ } = appHarness();
  const submit = (url) => { $("#google-file-url").value = url; $("#google-link-form").onsubmit({ preventDefault() {} }); };
  context.updatePostButton();
  assert.equal($("#post-button").disabled, true);
  submit(file().url);
  assert.equal(context.composingGoogleFiles.length, 1);
  assert.equal($("#post-button").disabled, false);
  assert.equal(context.view, "home");
  submit(file().url);
  assert.equal(context.composingGoogleFiles.length, 1);
  assert.match($("#google-link-error").textContent, /添付済み/);
  for (const id of ["def456", "ghi789", "jkl123", "mno456"]) submit(file(id).url);
  assert.equal(context.composingGoogleFiles.length, 4);
  assert.match($("#google-link-error").textContent, /4件/);
  $("#google-file-preview").onclick({ target: { closest: () => ({ dataset: { removeGoogle: "0" } }) } });
  assert.equal(context.composingGoogleFiles.length, 3);
  assert.ok(!context.composingGoogleFiles.some((item) => item.key === "docs:abc123"));
});

test("post persistence and both quote entry points preserve Google attachments", () => {
  const { context } = appHarness();
  const id = context.createPost("", null, null, [], null, null, null, null, [], [file()]);
  const saved = plain(context.stateSnapshot());
  assert.equal(saved.posts[0].id, id);
  assert.equal(saved.posts[0].googleFiles[0].title, "企画書");
  const restored = JSON.parse(JSON.stringify(saved));
  const quote = context.quoteSnapshot(restored.posts[0]);
  assert.equal(quote.googleFiles[0].url, file().url);
  assert.equal((app.match(/composingQuote = quoteSnapshot\(original\)/g) || []).length, 2);
  assert.throws(() => context.createPost("", null, null, [], null, null, null, null, [], [{ url: "javascript:alert(1)" }]));
});

test("file cards escape user labels and reject unsafe saved links", () => {
  const { context } = appHarness();
  const cards = context.googleFilesHTML([{ ...file(), title: '<img src=x onerror="alert(1)">' }], true);
  assert.ok(!cards.includes("<img"));
  assert.ok(cards.includes("&lt;img"));
  assert.ok(cards.includes('rel="noopener noreferrer"'));
  assert.ok(cards.includes('data-remove-google="0"'));
  assert.equal(context.googleFilesHTML([{ url: "javascript:alert(1)" }]), "");
  assert.equal(context.googleFilesHTML(undefined), "");
});

test("Gmail dialog previews draft and copies link with a manual fallback", async () => {
  const { context, $ } = appHarness();
  context.openGmailShare({ id: 123, u: "you", text: "共有する投稿", googleFiles: [file()] });
  assert.equal($("#gmail-share-dialog").open, true);
  assert.ok($("#gmail-share-body").value.includes("共有する投稿"));
  assert.ok($("#gmail-compose-link").href.startsWith("https://mail.google.com/"));
  await $("#google-copy-post-link").onclick();
  assert.equal(context.copied, "https://site.example/#post-123");
  context.navigator.clipboard.writeText = async () => { throw Error("blocked"); };
  await $("#google-copy-post-link").onclick();
  assert.equal($("#google-share-post-url").hidden, false);
  assert.equal($("#google-share-post-url").selected, true);
  assert.ok(!section('case "gmail":', 'case "delete":').includes("window.open"));
});

test("Google UI has matching HTML controls and supports all three languages", () => {
  const { context, elements } = appHarness();
  for (const language of ["ja", "en", "ko"]) {
    context.lang = language;
    context.renderGoogleUI();
    assert.equal(context.$("#google-service-grid").innerHTML.split("<a ").length - 1, 5);
    assert.ok(!context.$("#google-dialog-help").textContent.includes("undefined"));
  }
  for (const selector of elements.keys()) {
    if (!selector.startsWith("#") || selector.includes(" ")) continue;
    assert.ok(html.includes(`id="${selector.slice(1)}"`), selector);
  }
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), (match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, "HTML IDs should be unique");
  assert.ok(html.indexOf('src="google-services.js"') < html.indexOf('src="app.js"'));
  assert.ok(fs.readFileSync(path.join(root, "public/sw.js"), "utf8").includes('"/google-services.js"'));
});

test("shared post routes resolve after loading or show the existing not-found screen", () => {
  const { context } = appHarness();
  context.location.hash = "post-123";
  assert.equal(context.restorePostRoute(), true);
  assert.equal(context.view, "post");
  assert.equal(context.selectedPostId, 123);
  assert.equal(context.postReturnView, "home");
  context.location.hash = "unrelated";
  assert.equal(context.restorePostRoute(), false);
});
