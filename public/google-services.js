(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.GoogleServices = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const MAX_FILES = 4;
  const services = [
    { id: "gmail", name: "Gmail", url: "https://mail.google.com/mail/", labels: ["メール", "Email", "이메일"] },
    { id: "drive", name: "Drive", url: "https://drive.google.com/", labels: ["ファイル", "Files", "파일"] },
    { id: "docs", name: "Docs", url: "https://docs.google.com/document/", labels: ["ドキュメント", "Documents", "문서"] },
    { id: "sheets", name: "Sheets", url: "https://docs.google.com/spreadsheets/", labels: ["スプレッドシート", "Spreadsheets", "스프레드시트"] },
    { id: "slides", name: "Slides", url: "https://docs.google.com/presentation/", labels: ["スライド", "Presentations", "프레젠테이션"] },
  ];
  const languageIndex = (language) => language === "ja" ? 0 : language === "ko" ? 2 : 1;
  function fileLabel(kind, language) {
    if (kind === "folder") return ["Driveフォルダ", "Drive folder", "Drive 폴더"][languageIndex(language)];
    const service = services.find((item) => item.id === kind) || services[1];
    return `Google ${service.name}`;
  }

  // Only accept actual file/folder paths, not redirects or arbitrary Google URLs.
  // Keep resource keys and document positions; never fetch or change permissions.
  function parseFileLink(value, title = "") {
    if (typeof value !== "string" || value.length > 2048 || /[\u0000-\u001f\u007f]/.test(value)) return null;
    try {
      const url = new URL(value.trim());
      if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
      let kind, id, match;
      if (url.hostname === "docs.google.com") {
        match = url.pathname.match(/^\/(document|spreadsheets|presentation)\/(?:u\/\d+\/)?d\/([A-Za-z0-9_-]+)(?:\/(?:edit|view|preview|copy))?\/?$/);
        if (!match) return null;
        kind = { document: "docs", spreadsheets: "sheets", presentation: "slides" }[match[1]];
        id = match[2];
      } else if (url.hostname === "drive.google.com") {
        match = url.pathname.match(/^\/file\/d\/([A-Za-z0-9_-]+)(?:\/(?:view|preview|edit))?\/?$/);
        if (match) { kind = "drive"; id = match[1]; }
        else {
          match = url.pathname.match(/^\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)\/?$/);
          if (match) { kind = "folder"; id = match[1]; }
          else if (url.pathname === "/open") {
            kind = "drive";
            id = url.searchParams.get("id");
            url.pathname = `/file/d/${id}/view`;
          } else return null;
        }
      } else return null;
      if (!id || !/^[A-Za-z0-9_-]{3,200}$/.test(id)) return null;
      const safeQuery = new URLSearchParams();
      for (const key of ["resourcekey", "gid", "tab"]) {
        const queryValue = url.searchParams.get(key);
        if (queryValue) safeQuery.set(key, queryValue);
      }
      url.search = safeQuery.toString();
      return {
        kind,
        key: `${kind}:${id}`,
        url: url.href,
        title: typeof title === "string" ? Array.from(title.trim().replace(/[\u0000-\u001f\u007f]/g, " ")).slice(0, 80).join("") : "",
      };
    } catch { return null; }
  }

  function normalizeFiles(files) {
    if (!Array.isArray(files)) return [];
    const result = [];
    for (const input of files) {
      const file = input && parseFileLink(input.url, input.title);
      if (file && !result.some((item) => item.key === file.key)) result.push(file);
      if (result.length === MAX_FILES) break;
    }
    return result;
  }

  function postIdFromHash(hash) {
    if (typeof hash !== "string" || !/^#post-[1-9]\d{0,15}$/.test(hash)) return null;
    const id = Number(hash.slice(6));
    return Number.isSafeInteger(id) ? id : null;
  }

  function postUrl(baseUrl, id) {
    if (!Number.isSafeInteger(id) || id <= 0) throw Error("Invalid post ID");
    const url = new URL(baseUrl);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw Error("Invalid post URL");
    url.search = "";
    url.hash = `post-${id}`;
    return url.href;
  }

  function emailShare({ post, author = {}, baseUrl, language = "ja" }) {
    const index = languageIndex(language);
    const name = String(author.name || "yytblue").replace(/[\r\n]/g, " ").slice(0, 80);
    const subject = [`${name}さんの投稿 | yytblue`, `Post from ${name} | yytblue`, `${name}님의 게시물 | yytblue`][index];
    const link = postUrl(baseUrl, post.id);
    const parts = [
      `${name}${author.handle ? ` @${author.handle}` : ""}`,
      post.text || ["メディア付き投稿", "Media post", "미디어 게시물"][index],
    ];
    if (post.quoteOf?.text) parts.push(`${["引用", "Quote", "인용"][index]}:\n${post.quoteOf.text}`);
    const files = [...normalizeFiles(post.googleFiles), ...normalizeFiles(post.quoteOf?.googleFiles)];
    if (files.length) parts.push(files.map((file) => `${file.title || fileLabel(file.kind, language)}\n${file.url}`).join("\n\n"));
    parts.push(link);
    const body = parts.join("\n\n");
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.search = new URLSearchParams({ view: "cm", fs: "1", su: subject, body }).toString();
    // Percent-encoding also works with email clients that treat '+' literally.
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { subject, body, link, gmailUrl: gmailUrl.href, mailto };
  }

  return { MAX_FILES, services, languageIndex, fileLabel, parseFileLink, normalizeFiles, postIdFromHash, postUrl, emailShare };
});
