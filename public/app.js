const paths = {
  home: "M3 10 12 3l9 7v10H15v-7H9v7H3Z",
  search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  bookmark: "M6 3h12v18l-6-4-6 4Z",
  questions: "M4 5h16v12H9l-5 4Zm5 4a3 3 0 1 1 4 2.8c-.8.3-1 .8-1 1.7M12 16h.01",
  games: "M7 8h10a4 4 0 0 1 3.8 5.2l-1.2 4a2 2 0 0 1-3.4.8L14 16h-4l-2.2 2a2 2 0 0 1-3.4-.8l-1.2-4A4 4 0 0 1 7 8Zm1 3v4m-2-2h4m6-1h.01m2 2h.01",
  user: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-2a8 8 0 0 1 16 0v2",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8",
  reply: "M21 11a9 9 0 0 1-9 9H3l2-5a9 9 0 1 1 16-4",
  repeat: "M4 8h14l-3-3m3 3-3 3M20 16H6l3-3m-3 3 3 3",
  share: "M12 16V3m-4 4 4-4 4 4M5 13v8h14v-8",
  star: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z",
  thumb:
    "M7 10v10H3V10h4zm2 10V9l4-6c1 0 2 .8 2 2v4h4c1.2 0 2.1 1.1 1.8 2.3l-1.5 6.5c-.3 1.3-1.5 2.2-2.8 2.2H9Z",
  upvote: "M12 4 4 12h5v8h6v-8h5Z",
  trends: "M4 19V13m5 6V9m5 10V5m5 14V2",
  settings:
    "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-1.9.2l-.4.2a1.7 1.7 0 0 0-.9 1.6V22h-4v-.2a1.7 1.7 0 0 0-.9-1.6l-.4-.2a1.7 1.7 0 0 0-1.9-.2l-.2.1-2-3.4.1-.1a1.7 1.7 0 0 0 .3-1.9v-.5a1.7 1.7 0 0 0-1.4-1.2H4V9h.2a1.7 1.7 0 0 0 1.4-1.2v-.5a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.2.1a1.7 1.7 0 0 0 1.9-.2l.4-.2A1.7 1.7 0 0 0 10.6 0h4v.2a1.7 1.7 0 0 0 .9 1.6l.4.2a1.7 1.7 0 0 0 1.9.2l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9v.5A1.7 1.7 0 0 0 21 9.2h.2V13H21a1.7 1.7 0 0 0-1.4 1.2z",
};

paths.image = "M4 5h16v14H4Zm0 10 4-4 4 4 2-2 6 6M16 9h.01";
paths.poll = "M5 18V10m7 8V5m7 13v-6";
paths.audio = "M9 18V6l10-3v18L9 18Zm-4-5h4v4H5Z";
paths.market = "M4 20V10h4v10m4 0V4h4v16m4 0V8M2 20h20";
paths.diagnosis = "M12 3v18M3 12h18M7 7h10v10H7Z";
paths.relationships = "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2 21v-2a6 6 0 0 1 12 0v2m0-7a6 6 0 0 1 8 5.7V21";
paths.help = "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m-3.2-12.5a3.2 3.2 0 1 1 5.3 2.4c-1.3 1-2.1 1.6-2.1 3.6m.01 3.1h.01";
paths.lists = "M5 6h14M5 12h14M5 18h14M2 6h.01M2 12h.01M2 18h.01";
const copy = {
  ja: {
    home: "ホーム",
    search: "見つける",
    bookmark: "ブックマーク",
    lists: "リスト",
    questions: "質問箱",
    games: "ゲームルーム",
    diagnosis: "セルフチェック",
    relationships: "交友関係",
    help: "ヘルプ",
    user: "プロフィール",
    settings: "設定",
    trendsNav: "トレンド",
    trendTitle: "いまのトレンド",
    trendHelp: "話題になっているキーワードを見つけよう。",
    recommended: "おすすめ",
    following: "フォロー中",
    compose: "ポストする",
    placeholder: "いま、なにしてる？",
    latest: "最新のポスト",
    searchPlaceholder: "ポスト、ユーザー、ハッシュタグを検索",
    settingsTitle: "表示言語",
    appearanceTitle: "外観",
    appearanceHelp: "画面の表示テーマを選択してください。",
    light: "ライト",
    dark: "ダーク",
    darkBlue: "ダークブルー",
    lightOrange: "ライトオレンジ",
    mint: "ミント",
    monochrome: "モノクローム",
    system: "システム",
    themeSaved: "選択したテーマはこの端末に保存されます。",
    likeIconTitle: "いいねアイコン",
    likeIconHelp: "いいねに使用するアイコンを選択してください。",
    heartIcon: "デフォルト",
    starIcon: "ふぁぼ",
    thumbIcon: "高評価",
    upvoteIcon: "賛成",
    iconSaved: "選択したアイコンはこの端末に保存されます。",
    settingsHelp: "Blueで使用する言語を選択してください。",
    accountPrivacyTitle: "アカウントの公開範囲",
    privateAccount: "非公開アカウント",
    privateAccountHelp:
      "オンにすると、承認したフォロワーだけがあなたのポストを見られます。",
    privateAccountOn: "非公開",
    privateAccountOff: "公開",
    privacySaved: "アカウントを非公開にしました",
    privacyRemoved: "アカウントを公開しました",
    lockedAccount: "非公開アカウント",
    editProfile: "プロフィールを編集",
    editProfileHelp: "表示名、ユーザー名、自己紹介、MBTIを変更できます。",
    displayName: "表示名",
    username: "ユーザー名",
    bioLabel: "自己紹介",
    mbtiLabel: "MBTI",
    mbtiUnset: "未設定",
    cancel: "キャンセル",
    saveChanges: "保存する",
    profileSaved: "プロフィールを更新しました",
    profileError:
      "表示名は10文字以内、ユーザー名は半角英数字と_で25文字以内にしてください。",
    handleTaken:
      "このハンドルはすでに使用されています。別のハンドルを入力してください。",
    japanese: "日本語",
    english: "English",
    saved: "選択した言語はこの端末に保存されます。",
    demo: "操作を試せるデモです。投稿はこの画面内のみで、再読み込みするとリセットされます。",
    trends: "いま、話題のこと",
    people: "気になる人を見つけよう",
    welcome: "好きなことから、<br>つながろう。",
    welcomeText: "何気ないひとことが、<br>新しい出会いのきっかけに。",
    quoteButton: "引用リツイートする",
    quoteFrom: "引用元",
    post: "ポスト",
    find: "検索",
    empty: "まだポストがありません。最初のひとことを書いてみましょう。",
    emptySaved: "保存したポストがここに表示されます。",
    emptySearch: "一致するポストがありません。別の言葉で検索してみてください。",
    accounts: "アカウント",
    suggestedAccounts: "おすすめアカウント",
    noAccounts: "一致するアカウントはありません。",
    youLabel: "あなた",
    world: "あなたの世界を、少し広く。",
    savedLead: "あとでもう一度、読みたいこと。",
    discover: "気になる話題を見つけよう",
    results: "の検索結果",
    follow: "フォロー",
    followingBtn: "フォロー中",
    reply: "返信",
    repost: "リポスト",
    like: "いいね",
    save: "保存",
  },
  en: {
    home: "Home",
    search: "Explore",
    bookmark: "Bookmarks",
    lists: "Lists",
    questions: "Questions",
    games: "Game rooms",
    diagnosis: "Self-check",
    relationships: "Relationships",
    help: "Help",
    user: "Profile",
    settings: "Settings",
    trendsNav: "Trending",
    trendTitle: "Trends for you",
    trendHelp: "Discover what people are talking about now.",
    recommended: "For you",
    following: "Following",
    compose: "Post",
    placeholder: "What's happening?",
    latest: "Latest posts",
    searchPlaceholder: "Search posts, people, or hashtags",
    settingsTitle: "Display language",
    appearanceTitle: "Appearance",
    appearanceHelp: "Choose how Blue looks on this device.",
    light: "Light",
    dark: "Dark",
    darkBlue: "Dark Blue",
    lightOrange: "Light Orange",
    mint: "Mint",
    monochrome: "Monochrome",
    system: "System",
    themeSaved: "Your theme choice is saved on this device.",
    likeIconTitle: "Like icon",
    likeIconHelp: "Choose the icon used for Likes.",
    heartIcon: "Default",
    starIcon: "Favorite",
    thumbIcon: "Thumbs up",
    upvoteIcon: "Upvote",
    iconSaved: "Your icon choice is saved on this device.",
    settingsHelp: "Choose the language you want to use on Blue.",
    accountPrivacyTitle: "Account privacy",
    privateAccount: "Private account",
    privateAccountHelp:
      "When enabled, only followers you approve can see your posts.",
    privateAccountOn: "Private",
    privateAccountOff: "Public",
    privacySaved: "Your account is now private",
    privacyRemoved: "Your account is now public",
    lockedAccount: "Private account",
    editProfile: "Edit profile",
    editProfileHelp: "Update your display name, username, bio, and MBTI.",
    displayName: "Display name",
    username: "Username",
    bioLabel: "Bio",
    mbtiLabel: "MBTI",
    mbtiUnset: "Not set",
    cancel: "Cancel",
    saveChanges: "Save",
    profileSaved: "Profile updated",
    profileError:
      "Use up to 10 characters for the name and up to 25 letters, numbers, or underscores for the username.",
    handleTaken: "This handle is already in use. Choose another one.",
    japanese: "日本語",
    english: "English",
    saved: "Your language choice is saved on this device.",
    demo: "This is an interactive demo. Posts stay on this screen and reset when you reload.",
    trends: "What's happening",
    people: "Who to follow",
    welcome: "Connect through<br>what you love.",
    welcomeText: "A small thought can lead<br>to a new connection.",
    quoteButton: "Quote repost",
    quoteFrom: "Quoted from",
    post: "Posts",
    find: "Search",
    empty: "No posts yet. Share the first thought.",
    emptySaved: "Saved posts will appear here.",
    emptySearch: "No matching posts. Try a different search.",
    accounts: "Accounts",
    suggestedAccounts: "Suggested accounts",
    noAccounts: "No matching accounts.",
    youLabel: "You",
    world: "Make your world a little wider.",
    savedLead: "Things you want to read again.",
    discover: "Find a topic you care about",
    results: " — results",
    follow: "Follow",
    followingBtn: "Following",
    reply: "Reply",
    repost: "Repost",
    like: "Like",
    save: "Save",
  },
};
let lang = (() => {
  try {
    return localStorage.getItem("blue-language") === "en" ? "en" : "ja";
  } catch {
    return "ja";
  }
})();
let theme = (() => {
  try {
    const v = localStorage.getItem("blue-theme");
    return [
      "light",
      "dark",
      "darkblue",
      "lightorange",
      "mint",
      "monochrome",
      "system",
    ].includes(v)
      ? v
      : "light";
  } catch {
    return "light";
  }
})();
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
function applyTheme() {
  document.documentElement.dataset.theme =
    theme === "system" ? (themeMedia.matches ? "dark" : "light") : theme;
}
applyTheme();
themeMedia.addEventListener?.("change", () => {
  if (theme === "system") applyTheme();
});
let likeIcon = (() => {
  try {
    const v = localStorage.getItem("blue-like-icon");
    return ["heart", "star", "thumb", "upvote"].includes(v) ? v : "heart";
  } catch {
    return "heart";
  }
})();
let teenMode = (() => {
  try { return localStorage.getItem("blue-teen-mode") === "on"; } catch { return false; }
})();
async function teenPinHash(pin) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`blue-teen:${pin}`));
  return [...new Uint8Array(bytes)].map((value) => value.toString(16).padStart(2, "0")).join("");
}
function teenSettingsHTML() {
  const features = marketText("センシティブな投稿を非表示・クリエイターシェア市場を停止・危険な検索には相談窓口を表示", "Hide sensitive posts, disable Creator Shares trading, and show support resources for risky searches");
  return `<section class="settings-panel teen-settings"><span class="eyebrow">TEEN SAFETY</span><h2>${marketText("ティーン向け制限", "Teen restrictions")}</h2><p>${features}</p><div class="teen-status ${teenMode ? "on" : ""}"><span aria-hidden="true">${teenMode ? "✓" : "○"}</span><div><b>${teenMode ? marketText("制限中", "Restrictions on") : marketText("制限なし", "Restrictions off")}</b><small>${marketText("この端末に適用されます。ブラウザのデータを消去すると設定も消えます。", "Applies to this device. Clearing browser data also removes this setting.")}</small></div></div><form id="teen-mode-form"><label>${teenMode ? marketText("保護者PINを入力して解除", "Enter guardian PIN to turn off") : marketText("保護者PIN（4桁）", "Guardian PIN (4 digits)")}<input name="pin" type="password" inputmode="numeric" pattern="[0-9]{4}" minlength="4" maxlength="4" autocomplete="off" required></label><button class="${teenMode ? "" : "primary"}">${teenMode ? marketText("制限を解除", "Turn off restrictions") : marketText("制限を有効にする", "Turn on restrictions")}</button></form><p class="teen-note">${marketText("この機能は補助的な端末設定です。保護者による見守りやOSのペアレンタルコントロールも併用してください。", "This is a supplemental device setting. Also use guardian supervision and operating-system parental controls.")}</p></section>`;
}
let pwaInstallPrompt = null;
const isPwaInstalled = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIosDevice = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
function pwaGuideHTML() {
  const installed = isPwaInstalled();
  const canInstall = Boolean(pwaInstallPrompt) && !installed;
  const steps = isIosDevice()
    ? marketText("Safariの共有ボタンを押し、「ホーム画面に追加」を選択してください。", "In Safari, tap Share, then choose Add to Home Screen.")
    : marketText("ブラウザのメニューから「アプリをインストール」または「ホーム画面に追加」を選択できます。", "Open the browser menu and choose Install app or Add to Home screen.");
  return `<section class="settings-panel pwa-guide"><span class="eyebrow">INSTALL APP</span><div class="pwa-guide-head"><div class="pwa-guide-icon" aria-hidden="true">✳</div><div><h2>${marketText("yytblueをアプリとして使う", "Use yytblue as an app")}</h2><p>${marketText("ホーム画面からすぐに開けます。基本画面は一度読み込むとオフラインでも表示できます。", "Open yytblue from your home screen. Core screens remain available after they have loaded once.")}</p></div></div>${installed ? `<div class="pwa-installed"><span>✓</span><b>${marketText("この端末にインストール済みです", "Installed on this device")}</b></div>` : canInstall ? `<button type="button" class="primary pwa-install-button" data-install-pwa>${marketText("アプリをインストール", "Install app")}</button>` : `<div class="pwa-manual"><b>${marketText("ホーム画面への追加方法", "How to add to your home screen")}</b><p>${steps}</p></div>`}</section>`;
}
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  pwaInstallPrompt = event;
  if (view === "settings") render();
});
window.addEventListener("appinstalled", () => {
  pwaInstallPrompt = null;
  if (view === "settings") render();
  notify(marketText("アプリをインストールしました", "App installed"));
});
function teenRestrictedPost(post) {
  if (!teenMode) return false;
  if (post.stock) return true;
  const text = `${post.text || ""} ${post.quoteOf?.text || ""}`.toLowerCase().replace(/\s/g, "");
  return ["成人向け", "アダルト", "ポルノ", "性的", "裸", "ヌード", "闇バイト", "受け子", "口座売買", "オンラインカジノ", "オンカジ", "自殺", "死に方", "リスカ", "オーバードーズ", "違法薬物", "大麻", "覚醒剤", "adultcontent", "porn", "suicide", "selfharm", "onlinecasino", "illegaldrug"].some((word) => text.includes(word));
}
Object.assign(copy.ja, {
  addImage: "添付",
  removeImage: "画像を削除",
  imagePreview: "選択した画像のプレビュー",
  imageError: "JPEG、PNG、WebP、GIFの画像を選択してください。",
  imageTooLarge: "画像は5MB以下にしてください。",
  documentError: "PDF、Word、Excel、PowerPoint、テキストなどの文書を選択してください。",
  documentTooLarge: "文書は1件10MB以下、最大4件までです。",
  removeDocument: "文書を削除",
  addAudio: "音声",
  recordAudio: "録音",
  removeAudio: "音声を削除",
  audioError: "MP3、M4A、WAV、OGG、WebMの音声を選択してください。",
  audioTooLarge: "音声は15MB以下にしてください。",
  audioUnavailable: "このブラウザでは録音を利用できません。",
  recordingReady: "録音の準備ができました",
  recordingNow: "録音中…",
  recordingDone: "録音を確認して「完了」を押してください",
  recordingPaused: "録音を一時停止しました。再開または完了できます",
  startRecording: "録音",
  resumeRecording: "再開",
  discardRecording: "削除",
  finishRecording: "完了",
  stopRecording: "一時停止",
  chooseQuote: "引用リツイート",
  chooseQuoteTitle: "引用する投稿を選択",
  poll: "投票",
  addPoll: "投票を追加",
  removePoll: "投票を削除",
  option1: "選択肢 1",
  option2: "選択肢 2",
  votes: "票",
  pollError: "2つの選択肢を入力してください。",
});
Object.assign(copy.en, {
  addImage: "Attach",
  removeImage: "Remove image",
  imagePreview: "Preview of selected image",
  imageError: "Choose a JPEG, PNG, WebP, or GIF image.",
  imageTooLarge: "Images must be 5 MB or smaller.",
  documentError: "Choose a PDF, Word, Excel, PowerPoint, text, or supported document file.",
  documentTooLarge: "Each document must be 10 MB or smaller, up to four files.",
  removeDocument: "Remove document",
  addAudio: "Audio",
  recordAudio: "Record",
  removeAudio: "Remove audio",
  audioError: "Choose an MP3, M4A, WAV, OGG, or WebM audio file.",
  audioTooLarge: "Audio must be 15 MB or smaller.",
  audioUnavailable: "Recording is not available in this browser.",
  recordingReady: "Ready to record",
  recordingNow: "Recording…",
  recordingDone: "Review the recording, then select Done",
  recordingPaused: "Recording paused. Resume or finish when ready",
  startRecording: "Record",
  resumeRecording: "Resume",
  discardRecording: "Delete",
  finishRecording: "Done",
  stopRecording: "Pause",
  chooseQuote: "Quote repost",
  chooseQuoteTitle: "Choose a post to quote",
  poll: "Poll",
  addPoll: "Add poll",
  removePoll: "Remove poll",
  option1: "Option 1",
  option2: "Option 2",
  votes: "votes",
  pollError: "Enter both poll options.",
});
const tr = (k) => copy[lang][k] || k;
const icon = (n) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]}"/></svg>`;
const users = [
  {
    id: "nagi",
    name: "なぎさ",
    handle: "nagisa_days",
    initial: "N",
    color: "#f0e9e2",
    ink: "#98745e",
    bio: "日常の小さな発見を、ことばに。散歩とコーヒーが好き。",
    mbti: "INFP",
  },
  {
    id: "sota",
    name: "そうた｜つくる人",
    handle: "sota_design",
    initial: "S",
    color: "#e5ecf7",
    ink: "#557aa7",
    bio: "デザインとものづくり。少しずつ、かたちに。",
    mbti: "ENTP",
  },
  {
    id: "haru",
    name: "はる",
    handle: "haru_book",
    initial: "H",
    color: "#e8efe9",
    ink: "#62806a",
    bio: "読書と喫茶店。心に残ったことを記録しています。",
    mbti: "INFJ",
  },
  {
    id: "mio",
    name: "みお",
    handle: "mio_notes",
    initial: "M",
    color: "#f4e8ed",
    ink: "#ae728b",
    bio: "好きな音楽と、ふだんの暮らし。",
    mbti: "ISFP",
  },
  {
    id: "you",
    name: "あなた",
    handle: "you",
    initial: "Y",
    color: "#dfeaff",
    ink: "#1265ed",
    bio: "はじめまして。日々のことを、少しずつ。",
    mbti: "",
  },
];
try {
  const savedProfile = JSON.parse(
    localStorage.getItem("blue-profile") || "null",
  );
  const self = users.find((u) => u.id === "you");
  if (
    savedProfile &&
    self &&
    typeof savedProfile.name === "string" &&
    typeof savedProfile.handle === "string" &&
    !users.some(
      (u) =>
        u.id !== "you" &&
        u.handle.toLowerCase() === savedProfile.handle.toLowerCase(),
    )
  ) {
    self.name = savedProfile.name;
    self.handle = savedProfile.handle;
    self.bio =
      typeof savedProfile.bio === "string" ? savedProfile.bio : self.bio;
    self.mbti = typeof savedProfile.mbti === "string" ? savedProfile.mbti : "";
    self.initial = [...self.name][0]?.toUpperCase() || "Y";
  }
} catch {}
let posts = [
  {
    id: 1,
    u: "nagi",
    text: "朝、いつもと違う道を歩いてみたら、小さな喫茶店を発見。\nこういう偶然があるから、寄り道はやめられない。☕\n\n#日々のこと #散歩",
    time: "12分",
    likes: 24,
    reposts: 3,
    replies: 2,
  },
  {
    id: 2,
    u: "sota",
    text: "「余白」って、何もない場所じゃなくて、\n大切なものをちゃんと見せるための場所なんだと思う。\n\n今日も少しずつ、つくっています。\n#デザイン #ものづくり",
    time: "28分",
    likes: 86,
    reposts: 12,
    replies: 5,
  },
  {
    id: 3,
    u: "haru",
    text: "本屋で気になった一冊を、あらすじを読まずに買ってみる。\n知らない世界に飛び込む、いちばん身近な方法かもしれない。📚\n\nみんなは、どうやって次に読む本を選んでる？",
    time: "45分",
    likes: 42,
    reposts: 4,
    replies: 8,
  },
  {
    id: 4,
    u: "mio",
    text: "作業用のプレイリストをつくっていたら、曲選びに夢中になってもう夕方。\nでも、いい一日だった。🎧\n\n#音楽のある暮らし",
    time: "1時間",
    likes: 19,
    reposts: 1,
    replies: 3,
  },
];
let questions = [
  { id: 1, to: "you", from: "nagi", anonymous: true, text: "最近いちばん楽しかったことは何ですか？", time: "サンプル", answer: null },
];
let relationships = [];
let lists = [];
let selectedListId = null;
let helpQuery = "";
let view = "home",
  tab = "all",
  query = "",
  profileUser = "you",
  following = new Set(["nagi"]),
  selectedPostId = null,
  postReturnView = "home",
  replyTo = null,
  repostTo = null,
  composingQuote = null,
  composingStock = null,
  composingImages = [],
  composingAudio = null,
  composingDocuments = [],
  composingYoutube = null,
  mediaRecorder = null,
  recordingChunks = [],
  recordingStream = null,
  recordingTimer = null,
  recordingSeconds = 0,
  recordedAudioCandidate = null,
  recordingCancelled = false,
  accountPrivate = false;
const $ = (s) => document.querySelector(s);
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const avatar = (u) =>
  `<span class="avatar" style="background:${u.color};color:${u.ink}">${u.initial}</span>`;
let toastTimer;
function notify(t) {
  $("#toast").textContent = t;
  $("#toast").style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ($("#toast").style.display = "none"), 2600);
}
let serverReady = false,
  persistTimer,
  saveErrorShown = false;
let shareholderLeaders = { nagi: [], sota: [], haru: [], mio: [] };
async function loadShareholderLeaders() {
  try {
    const response = await fetch("/api/shareholders", { cache: "no-store" });
    if (!response.ok) throw Error("leaderboard unavailable");
    const data = await response.json();
    if (data.leaders) shareholderLeaders = data.leaders;
  } catch {
    shareholderLeaders = { nagi: [], sota: [], haru: [], mio: [] };
  }
}
copy.ja.demo = "投稿・画像・投票・質問箱は保存され、再読み込み後も残ります。";
copy.en.demo = "Posts, images, polls, and questions are saved after reloading.";
function stateSnapshot() {
  const self = users.find((u) => u.id === "you");
  return {
    posts,
    questions,
    relationships,
    lists,
    following: [...following],
    accountPrivate,
    profile: {
      name: self.name,
      handle: self.handle,
      bio: self.bio,
      mbti: self.mbti || "",
      initial: self.initial,
    },
  };
}
function persistState() {
  if (!serverReady) return;
  clearTimeout(persistTimer);
  persistTimer = setTimeout(async () => {
    try {
      const response = await fetch("/api/state", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(stateSnapshot()),
      });
      if (!response.ok) throw Error("save failed");
      saveErrorShown = false;
    } catch {
      if (!saveErrorShown) {
        saveErrorShown = true;
        notify(
          lang === "ja"
            ? "保存できませんでした。接続を確認してください。"
            : "Could not save. Check your connection.",
        );
      }
    }
  }, 350);
}
async function loadServerState() {
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) throw Error("load failed");
    const { state } = await response.json();
    if (state) {
      if (Array.isArray(state.posts)) posts = state.posts;
      if (Array.isArray(state.questions)) questions = state.questions;
      if (Array.isArray(state.relationships)) relationships = state.relationships;
      if (Array.isArray(state.lists)) lists = state.lists;
      creatorMarket = CreatorMarket.restore(state.creatorMarket);
      if (Array.isArray(state.following)) following = new Set(state.following);
      if (typeof state.accountPrivate === "boolean")
        accountPrivate = state.accountPrivate;
      const self = users.find((u) => u.id === "you");
      if (state.profile && self) Object.assign(self, state.profile);
    }
    serverReady = true;
    await loadSharedMarket();
    render();
    if (!state) persistState();
  } catch {
    notify(
      lang === "ja"
        ? "保存データを読み込めませんでした。"
        : "Could not load saved data.",
    );
  }
}
loadServerState();
function navigate(v, u = "you") {
  view = v;
  profileUser = u;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function listHubHTML() {
  const selected = lists.find((item) => item.id === selectedListId);
  if (selected) {
    const members = selected.members.map((id) => users.find((u) => u.id === id)).filter(Boolean);
    return `<section class="lists-panel"><button class="list-back" type="button" data-list-back>← ${marketText("すべてのリスト", "All lists")}</button><div class="list-detail-head"><div class="list-cover">${escape(Array.from(selected.name)[0] || "L")}</div><div><h2>${escape(selected.name)}</h2><p>${escape(selected.description || marketText("説明はありません", "No description"))}</p><small>${members.length} ${marketText("人のメンバー", "members")}</small></div><button type="button" class="list-delete" data-delete-list="${selected.id}">${marketText("削除", "Delete")}</button></div><div class="list-member-picker"><h3>${marketText("メンバーを編集", "Edit members")}</h3>${users.filter((u) => u.id !== "you").map((u) => `<label>${avatar(u)}<span><b>${escape(u.name)}</b><small>@${escape(u.handle)}</small></span><input type="checkbox" data-list-member="${u.id}" ${selected.members.includes(u.id) ? "checked" : ""}></label>`).join("")}</div><div class="list-feed-title"><h3>${marketText("リストのタイムライン", "List timeline")}</h3><span>${members.length}</span></div></section>`;
  }
  return `<section class="lists-panel"><div class="lists-hero"><span class="eyebrow">CURATED FEEDS</span><h2>${marketText("自分だけのリスト", "Your lists")}</h2><p>${marketText("気になるユーザーをまとめて、専用タイムラインでポストを読めます。", "Group people you care about and read their posts in a dedicated timeline.")}</p></div><form id="list-create-form" class="list-create-form"><label>${marketText("リスト名", "List name")}<input name="name" maxlength="30" required placeholder="${marketText("例：クリエイター", "e.g. Creators")}"></label><label>${marketText("説明（任意）", "Description (optional)")}<input name="description" maxlength="100" placeholder="${marketText("このリストについて", "About this list")}"></label><button class="primary">${marketText("リストを作成", "Create list")}</button></form><div class="list-grid">${lists.map((item) => `<article><button type="button" data-open-list="${item.id}"><span class="list-cover">${escape(Array.from(item.name)[0] || "L")}</span><span><b>${escape(item.name)}</b><small>${item.members.length} ${marketText("人のメンバー", "members")}</small><em>${escape(item.description || marketText("説明はありません", "No description"))}</em></span><span>→</span></button></article>`).join("") || `<div class="empty">${marketText("リストはまだありません。最初のリストを作成してみましょう。", "No lists yet. Create your first list.")}</div>`}</div></section>`;
}
function questionBoxHTML() {
  const inbox=questions.filter(q=>q.to==='you').sort((a,b)=>b.id-a.id);
  const sent=questions.filter(q=>q.to!=='you').sort((a,b)=>b.id-a.id);
  const personName=id=>users.find(u=>u.id===id)?.name || marketText('ユーザー','User');
  return `<section class="question-box"><span class="eyebrow">Q&amp;A</span><h2>${marketText('質問箱','Question box')}</h2><p>${marketText('聞いてみたいことを匿名または名前付きで送れます。回答はポストとして公開できます。','Send a question anonymously or with your name. Answers can be published as posts.')}</p><form id="question-send-form" class="question-form"><label>${marketText('送信先','Recipient')}<select name="to">${users.map(u=>`<option value="${u.id}">${escape(u.name)} · @${escape(u.handle)}</option>`).join('')}</select></label><label>${marketText('質問','Question')}<textarea name="text" maxlength="200" rows="3" required placeholder="${marketText('質問を入力','Write your question')}"></textarea></label><label class="question-identity"><input name="anonymous" type="checkbox" checked> ${marketText('匿名で送る','Send anonymously')}</label><button class="primary">${marketText('質問を送る','Send question')}</button></form><div class="question-columns"><section><h3>${marketText('受信した質問','Inbox')}</h3>${inbox.map(q=>`<article class="question-card"><small>${q.anonymous?marketText('匿名','Anonymous'):escape(personName(q.from))} · ${escape(q.time)}</small><p>${escape(q.text)}</p>${q.answer?`<div class="question-answer"><b>${marketText('回答済み','Answered')}</b><p>${escape(q.answer)}</p></div>`:`<form data-question-answer="${q.id}"><textarea name="answer" maxlength="200" rows="2" required placeholder="${marketText('回答を書く','Write an answer')}"></textarea><button>${marketText('回答をポスト','Post answer')}</button></form>`}</article>`).join('')||`<div class="empty">${marketText('質問はまだありません。','No questions yet.')}</div>`}</section><section><h3>${marketText('送信した質問','Sent')}</h3>${sent.map(q=>`<article class="question-card"><small>${escape(personName(q.to))}へ · ${q.anonymous?marketText('匿名','Anonymous'):marketText('名前を表示','Named')}</small><p>${escape(q.text)}</p></article>`).join('')||`<div class="empty">${marketText('送信した質問はありません。','No sent questions.')}</div>`}</section></div></section>`;
}
const relationshipTypes = [
  ["parent", "親", "Parent"], ["child", "子", "Child"],
  ["older-brother", "兄", "Older brother"], ["younger-brother", "弟", "Younger brother"],
  ["older-sister", "姉", "Older sister"], ["younger-sister", "妹", "Younger sister"],
  ["sibling", "兄弟姉妹", "Sibling"], ["best-friend", "親友", "Best friend"],
  ["partner", "恋人", "Partner"], ["spouse", "夫婦", "Spouse"],
  ["cousin", "いとこ", "Cousin"], ["second-cousin", "はとこ", "Second cousin"],
  ["friend", "友達", "Friend"], ["custom", "その他", "Custom"],
];
function relationshipLabel(item) {
  if (item.type === "custom") return item.custom || marketText("その他", "Custom");
  const type = relationshipTypes.find(([id]) => id === item.type);
  return type ? (lang === "ja" ? type[1] : type[2]) : item.type;
}
function relationshipsHTML() {
  const cards = [...relationships].sort((a, b) => b.id - a.id).map((item) => {
    const initial = Array.from(item.person || "?")[0] || "?";
    return `<article class="relationship-card"><div class="relationship-avatar">${escape(initial.toUpperCase())}</div><div class="relationship-card-body"><div class="relationship-card-head"><div><h3>${escape(item.person)}</h3><span class="relationship-kind">${escape(relationshipLabel(item))}</span>${item.fictional ? `<span class="relationship-virtual">${marketText("創作・オンライン", "Fictional / online")}</span>` : ""}</div><button type="button" data-delete-relationship="${item.id}" aria-label="${marketText("関係を削除", "Delete relationship")}" title="${marketText("削除", "Delete")}">×</button></div>${item.note ? `<p>${escape(item.note)}</p>` : ""}</div></article>`;
  }).join("");
  const options = relationshipTypes.map(([id, ja, en]) => `<option value="${id}">${lang === "ja" ? ja : en}</option>`).join("");
  return `<section class="relationships-panel"><div class="relationships-intro"><span class="eyebrow">MY CIRCLE</span><h2>${marketText("自分の交友関係", "My relationships")}</h2><p>${marketText("現実の知り合いだけでなく、創作した人物やオンライン上の関係も自由に登録できます。", "Add people you know in real life, fictional characters, or online relationships.")}</p></div><div class="relationship-hub"><div class="relationship-me"><span>${marketText("あなた", "You")}</span><b>${relationships.length}</b><small>${marketText("人とつながり", "connections")}</small></div><div><b>${marketText("関係を自分でつくる", "Build your own circle")}</b><p>${marketText("同じ相手でも、異なる関係なら複数登録できます。", "The same person can have more than one relationship type.")}</p></div></div><form id="relationship-form" class="relationship-form"><label>${marketText("名前", "Name")}<input name="person" maxlength="40" required placeholder="${marketText("人物の名前", "Person's name")}"></label><label>${marketText("関係", "Relationship")}<select name="type">${options}</select></label><label>${marketText("その他の関係名", "Custom relationship")}<input name="custom" maxlength="30" placeholder="${marketText("師匠、相棒など", "Mentor, teammate, etc.")}"></label><label class="relationship-note">${marketText("メモ（任意）", "Note (optional)")}<textarea name="note" maxlength="160" rows="2" placeholder="${marketText("この人との関係や思い出", "A note about this relationship")}"></textarea></label><label class="relationship-fictional"><input name="fictional" type="checkbox"> ${marketText("創作・オンライン上の関係", "Fictional or online relationship")}</label><button class="primary">${marketText("関係を追加", "Add relationship")}</button></form><div class="relationship-list"><div class="relationship-list-title"><h3>${marketText("つながり", "Connections")}</h3><span>${relationships.length}</span></div>${cards || `<div class="empty">${marketText("まだ関係がありません。最初のひとりを追加してみましょう。", "No relationships yet. Add the first person to your circle.")}</div>`}</div></section>`;
}
function helpCenterHTML() {
  const items = lang === "ja" ? [
    ["はじめに", "yytblueはどのようなサービスですか？", "投稿、画像・音声の共有、質問箱、ゲーム、交友関係などを楽しめるマイクロブログです。設定から言語や表示テーマも選べます。"],
    ["投稿", "ポスト、返信、リポスト、引用リポストの違いは？", "ポストは通常の投稿、返信は投稿への返答です。リポストは投稿を共有し、引用リポストでは自分のコメントを添えて共有できます。"],
    ["画像・音声・動画", "画像、音声、YouTube動画を投稿できますか？", "画像は最大4枚、音声は録音または音声ファイルから1件追加できます。PDF、Word、Excel、PowerPointなどの文書は最大4件、1件10MBまで添付できます。YouTube動画はURLを入力すると投稿内で再生できます。音声はほかのファイルと同時には追加できません。"],
    ["PWA", "アプリとしてホーム画面に追加するには？", "設定の「yytblueをアプリとして使う」から案内を確認できます。対応ブラウザではインストールボタンを使えます。iPhoneではSafariの共有メニューから「ホーム画面に追加」を選択してください。"],
    ["アカウント", "プロフィールと公開範囲を変更するには？", "プロフィール画面で表示名、ユーザー名、自己紹介、MBTIを編集できます。設定ではアカウントを非公開に切り替えられます。ユーザー名は重複できません。"],
    ["検索", "都道府県や政令指定都市を検索できますか？", "できます。都道府県名や政令指定都市名を検索すると、地域案内と公式サイトへのリンクが表示されます。"],
    ["安全", "危険な検索語を入力した場合は？", "闇バイト、自傷、オンラインカジノ、消費者トラブルなどに関する検索では、相談先や注意情報を表示します。緊急時は地域の緊急窓口へ連絡してください。"],
    ["質問箱", "質問箱はどのように使いますか？", "送信先を選び、匿名または名前付きで質問を送れます。受け取った人は回答を投稿として公開できます。"],
    ["ゲーム", "ゲームルームでできることは？", "オセロ、将棋、囲碁、チェス、テトリス、ブロックブラスト風ゲーム、じゃんけんを遊べます。CPU対戦、オンライン対戦、プライベートルームにも対応しています。"],
    ["シェア市場", "クリエイターシェアとは何ですか？", "クリエイターの活動を応援するための、ポイントを使ったデモ用のシェア市場です。実際の株式や金融商品ではありません。"],
    ["ティーン向け制限", "ティーン向け制限とは何ですか？", "この端末でセンシティブな投稿とシェア市場を非表示にし、危険な検索の案内を強化します。設定には4桁の保護者PINを使用します。"],
  ] : [
    ["Getting started", "What is yytblue?", "yytblue is a microblog for posts, image and audio sharing, questions, games, and personal relationships. You can also choose a language and theme in Settings."],
    ["Posting", "How do posts, replies, reposts, and quote reposts differ?", "A post is a regular update. A reply responds to a post. A repost shares it, while a quote repost shares it with your own comment."],
    ["Media", "Can I post images, audio, or YouTube videos?", "You can add up to four images, one audio recording or audio file, up to four PDF, Word, Excel, PowerPoint, or other supported documents of 10 MB each, or a YouTube video by entering its URL. Audio cannot be combined with other files."],
    ["PWA", "How do I add yytblue to my home screen?", "See the guide under Use yytblue as an app in Settings. On supported browsers, use Install app. On iPhone, use Safari Share, then Add to Home Screen."],
    ["Account", "How do I change my profile or privacy?", "Edit your name, username, bio, and MBTI from Profile. Set your account to private in Settings. Usernames must be unique."],
    ["Search", "Can I search prefectures and designated cities?", "Yes. Searching a prefecture or designated city shows a regional guide and a link to its official website."],
    ["Safety", "What happens when I search risky terms?", "Searches related to illegal jobs, self-harm, online casinos, or consumer issues show safety information and relevant support resources. Contact local emergency services in an emergency."],
    ["Questions", "How does the question box work?", "Choose a recipient and send a question anonymously or with your name. Recipients can publish an answer as a post."],
    ["Games", "What is available in Game rooms?", "Play Othello, Shogi, Go, Chess, Tetris, Block Blast-style puzzles, and Rock Paper Scissors. CPU games, online games, and private rooms are available."],
    ["Creator Shares", "What are Creator Shares?", "Creator Shares are a points-based demo market for supporting creators. They are not real shares or financial products."],
    ["Teen restrictions", "What are Teen restrictions?", "They hide sensitive posts and Creator Shares on this device and strengthen risky-search guidance. Settings use a four-digit guardian PIN."],
  ];
  const q = helpQuery.trim().toLowerCase();
  const matches = q ? items.filter(item => item.join(" ").toLowerCase().includes(q)) : items;
  return `<section class="help-center"><div class="help-hero"><span class="eyebrow">HELP CENTER</span><h2>${marketText("yytblue ヘルプセンター", "yytblue Help Center")}</h2><p>${marketText("使い方やよくある質問を検索できます。", "Search guides and frequently asked questions.")}</p><form id="help-search" class="help-search"><input name="q" value="${escape(helpQuery)}" placeholder="${marketText("例：投稿、PWA、ゲーム、検索", "Try posting, PWA, games, search")}" aria-label="${marketText("ヘルプを検索", "Search help")}"><button>${marketText("検索", "Search")}</button></form></div><div class="help-results"><div class="help-result-head"><h3>${q ? marketText("検索結果", "Search results") : marketText("よくある質問", "Frequently asked questions")}</h3><span>${matches.length}</span></div>${matches.map(([category, title, answer]) => `<details class="help-item" ${q ? "open" : ""}><summary><span class="help-category">${escape(category)}</span><b>${escape(title)}</b><span aria-hidden="true">＋</span></summary><p>${escape(answer)}</p></details>`).join("") || `<div class="empty">${marketText("一致するヘルプがありません。別の言葉で検索してください。", "No help articles matched. Try another search.")}</div>`}</div></section>`;
}
function adhdCheckHTML() {
  const qs = lang === "ja"
    ? ["作業の細かい部分を見落としやすい","長い説明や会話に集中し続けるのが難しい","必要な物をなくしたり、予定を忘れたりする","やるべきことを順序立てて進めるのが難しい","座っている場面でも落ち着かないと感じる","順番を待つことや、発言を待つことが難しい"]
    : ["I often miss details when working on a task","I find it hard to stay focused through long explanations or conversations","I lose needed items or forget plans","I find it hard to organize tasks in order","I feel restless even when expected to remain seated","I find it hard to wait my turn before acting or speaking"];
  const labels=lang==="ja"?["まったくない","ときどき","よくある","とてもよくある"]:["Never","Sometimes","Often","Very often"];
  return `<section class="check-panel"><span class="eyebrow">WELL-BEING</span><h2>${lang==='ja'?'ADHDセルフチェック':'ADHD self-check'}</h2><div class="medical-note"><b>${lang==='ja'?'これは医学的な診断ではありません':'This is not a medical diagnosis'}</b><p>${lang==='ja'?'ADHDは単一のテストでは診断できません。睡眠、ストレス、不安などでも似た状態が起こります。過去6か月の傾向を振り返る目安として利用してください。':'ADHD cannot be diagnosed with a single test. Sleep, stress, anxiety, and other factors can cause similar experiences. Use this only to reflect on the past six months.'}</p></div><form id="adhd-check-form">${qs.map((q,i)=>`<fieldset><legend><span>${i+1}</span>${q}</legend><div>${labels.map((label,n)=>`<label><input type="radio" name="q${i}" value="${n}" required><span>${label}</span></label>`).join('')}</div></fieldset>`).join('')}<button class="primary">${lang==='ja'?'結果を見る':'View result'}</button></form><div id="adhd-result" class="check-result" hidden></div><p class="check-privacy">${lang==='ja'?'回答と結果は保存されません。困りごとが続く場合は、医師や心理職などの専門家に相談してください。':'Answers and results are not saved. If these difficulties persist, consider talking with a qualified healthcare professional.'}</p><a class="medical-source" href="https://www.cdc.gov/adhd/diagnosis/index.html" target="_blank" rel="noreferrer">${lang==='ja'?'ADHDの診断について（CDC）':'About ADHD diagnosis (CDC)'}</a></section>`;
}
document.addEventListener('submit',e=>{
  if(e.target.id==='question-send-form') {
    e.preventDefault();
    const data=new FormData(e.target),text=String(data.get('text')||'').trim(),to=String(data.get('to')||'');
    if(!text || !users.some(u=>u.id===to)) return;
    questions.push({id:Date.now(),to,from:'you',anonymous:data.get('anonymous')==='on',text,time:marketText('たった今','Just now'),answer:null});
    persistState();render();notify(marketText('質問を送りました','Question sent'));
    return;
  }
  const answerForm=e.target.closest('[data-question-answer]');
  if(answerForm) {
    e.preventDefault();
    const q=questions.find(q=>q.id===Number(answerForm.dataset.questionAnswer)&&q.to==='you');
    const answer=String(new FormData(answerForm).get('answer')||'').trim();
    if(!q || q.answer || !answer) return;
    q.answer=answer;q.answeredAt=Date.now();
    const postId=createPost(answer),post=posts.find(p=>p.id===postId),sender=users.find(u=>u.id===q.from);
    post.qa={text:q.text,anonymous:q.anonymous,fromName:q.anonymous?'':sender?.name||marketText('ユーザー','User')};
    persistState();render();notify(marketText('回答をポストしました','Answer posted'));
  }
});
document.addEventListener("submit", async (e) => {
  if (e.target.id !== "teen-mode-form") return;
  e.preventDefault();
  const pin = String(new FormData(e.target).get("pin") || "");
  if (!/^\d{4}$/.test(pin)) { notify(marketText("PINは4桁の数字で入力してください", "Enter a 4-digit PIN")); return; }
  const hash = await teenPinHash(pin);
  if (!teenMode) {
    localStorage.setItem("blue-teen-pin", hash);
    localStorage.setItem("blue-teen-mode", "on");
    teenMode = true;
    if (view === "market") view = "home";
    render();
    notify(marketText("ティーン向け制限を有効にしました", "Teen restrictions enabled"));
    return;
  }
  if (hash !== localStorage.getItem("blue-teen-pin")) { notify(marketText("PINが違います", "Incorrect PIN")); return; }
  localStorage.removeItem("blue-teen-pin");
  localStorage.removeItem("blue-teen-mode");
  teenMode = false;
  render();
  notify(marketText("ティーン向け制限を解除しました", "Teen restrictions disabled"));
});
function openPostDetail(id) {
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return;
  if (view !== "post") postReturnView = view;
  selectedPostId = post.id;
  view = "post";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
let lastScrollY = window.scrollY,
  scrollTicking = false;
function updateBottomBar() {
  const currentY = Math.max(0, window.scrollY);
  const mobile = window.matchMedia("(max-width: 600px)").matches;
  const bar = document.querySelector(".left");
  if (!mobile) {
    bar.classList.remove("nav-hidden");
  } else if (currentY < 24 || currentY < lastScrollY - 8) {
    bar.classList.remove("nav-hidden");
  } else if (currentY > lastScrollY + 8 && currentY > 80) {
    bar.classList.add("nav-hidden");
  }
  lastScrollY = currentY;
  scrollTicking = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateBottomBar);
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateBottomBar);
function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelector(".demo-banner").textContent = tr("demo");
  document.querySelector('[data-tab="all"]').textContent = tr("recommended");
  document.querySelector('[data-tab="following"]').textContent =
    tr("following");
  $("#post-text").placeholder = tr("placeholder");
  $("#image-picker-label").textContent = tr("addImage");
  document.querySelector(".image-picker").title = tr("addImage");
  document
    .querySelector(".image-picker")
    .setAttribute("aria-label", tr("addImage"));
  document.querySelector(".image-picker span:first-child").innerHTML =
    icon("image");
  document
    .querySelectorAll("[data-remove-image]")
    .forEach((b) => b.setAttribute("aria-label", tr("removeImage")));
  $("#record-audio-label").textContent =
    mediaRecorder?.state === "recording"
      ? tr("stopRecording")
      : tr("recordAudio");
  $("#record-audio").title = $("#record-audio-label").textContent;
  $("#remove-audio").setAttribute("aria-label", tr("removeAudio"));
  $("#record-dialog-title").textContent = tr("recordAudio");
  $("#start-recording").textContent =
    mediaRecorder?.state === "paused"
      ? tr("resumeRecording")
      : tr("startRecording");
  $("#stop-recording").textContent = tr("stopRecording");
  $("#discard-recording").textContent = tr("discardRecording");
  $("#finish-recording").textContent = tr("finishRecording");
  $("#choose-quote").title = tr("chooseQuote");
  $("#choose-quote").setAttribute("aria-label", tr("chooseQuote"));
  $("#quote-picker-title").textContent = tr("chooseQuoteTitle");
  $("#poll-title").textContent = tr("poll");
  $("#poll-toggle-label").textContent = tr("poll");
  $("#add-poll").title = tr("addPoll");
  $("#add-poll").setAttribute("aria-label", tr("addPoll"));
  $("#add-poll span:first-child").innerHTML = icon("poll");
  $("#add-youtube").title = marketText("YouTube動画を追加", "Add YouTube video");
  $("#add-youtube").setAttribute("aria-label", $("#add-youtube").title);
  $("#youtube-dialog-title").textContent = marketText("YouTube動画を追加", "Add YouTube video");
  $("#youtube-dialog-help").textContent = marketText("YouTube動画のURLを入力してください。", "Enter a YouTube video URL.");
  $("#youtube-add-button").textContent = marketText("追加する", "Add video");
  $("#remove-poll").setAttribute("aria-label", tr("removePoll"));
  document
    .querySelectorAll("[data-poll-option]")
    .forEach(
      (input, i) =>
        (input.placeholder = `${lang === "ja" ? "選択肢" : "Option"} ${i + 1}`),
    );
  $("#add-poll-option").textContent =
    lang === "ja" ? "＋ 選択肢を追加" : "+ Add option";
  document
    .querySelectorAll("[data-remove-poll-option]")
    .forEach((b) =>
      b.setAttribute(
        "aria-label",
        lang === "ja" ? "選択肢を削除" : "Remove option",
      ),
    );
  document.querySelector(".feed-label span:last-child").textContent =
    tr("latest");
  document.querySelector("#right-search input").placeholder =
    tr("searchPlaceholder");
  document
    .querySelector("#right-search input")
    .setAttribute("aria-label", tr("searchPlaceholder"));
  document.querySelector(".welcome h2").innerHTML = tr("welcome");
  document.querySelector(".welcome p").innerHTML = tr("welcomeText");
  document.querySelectorAll(".side-card h2")[0].childNodes[0].textContent =
    tr("trends");
  document.querySelectorAll(".side-card h2")[1].textContent = tr("people");
  document.querySelector(".compose-nav span").textContent = tr("compose");
  document
    .querySelector(".compose-nav")
    .setAttribute("aria-label", tr("compose"));
  document.querySelector(".compose-nav").title = tr("compose");
  document.querySelector(".account").setAttribute("aria-label", tr("user"));
  document.querySelector(".account").title = tr("user");
  const ui =
    lang === "ja"
      ? {
          trial: "体験版",
          motto: "あなたの「いま」を、ここから。",
          you: "あなた",
          repostTitle: "リポスト",
          plain: "↻ リツイート<br><small>コメントなしで共有</small>",
          quote: "❝ 引用リツイート<br><small>コメントを添えて共有</small>",
          replyTitle: "返信する",
          replyPlaceholder: "返信を入力",
          replyButton: "返信する",
          end: "ここまでのポストを読みました",
          again: "また、新しいつながりを。",
          demoFoot:
            "Blue · インタラクティブデモ<br>表示される人物・ポストはサンプルです。",
        }
      : {
          trial: "DEMO",
          motto: "Share what is happening now.",
          you: "You",
          repostTitle: "Repost",
          plain: "↻ Repost<br><small>Share without a comment</small>",
          quote: "❝ Quote repost<br><small>Add a comment and share</small>",
          replyTitle: "Reply",
          replyPlaceholder: "Write a reply",
          replyButton: "Reply",
          end: "You're all caught up",
          again: "Come back for new connections.",
          demoFoot:
            "Blue · Interactive demo<br>People and posts shown are samples.",
        };
  document.querySelector(".demo-label").textContent = ui.trial;
  document.querySelector(".left-bottom>p").textContent = ui.motto;
  document.querySelector(".account b").textContent =
    users.find((u) => u.id === "you").name === "あなた"
      ? ui.you
      : users.find((u) => u.id === "you").name;
  document.querySelector(".account small").textContent =
    "@" + users.find((u) => u.id === "you").handle;
  document.querySelector(".account .avatar").textContent = users.find(
    (u) => u.id === "you",
  ).initial;
  document.querySelector(".composer .avatar").textContent = users.find(
    (u) => u.id === "you",
  ).initial;
  document.querySelector("#repost-dialog h2").textContent = ui.repostTitle;
  document.querySelectorAll(".repost-choice")[0].innerHTML = ui.plain;
  document.querySelectorAll(".repost-choice")[1].innerHTML = ui.quote;
  document.querySelector("#profile-dialog h2").textContent = tr("editProfile");
  $("#profile-help").textContent = tr("editProfileHelp");
  document.querySelector('label[for="profile-name"]').textContent =
    tr("displayName");
  document.querySelector('label[for="profile-handle"]').textContent =
    tr("username");
  document.querySelector('label[for="profile-bio"]').textContent =
    tr("bioLabel");
  document.querySelector('label[for="profile-mbti"]').textContent =
    tr("mbtiLabel");
  $("#profile-mbti option[value='']").textContent = tr("mbtiUnset");
  $("#cancel-profile").textContent = tr("cancel");
  $("#save-profile").textContent = tr("saveChanges");
  document.querySelector("#reply-dialog h2").textContent = ui.replyTitle;
  $("#reply-text").placeholder = ui.replyPlaceholder;
  document.querySelector("#reply-form>.primary").textContent = ui.replyButton;
  document.querySelector(".feed-end p").textContent = ui.end;
  document.querySelector(".feed-end small").textContent = ui.again;
  document.querySelector(".demo-foot").innerHTML = ui.demoFoot;
  const trendData =
    lang === "ja"
      ? [
          ["暮らし・日常", "#日々のこと", "1,284"],
          ["クリエイティブ", "#デザイン", "856"],
          ["好きなこと", "#音楽のある暮らし", "642"],
        ]
      : [
          ["Life & daily", "#EverydayLife", "1,284"],
          ["Creative", "#Design", "856"],
          ["Interests", "#LifeWithMusic", "642"],
        ];
  $("#trends").innerHTML = trendData
    .map(
      ([c, t, n]) =>
        `<button class="trend" data-trend="${t}"><small>${c}</small><b>${t}</b><em>${n} ${lang === "ja" ? "件のポスト · サンプル" : "sample posts"}</em></button>`,
    )
    .join("");
  updateQuoteComposer();
}
function trendViewHTML() {
  const data =
    lang === "ja"
      ? [
          ["暮らし・日常", "#日々のこと", "1,284"],
          ["クリエイティブ", "#デザイン", "856"],
          ["好きなこと", "#音楽のある暮らし", "642"],
          ["本・学び", "#読書", "518"],
          ["写真", "#今日の写真", "376"],
          ["日記", "#今日の記録", "294"],
        ]
      : [
          ["Life & daily", "#EverydayLife", "1,284"],
          ["Creative", "#Design", "856"],
          ["Interests", "#LifeWithMusic", "642"],
          ["Books & learning", "#Reading", "518"],
          ["Photography", "#PhotoOfTheDay", "376"],
          ["Journal", "#Today", "294"],
        ];
  return `<section class="trends-page"><span class="eyebrow">TRENDING NOW</span><h2>${tr("trendTitle")}</h2><p>${tr("trendHelp")}</p><div class="trend-ranking">${data.map(([category, label, count], i) => `<button data-trend="${label}" class="trend-row"><span class="trend-rank">${String(i + 1).padStart(2, "0")}</span><span class="trend-copy"><small>${category}</small><b>${label}</b><em>${count} ${lang === "ja" ? "件のポスト" : "posts"}</em></span><span class="trend-arrow">↗</span></button>`).join("")}</div></section>`;
}
function userSearchHTML() {
  const normalized = query.trim().replace(/^@/, "").toLowerCase();
  const matches = users.filter(
    (u) =>
      !normalized ||
      (u.name + " " + u.id + " " + u.handle).toLowerCase().includes(normalized),
  );
  const cards = matches
    .map(
      (u) =>
        `<article class="user-result"><button data-person="${u.id}" class="user-result-main" aria-label="${u.name}">${avatar(u)}<span><b>${u.name}</b><small>@${u.handle}</small><em>${u.bio}</em></span></button>${u.id === "you" ? `<span class="self-label">${tr("youLabel")}</span>` : `<button data-follow="${u.id}" class="follow ${following.has(u.id) ? "on" : ""}" aria-pressed="${following.has(u.id)}">${following.has(u.id) ? tr("followingBtn") : tr("follow")}</button>`}</article>`,
    )
    .join("");
  return `<section class="user-results"><h2>${query ? tr("accounts") : tr("suggestedAccounts")}</h2>${cards || `<p class="no-users">${tr("noAccounts")}</p>`}</section>`;
}
// Official prefectural portals; directory: https://www.wam.go.jp/content/wamnet/pcpub/top/link/top_link04.html
const prefectureGuides = "北海道|Hokkaido|ほっかいどう|北海道|札幌市|hokkaido.lg\n青森県|Aomori|あおもり|東北|青森市|aomori.lg\n岩手県|Iwate|いわて|東北|盛岡市|iwate\n宮城県|Miyagi|みやぎ|東北|仙台市|miyagi\n秋田県|Akita|あきた|東北|秋田市|akita.lg\n山形県|Yamagata|やまがた|東北|山形市|yamagata\n福島県|Fukushima|ふくしま|東北|福島市|fukushima.lg\n茨城県|Ibaraki|いばらき|関東|水戸市|ibaraki\n栃木県|Tochigi|とちぎ|関東|宇都宮市|tochigi.lg\n群馬県|Gunma|ぐんま|関東|前橋市|gunma\n埼玉県|Saitama|さいたま|関東|さいたま市|saitama.lg\n千葉県|Chiba|ちば|関東|千葉市|chiba.lg\n東京都|Tokyo|とうきょう|関東|新宿区|metro.tokyo.lg\n神奈川県|Kanagawa|かながわ|関東|横浜市|kanagawa\n新潟県|Niigata|にいがた|中部|新潟市|niigata.lg\n富山県|Toyama|とやま|中部|富山市|toyama\n石川県|Ishikawa|いしかわ|中部|金沢市|ishikawa.lg\n福井県|Fukui|ふくい|中部|福井市|fukui.lg\n山梨県|Yamanashi|やまなし|中部|甲府市|yamanashi\n長野県|Nagano|ながの|中部|長野市|nagano.lg\n岐阜県|Gifu|ぎふ|中部|岐阜市|gifu.lg\n静岡県|Shizuoka|しずおか|中部|静岡市|shizuoka\n愛知県|Aichi|あいち|中部|名古屋市|aichi\n三重県|Mie|みえ|近畿|津市|mie.lg\n滋賀県|Shiga|しが|近畿|大津市|shiga.lg\n京都府|Kyoto|きょうと|近畿|京都市|kyoto\n大阪府|Osaka|おおさか|近畿|大阪市|osaka.lg\n兵庫県|Hyogo|ひょうご|近畿|神戸市|hyogo.lg\n奈良県|Nara|なら|近畿|奈良市|nara\n和歌山県|Wakayama|わかやま|近畿|和歌山市|wakayama.lg\n鳥取県|Tottori|とっとり|中国|鳥取市|tottori.lg\n島根県|Shimane|しまね|中国|松江市|shimane.lg\n岡山県|Okayama|おかやま|中国|岡山市|okayama\n広島県|Hiroshima|ひろしま|中国|広島市|hiroshima.lg\n山口県|Yamaguchi|やまぐち|中国|山口市|yamaguchi.lg\n徳島県|Tokushima|とくしま|四国|徳島市|tokushima.lg\n香川県|Kagawa|かがわ|四国|高松市|kagawa.lg\n愛媛県|Ehime|えひめ|四国|松山市|ehime\n高知県|Kochi|こうち|四国|高知市|kochi.lg\n福岡県|Fukuoka|ふくおか|九州・沖縄|福岡市|fukuoka.lg\n佐賀県|Saga|さが|九州・沖縄|佐賀市|saga.lg\n長崎県|Nagasaki|ながさき|九州・沖縄|長崎市|nagasaki\n熊本県|Kumamoto|くまもと|九州・沖縄|熊本市|kumamoto\n大分県|Oita|おおいた|九州・沖縄|大分市|oita\n宮崎県|Miyazaki|みやざき|九州・沖縄|宮崎市|miyazaki.lg\n鹿児島県|Kagoshima|かごしま|九州・沖縄|鹿児島市|kagoshima\n沖縄県|Okinawa|おきなわ|九州・沖縄|那覇市|okinawa".split("\n").map(row => {
  const [name, en, kana, region, capital, host] = row.split("|");
  return { name, en, kana, region, capital, url: "https://www." + (host.startsWith("metro.") ? host : "pref." + host) + ".jp/" };
});
function matchingPrefectures(value) {
  const q = String(value).normalize("NFKC").toLowerCase().trim().replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  if (!q || q.startsWith("@")) return [];
  return prefectureGuides.filter(p => {
    const short = p.name === "北海道" ? p.name : p.name.slice(0, -1);
    // Kyoto must not match the middle of Tokyo-to (東京都).
    const kanji = q.replace(/東京都/g, p.name === "東京都" ? "東京都" : "");
    const kanaTokens = q.split(/[\s#＃、,。・]+/);
    return kanji.includes(short) || kanaTokens.some(t => t === p.kana || t === p.kana + "けん" || t === p.kana + "ふ" || t === p.kana + "と") ||
      new RegExp("(^|[^a-z])" + p.en.toLowerCase() + "([^a-z]|$)").test(q);
  });
}
// Designated cities: https://www.siteitosi.jp/about/designated.html
const designatedCityGuides = "札幌市|Sapporo|さっぽろ|北海道|www.city.sapporo.jp\n仙台市|Sendai|せんだい|宮城県|www.city.sendai.jp\nさいたま市|Saitama|さいたま|埼玉県|www.city.saitama.lg.jp\n千葉市|Chiba|ちば|千葉県|www.city.chiba.jp\n横浜市|Yokohama|よこはま|神奈川県|www.city.yokohama.lg.jp\n川崎市|Kawasaki|かわさき|神奈川県|www.city.kawasaki.jp\n相模原市|Sagamihara|さがみはら|神奈川県|www.city.sagamihara.kanagawa.jp\n新潟市|Niigata|にいがた|新潟県|www.city.niigata.lg.jp\n静岡市|Shizuoka|しずおか|静岡県|www.city.shizuoka.lg.jp\n浜松市|Hamamatsu|はままつ|静岡県|www.city.hamamatsu.shizuoka.jp\n名古屋市|Nagoya|なごや|愛知県|www.city.nagoya.jp\n京都市|Kyoto|きょうと|京都府|www.city.kyoto.lg.jp\n大阪市|Osaka|おおさか|大阪府|www.city.osaka.lg.jp\n堺市|Sakai|さかい|大阪府|www.city.sakai.lg.jp\n神戸市|Kobe|こうべ|兵庫県|www.city.kobe.lg.jp\n岡山市|Okayama|おかやま|岡山県|www.city.okayama.jp\n広島市|Hiroshima|ひろしま|広島県|www.city.hiroshima.lg.jp\n北九州市|Kitakyushu|きたきゅうしゅう|福岡県|www.city.kitakyushu.lg.jp\n福岡市|Fukuoka|ふくおか|福岡県|www.city.fukuoka.lg.jp\n熊本市|Kumamoto|くまもと|熊本県|www.city.kumamoto.jp".split("\n").map(row => {
  const [name, en, kana, prefecture, host] = row.split("|");
  return { name, en, kana, prefecture, city: true, url: "https://" + host + "/" };
});
function matchingDesignatedCities(value) {
  const q = String(value).normalize("NFKC").toLowerCase().trim().replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  if (!q || q.startsWith("@")) return [];
  return designatedCityGuides.filter(p => {
    const text = q.replace(/東京都/g, "").replace(new RegExp(p.prefecture, "g"), "");
    const short = p.name.slice(0, -1);
    const tokens = text.split(/[\s#＃、,。・]+/);
    return text.includes(p.name) || (short.length > 1 && /[一-龠]/.test(short) && text.includes(short)) ||
      tokens.some(t => t === short || t === p.kana || t === p.kana + "し") ||
      new RegExp("(^|[^a-z])" + p.en.toLowerCase() + "(?: city)?([^a-z]|$)").test(text);
  });
}
function prefectureGuideHTML(value) {
  const matches = [...matchingDesignatedCities(value), ...matchingPrefectures(value)];
  if (!matches.length) return "";
  return '<section class="prefecture-guides" aria-label="' + marketText("地域の案内", "Area guides") + '">' + matches.map(p => `
    <article class="prefecture-guide">
      <small>${p.city ? marketText("政令指定都市ガイド", "DESIGNATED CITY GUIDE") : marketText("都道府県ガイド", "PREFECTURE GUIDE")}</small>
      <h2>${escape(lang === "ja" ? p.name : p.en)}</h2>
      <p>${p.city ? marketText("都道府県：", "Prefecture: ") + escape(lang === "ja" ? p.prefecture : prefectureGuides.find(pref => pref.name === p.prefecture)?.en || p.prefecture) : escape(p.region) + " · " + marketText("庁所在地：", "Government seat: ") + escape(p.capital)}</p>
      <p>${marketText("暮らし・行政手続き・観光などの情報は、自治体の公式サイトで確認できます。", "Find local services, administrative procedures, and visitor information on the official government website.")}</p>
      <a href="${p.url}" target="_blank" rel="noopener noreferrer">${marketText(p.name + "の公式サイト", "Official government website")} ↗</a>
    </article>`).join("") + "</section>";
}
function searchSafetyHTML(value) {
  const q = value.toLowerCase().replace(/\s/g, "");
  const crime = ["闇バイト", "やみばいと", "闇仕事", "裏バイト", "高額バイト", "高収入バイト", "即金バイト", "即日現金", "即日高収入", "ホワイト案件", "特殊詐欺", "受け子", "出し子", "運び屋", "口座売買", "口座譲渡", "口座を売る", "個人情報買います", "illegaljob", "blackjob", "darkjob"].some((word) => q.includes(word));
  const gambling = ["オンラインカジノ", "オンカジ", "オンラインスロット", "オンラインバカラ", "スポーツベッティング", "カジノアプリ", "賭博サイト", "違法賭博", "ブックメーカー賭博", "onlinecasino", "onlinegambling", "sportsbetting", "casinosite", "gamblingsite"].some((word) => q.includes(word));
  const consumer = ["詐欺被害", "架空請求", "不当請求", "高額請求", "ワンクリック詐欺", "フィッシング詐欺", "投資詐欺", "副業詐欺", "ロマンス詐欺", "定期購入", "解約できない", "返金されない", "返品できない", "偽サイト", "悪質商法", "マルチ商法", "ねずみ講", "押し売り", "訪問販売", "送り付け商法", "クーリングオフ", "消費者トラブル", "通販トラブル", "scam", "fraud", "fakewebsite", "subscriptiontrap"].some((word) => q.includes(word));
  const crisis = ["死にたい", "しにたい", "死にたく", "消えたい", "いなくなりたい", "生きていたくない", "生きるのがつらい", "生きるのが辛い", "楽になりたい", "もう無理", "自殺", "じさつ", "自傷", "リスカ", "オーバードーズ", "首吊り", "飛び降り", "死に方", "suicide", "killmyself", "wanttodie", "iwanttodie", "endmylife", "selfharm", "overdose", "cutting"].some((word) => q.includes(word)) || /(^|[^a-z])od([^a-z]|$)/i.test(value);
  if (!crime && !gambling && !consumer && !crisis) return "";
  if (crisis) return `<section class="search-safety-alert crisis-alert" role="alert"><span>♥</span><div><b>${lang === "ja" ? "いま、ひとりで抱えなくて大丈夫です" : "You do not have to face this alone"}</b><p>${lang === "ja" ? "今すぐ自分を傷つけそう、または危険が迫っている場合は119番・110番へ連絡してください。誰かに話したいときは、よりそいホットライン（0120-279-338、24時間）や、いのちSOS（0120-061-338、24時間）があります。" : "If you may hurt yourself or are in immediate danger, call local emergency services now. You can also reach out to someone you trust or a crisis support service in your area."}</p><a href="https://www.mhlw.go.jp/mamorouyokokoro/" target="_blank" rel="noreferrer">${lang === "ja" ? "厚生労働省の相談窓口を見る" : "Find support resources"}</a></div></section>`;
  if (gambling) return `<section class="search-safety-alert crime-alert" role="alert"><span>⚠</span><div><b>${lang === "ja" ? "オンライン賭博に関する注意" : "Warning about online gambling"}</b><p>${lang === "ja" ? "日本国内からオンラインカジノで賭博を行うことは犯罪です。海外で合法的に運営されているサイトでも利用しないでください。勧誘や金銭トラブル、犯罪に巻き込まれた場合は警察相談専用電話 #9110、緊急時は110番へ相談してください。" : "Online gambling may be illegal where you live, even when the operator is based overseas. Stop using the service and contact local police if you face threats, payment trouble, or criminal involvement."}</p><a href="https://www.npa.go.jp/" target="_blank" rel="noreferrer">${lang === "ja" ? "警察庁の案内を見る" : "Visit the National Police Agency"}</a></div></section>`;
  if (crime) return `<section class="search-safety-alert crime-alert" role="alert"><span>⚠</span><div><b>${lang === "ja" ? "危険な求人・犯罪に関する相談" : "Safety support for risky job offers"}</b><p>${lang === "ja" ? "闇バイトは犯罪です。応募してしまった、脅されている、個人情報を送ってしまった場合は、すぐに警察へ相談してください。緊急時は110番、相談は警察相談専用電話 #9110 が利用できます。" : "Illegal job offers can involve serious crime. If you have applied, are being threatened, or shared personal information, contact the police. Call 110 in an emergency."}</p><a href="https://www.npa.go.jp/" target="_blank" rel="noreferrer">${lang === "ja" ? "警察庁の案内を見る" : "Visit the National Police Agency"}</a></div></section>`;
  if (consumer) return `<section class="search-safety-alert consumer-alert" role="alert"><span>i</span><div><b>${lang === "ja" ? "契約・購入トラブルの相談" : "Help with purchases and contracts"}</b><p>${lang === "ja" ? "請求、定期購入、解約、返金、通販や投資勧誘などで困ったときは、相手に追加で支払う前に消費生活センターへ相談してください。消費者ホットライン188から、最寄りの相談窓口につながります。脅迫や緊急の被害は110番へ連絡してください。" : "If you have a problem involving billing, subscriptions, refunds, online shopping, or investment solicitations, stop further payments and contact a local consumer protection service. Contact police if you are threatened or in immediate danger."}</p><a href="https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/" target="_blank" rel="noreferrer">${lang === "ja" ? "消費者ホットライン188の案内を見る" : "Find consumer support"}</a></div></section>`;
  return "";
}
let creatorMarket = CreatorMarket.initial();
const marketText = (ja, en) => (lang === "ja" ? ja : en);
function shareholderLeadersHTML(id, supply, fmt) {
  const leaders = shareholderLeaders[id] || [];
  const rows = leaders
    .map((holder) => {
      const power = supply ? (holder.shares / supply) * 100 : 0;
      return `<li><span class="holder-rank">${holder.rank}</span><span class="holder-name"><b>${escape(holder.name)}${holder.private ? " 🔒" : ""}${holder.current ? ` <em>${marketText("あなた", "You")}</em>` : ""}</b><small>@${escape(holder.handle)}</small></span><span class="holder-power"><b>${power.toFixed(2)}%</b><small>${fmt(holder.shares)} ${marketText("票", "votes")}</small></span></li>`;
    })
    .join("");
  return `<details class="shareholder-leaders"><summary>${marketText("議決権者 上位10人", "Top 10 voting-rights holders")}</summary>${rows ? `<ol>${rows}</ol>` : `<p>${marketText("議決権を持つユーザーはいません。", "No users currently hold voting rights.")}</p>`}</details>`;
}
function classShareIssuanceHTML(id, commonSupply, fmt) {
  const issued = creatorMarket.classSupplies?.[id] || 0;
  const brand = creatorMarket.classBrands?.[id] || { name: `${id.toUpperCase()} Class`, image: null };
  const limit = Math.floor((commonSupply * 2) / 3);
  const remaining = Math.max(0, limit - issued);
  return `<section class="class-share-box"><div class="class-brand-head">${brand.image ? `<img src="${escape(brand.image)}" alt="">` : `<span>${escape(brand.name.slice(0, 1))}</span>`}<div><b>${escape(brand.name)}</b><small>${marketText("独立した議決権と株式分割", "Separate voting rights and stock splits")}</small></div></div><small>${marketText("発行上限は通常シェアの発行済み株式数の3分の2です。", "The issuance limit is two-thirds of issued Standard Shares.")}</small><div class="class-share-stats"><span>${marketText("1株価格", "Share price")}<b>${fmt(creatorMarket.classPrices?.[id] || creatorMarket.prices[id])} pt</b></span><span>${marketText("発行済み", "Issued")}<b>${fmt(issued)}</b></span><span>${marketText("上限", "Limit")}<b>${fmt(limit)}</b></span><span>${marketText("残り", "Remaining")}<b>${fmt(remaining)}</b></span></div><form data-class-share-form="${id}"><label>${marketText("ブランド名", "Brand name")}<input name="brand" maxlength="30" value="${escape(brand.name)}" required></label><label>${marketText("ブランド画像", "Brand image")}<input name="image" type="file" accept="image/jpeg,image/png,image/webp,image/gif"></label><button type="submit" name="action" value="brand">${marketText("設定を保存", "Save branding")}</button><label>${marketText("発行株数", "Shares to issue")}<input name="quantity" type="number" min="1" max="${Math.max(1, remaining)}" step="1" value="1"></label><button type="submit" name="action" value="issue" ${!serverReady || remaining < 1 ? "disabled" : ""}>${marketText("ブランドシェアを発行", "Issue Brand Shares")}</button></form></section>`;
}
function classSplitGovernanceHTML({ id, vote, held, supply, fmt }) {
  if (supply < 1) return "";
  const soloRequired = Math.max(1, Math.ceil(supply * 0.01));
  const jointRequired = Math.max(1, Math.ceil(supply * 0.03));
  const revoteRequired = Math.max(1, Math.ceil(supply * 0.34));
  const totalVotes = vote.yes + vote.no;
  const yesRate = totalVotes ? Math.round((vote.yes / totalVotes) * 100) : 0;
  const votingPower = (held / supply) * 100;
  if (!vote.requested) {
    return `<section class="split-vote class-governance"><div><b>${marketText("ブランドシェアだけの分割投票", "Brand Share split vote")}</b><small>${marketText("通常シェアとは別の議決権で、ブランドシェアだけを分割します。", "Uses separate voting rights and splits only the Brand Shares.")}</small></div><div class="voting-power"><b>${marketText("ブランドシェアの議決権", "Brand Share voting power")} ${votingPower.toFixed(2)}%</b><small>${marketText(`単独：${fmt(soloRequired)}株以上・共同：合計${fmt(jointRequired)}株以上`, `Individual: ${fmt(soloRequired)}+ · Joint: ${fmt(jointRequired)}+`)}</small></div><form class="split-request-form" data-class-split-request="${id}"><label>${marketText("分割倍率", "Split ratio")}<input name="ratio" type="number" min="2" max="200" step="1" value="${vote.ratio}" required></label><label>${marketText("リクエスト方法", "Request method")}<select name="mode"><option value="solo">${marketText("単独（1%以上）", "Individual (1%+)")}</option><option value="joint">${marketText("共同（合計3%以上）", "Joint (3%+)")}</option></select></label><button type="submit" ${!serverReady || held < soloRequired ? "disabled" : ""}>${marketText("ブランドシェアの投票を設置", "Create class-share vote")}</button></form></section>`;
  }
  const approved = totalVotes > 0 && vote.yes > vote.no;
  const overLimit = supply * vote.ratio > Math.floor(((creatorMarket.supplies[id] || CreatorMarket.initialSupply) * 2) / 3);
  return `<section class="split-vote class-governance"><div><b>${marketText(`ブランドシェア 第${vote.round}回・${vote.ratio}倍分割案`, `Brand Shares round ${vote.round} · ${vote.ratio}-for-1`)}</b><small>${marketText("通常シェアの投票と票数は合算されません。", "Votes are not combined with common-share voting.")}</small></div><div class="vote-meter"><span style="width:${yesRate}%"></span></div><p>${marketText("賛成", "For")} ${fmt(vote.yes)} · ${marketText("反対", "Against")} ${fmt(vote.no)} · ${yesRate}%</p><div class="split-actions"><button type="button" data-class-split-vote="yes" data-creator="${id}" ${!serverReady || held < 1 || vote.choice ? "disabled" : ""}>${marketText("賛成", "For")}</button><button type="button" data-class-split-vote="no" data-creator="${id}" ${!serverReady || held < 1 || vote.choice ? "disabled" : ""}>${marketText("反対", "Against")}</button></div><div class="revote-box"><button type="button" data-execute-class-split="${id}" ${!serverReady || !approved || overLimit ? "disabled" : ""}>${marketText("ブランドシェアを分割", "Split Brand Shares")}</button>${overLimit ? `<small>${marketText("発行上限を超えるため、この倍率では分割できません。", "This ratio would exceed the issuance limit.")}</small>` : ""}</div><div class="revote-box"><small>${marketText(`単独34%以上（${fmt(revoteRequired)}株以上）で1度だけ再投票できます。`, `A 34% individual stake (${fmt(revoteRequired)}+ shares) allows one revote.`)}</small><button type="button" data-class-revote="${id}" ${!serverReady || held < revoteRequired || vote.revoteUsed || totalVotes < 1 ? "disabled" : ""}>${vote.revoteUsed ? marketText("再投票済み", "Revote used") : marketText("再投票を開始", "Start revote")}</button></div></section>`;
}
function splitGovernanceHTML({ id, vote, held, supply, yesRate, fmt }) {
  const soloRequired = Math.ceil(supply * 0.01);
  const jointRequired = Math.ceil(supply * 0.03);
  const revoteRequired = Math.ceil(supply * 0.34);
  const votingPower = supply ? (held / supply) * 100 : 0;
  if (!vote.requested) {
    return `<section class="split-vote split-request"><div><b>${marketText("株式分割の投票設置リクエスト", "Request a stock-split vote")}</b><small>${marketText("投票の設置には単独で1%以上、共同で合計3%以上の議決権が必要です。", "Creating a vote requires 1% individually or 3% combined.")}</small></div><div class="voting-power"><b>${marketText("現在の議決権", "Current voting power")} ${votingPower.toFixed(2)}%</b><small>${marketText(`単独：${fmt(soloRequired)}株以上・共同：合計${fmt(jointRequired)}株以上`, `Individual: ${fmt(soloRequired)}+ shares · Joint: ${fmt(jointRequired)}+ combined shares`)}</small></div><form class="split-request-form" data-split-request-form="${id}"><label>${marketText("分割倍率", "Split ratio")}<input name="ratio" type="number" min="2" max="200" step="1" value="${vote.ratio}" required></label><label>${marketText("リクエスト方法", "Request method")}<select name="mode"><option value="solo">${marketText("単独（1%以上）", "Individual (1%+)")}</option><option value="joint">${marketText("共同（合計3%以上）", "Joint (3%+ combined)")}</option></select></label><button type="submit" ${!serverReady || held < soloRequired ? "disabled" : ""}>${marketText("投票を設置リクエスト", "Request vote")}</button></form>${held < soloRequired ? `<small class="vote-note">${marketText(`単独リクエストにはあと${fmt(soloRequired - held)}株必要です。`, `You need ${fmt(soloRequired - held)} more shares for an individual request.`)}</small>` : ""}</section>`;
  }
  const totalVotes = vote.yes + vote.no;
  const approved = totalVotes > 0 && vote.yes > vote.no;
  const splitExceedsCap = supply * vote.ratio > CreatorMarket.maxSupply;
  const revoteDisabled =
    !serverReady || held < revoteRequired || vote.revoteUsed || totalVotes < 1;
  return `<section class="split-vote"><div><b>${marketText(`第${vote.round}回・${vote.ratio}倍分割案（1株→${vote.ratio}株）`, `Round ${vote.round} · ${vote.ratio}-for-1 split proposal`)}</b><small>${marketText(`投票設置：${vote.mode === "joint" ? "共同" : "単独"}・議決権${fmt(vote.requesterWeight)}票。投票自体は1株から参加できます。`, `Requested ${vote.mode === "joint" ? "jointly" : "individually"} with ${fmt(vote.requesterWeight)} voting rights. Any holder can vote from one share.`)}</small></div><div class="vote-meter" aria-label="${marketText("賛成率", "Approval rate")} ${yesRate}%"><span style="width:${yesRate}%"></span></div><p>${marketText("賛成", "For")} ${fmt(vote.yes)} · ${marketText("反対", "Against")} ${fmt(vote.no)} · ${marketText("賛成率", "Approval")} ${yesRate}%</p><div class="split-actions"><button type="button" data-split-vote="yes" data-creator="${id}" ${!serverReady || held < 1 || vote.choice ? "disabled" : ""} class="${vote.choice === "yes" ? "selected" : ""}">${marketText("賛成", "For")}</button><button type="button" data-split-vote="no" data-creator="${id}" ${!serverReady || held < 1 || vote.choice ? "disabled" : ""} class="${vote.choice === "no" ? "selected" : ""}">${marketText("反対", "Against")}</button></div>${held < 1 ? `<small class="vote-note">${marketText("投票するには1株以上保有してください。", "Own at least one share to vote.")}</small>` : vote.choice ? `<small class="vote-note">${marketText(`投票済み（${fmt(vote.weight)}票）`, `Vote submitted (${fmt(vote.weight)} votes)`)}</small>` : ""}<div class="revote-box"><small>${marketText("賛成票が反対票を上回ると分割を実行できます。株数と発行数は倍率分増え、1株価格は同じ倍率で割られます。", "When votes for exceed votes against, the split can be executed. Shares and supply multiply, while the per-share price is divided by the same ratio.")}</small><button type="button" data-execute-split="${id}" ${!serverReady || !approved || splitExceedsCap ? "disabled" : ""}>${marketText("株式分割を実行", "Execute split")}</button>${splitExceedsCap ? `<small class="vote-note">${marketText("実行すると発行上限21億株を超えます。", "Execution would exceed the 2.1 billion share cap.")}</small>` : ""}</div><div class="revote-box"><small>${marketText(`単独議決権34%以上（${fmt(revoteRequired)}株以上）で、この議案を1度だけ再投票にできます。`, `A holder with at least 34% individual voting power (${fmt(revoteRequired)}+ shares) can restart this proposal once.`)}</small><button type="button" data-request-revote="${id}" ${revoteDisabled ? "disabled" : ""}>${vote.revoteUsed ? marketText("再投票済み", "Revote used") : marketText("再投票を開始", "Start revote")}</button>${vote.revoteUsed ? `<small class="vote-note">${marketText("この議案では再実施できません。", "This proposal cannot be restarted again.")}</small>` : ""}</div></section>`;
}
function marketCapRankingHTML(fmt) {
  const ranking = Object.keys(creatorMarket.prices)
    .map((id) => ({
      id,
      price: creatorMarket.prices[id],
      supply: creatorMarket.supplies[id],
      marketCap: creatorMarket.prices[id] * creatorMarket.supplies[id],
    }))
    .sort((a, b) => b.marketCap - a.marketCap);
  return `<section class="market-cap-ranking"><div class="market-cap-heading"><div><span class="eyebrow">RANKING</span><h3>${marketText("時価総額ランキング", "Market cap ranking")}</h3></div><small>${marketText("1株価格 × 発行済み株数", "Price per share × issued shares")}</small></div><ol>${ranking
    .map((item, index) => {
      const user = users.find((u) => u.id === item.id);
      return `<li><span class="cap-rank">${index + 1}</span>${avatar(user)}<span class="cap-creator"><b>${escape(user.name)}</b><small>@${escape(user.handle)} · ${fmt(item.price)} pt × ${fmt(item.supply)} ${marketText("株", "shares")}</small></span><strong>${fmt(item.marketCap)} pt</strong></li>`;
    })
    .join("")}</ol></section>`;
}
function marketHTML() {
  return sharedMarketHTML();
}
function legacyMarketHTML() {
  const fmt = (n) => n.toLocaleString(lang === "ja" ? "ja-JP" : "en-US");
  const value = Object.entries(creatorMarket.holdings).reduce(
    (sum, [id, n]) => sum + n * creatorMarket.prices[id],
    0,
  );
  return `<section class="creator-market"><h2>${marketText("クリエイターシェア", "Creator Shares")}</h2>
    <p>${marketText("無料ポイントで楽しむ個人用シミュレーションです。現金の購入・換金・配当はありません。初回10,000 pt。各クリエイターは1,000株から始まり、発行上限は21億株です。", "A personal free-point simulation. No cash purchases, cash-out, or dividends. Start with 10,000 pt. Each creator starts with 1,000 shares and has a 2.1 billion share cap.")}</p>
    <div class="market-summary"><div>${marketText("ポイント残高", "Points")}<strong>${fmt(creatorMarket.balance)} pt</strong></div><div>${marketText("保有株の評価額", "Holdings value")}<strong>${fmt(value)} pt</strong></div></div>
    ${marketCapRankingHTML(fmt)}
    ${!serverReady ? `<p role="status">${marketText("保存データの読み込みが完了するまで売買できません。", "Trading is unavailable until saved data has loaded.")}</p>` : ""}
    ${Object.entries(creatorMarket.prices)
      .map(([id, price]) => {
        const u = users.find((u) => u.id === id),
          held = creatorMarket.holdings[id] || 0;
        const classHeld = creatorMarket.classHoldings?.[id] || 0;
        const supply = creatorMarket.supplies[id];
        const available = supply - held;
        const vote = creatorMarket.splitVotes[id];
        const totalVotes = vote.yes + vote.no;
        const yesRate = totalVotes
          ? Math.round((vote.yes / totalVotes) * 100)
          : 0;
        return `<article class="market-card"><div class="market-creator">${avatar(u)}<div><button data-person="${id}"><b>${escape(u.name)}</b></button><small>@${escape(u.handle)}</small></div></div><p><strong>${fmt(price)} pt</strong> / ${marketText("株", "share")} · ${marketText("保有", "Owned")}: ${fmt(held)}</p><p class="market-supply">${marketText("通常シェア発行済み", "Standard Shares issued")}: ${fmt(supply)} · ${marketText("残り", "Available")}: ${fmt(available)} · ${marketText("上限", "Maximum")}: ${fmt(CreatorMarket.maxSupply)}</p><form data-market-form="${id}"><label>${marketText("株数", "Quantity")}<input name="quantity" type="number" min="1" max="${Math.min(100, Math.max(1, available))}" step="1" value="1" required></label><button class="primary" name="side" value="buy" ${!serverReady || creatorMarket.balance < price || available < 1 ? "disabled" : ""}>${marketText("買う", "Buy")}</button><button name="side" value="sell" ${!serverReady || held < 1 ? "disabled" : ""}>${marketText("売る", "Sell")}</button></form><button type="button" class="share-stock-button" data-share-stock="${id}">${marketText("シェア情報を投稿", "Post Creator Shares")}</button>${classShareIssuanceHTML(id, supply, fmt)}${classSplitGovernanceHTML({ id, vote: creatorMarket.classSplitVotes[id], held: classHeld, supply: creatorMarket.classSupplies?.[id] || 0, fmt })}${shareholderLeadersHTML(id, supply, fmt)}${splitGovernanceHTML({ id, vote, held, supply, yesRate, fmt })}</article>`;
      })
      .join("")}
    <h3>${marketText("売買履歴（直近100件）", "Recent trades (up to 100)")}</h3><ul class="market-history">${creatorMarket.history.map((t) => `<li><span>${escape(users.find((u) => u.id === t.creator)?.name || t.creator)} · ${t.side === "buy" ? marketText("購入", "Buy") : marketText("売却", "Sell")} ${t.quantity} ${marketText("株", "shares")}<small>${escape(new Date(t.at).toLocaleString(lang === "ja" ? "ja-JP" : "en-US"))}</small></span><b>${t.side === "buy" ? "−" : "+"}${fmt(t.total)} pt</b></li>`).join("") || `<li>${marketText("まだ取引はありません。", "No trades yet.")}</li>`}</ul></section>`;
}
document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-market-form]");
  if (!form) return;
  e.preventDefault();
  if (teenMode) { notify(marketText("ティーン向け制限中は売買できません", "Trading is unavailable with teen restrictions")); return; }
  if (!serverReady) return;
  try {
    const quantity = Number(new FormData(form).get("quantity"));
    creatorMarket = CreatorMarket.trade(
      creatorMarket,
      form.dataset.marketForm,
      e.submitter?.value,
      quantity,
    );
    render();
    notify(marketText("取引を反映しました", "Trade recorded"));
  } catch (error) {
    notify(
      error.message === "balance"
        ? marketText("ポイントが不足しています", "Not enough points")
        : error.message === "holdings"
          ? marketText("保有株数が不足しています", "Not enough shares")
          : error.message === "supply"
            ? marketText(
                "購入可能な株数を超えています",
                "Not enough shares available",
              )
            : marketText(
                "株数は1〜100の整数で入力してください",
                "Enter a whole quantity from 1 to 100",
              ),
    );
  }
});
document.addEventListener("submit", async (e) => {
  const form = e.target.closest("[data-class-share-form]");
  if (!form) return;
  e.preventDefault();
  if (!serverReady) return;
  try {
    const data = new FormData(form);
    const imageFile = data.get("image");
    let imageUrl = null;
    if (imageFile instanceof File && imageFile.size) {
      if (imageFile.size > 5 * 1024 * 1024) throw Error("image_size");
      const media = new FormData();
      media.append("images", imageFile, imageFile.name);
      const response = await fetch("/api/media", { method: "POST", body: media });
      if (!response.ok) throw Error("image_upload");
      imageUrl = (await response.json()).urls?.[0] || null;
    }
    creatorMarket = CreatorMarket.updateClassBrand(creatorMarket, form.dataset.classShareForm, data.get("brand"), imageUrl);
    if (e.submitter?.value === "issue") {
      creatorMarket = CreatorMarket.issueClassShares(creatorMarket, form.dataset.classShareForm, Number(data.get("quantity")));
    }
    render();
    notify(e.submitter?.value === "issue" ? marketText("ブランドシェアを発行しました", "Brand Shares issued") : marketText("ブランド設定を保存しました", "Branding saved"));
  } catch (error) {
    notify(
      error.message === "class_limit"
        ? marketText(
            "ブランドシェアは通常シェアの発行済み株式数の3分の2までです",
            "Brand Shares are limited to two-thirds of issued Standard Shares",
          )
        : error.message === "image_size"
          ? marketText("画像は5MB以下にしてください", "Choose an image up to 5 MB")
        : marketText(
            "発行株数は1以上の整数で入力してください",
            "Check the brand name, image, and share quantity",
          ),
    );
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-split-vote]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.voteSplit(
      creatorMarket,
      button.dataset.creator,
      button.dataset.splitVote,
    );
    render();
    notify(
      marketText("株式分割の投票を受け付けました", "Split vote submitted"),
    );
  } catch (error) {
    notify(
      error.message === "not_holder"
        ? marketText("投票するには1株以上必要です", "Own a share to vote")
        : marketText("この提案には投票済みです", "You already voted"),
    );
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-share-stock]");
  if (!button) return;
  const creator = button.dataset.shareStock;
  composingStock = {
    creator,
    price: creatorMarket.prices[creator],
    supply: creatorMarket.supplies[creator],
    marketCap:
      creatorMarket.prices[creator] * creatorMarket.supplies[creator],
  };
  navigate("home");
  updateStockComposer();
  $("#composer").scrollIntoView({ behavior: "smooth", block: "start" });
  $("#post-text").focus();
  notify(marketText("クリエイターシェアを投稿に追加しました", "Creator Shares added to the post"));
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-request-revote]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.requestRevote(
      creatorMarket,
      button.dataset.requestRevote,
    );
    render();
    notify(marketText("票をリセットし、第2回投票を開始しました", "Votes reset. Round 2 has started."));
  } catch (error) {
    notify(
      error.message === "revote_power"
        ? marketText("再投票には単独議決権34%以上が必要です", "A 34% individual voting stake is required")
        : error.message === "no_votes"
          ? marketText("投票後に再投票を開始できます", "A vote must be cast before starting a revote")
          : marketText("この議案の再投票はすでに使用済みです", "The one revote for this proposal has already been used"),
    );
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-execute-split]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.executeSplit(
      creatorMarket,
      button.dataset.executeSplit,
    );
    render();
    notify(
      marketText(
        "株数と発行数を増やし、1株価格を分割しました",
        "Shares and supply increased, and the per-share price was divided",
      ),
    );
  } catch (error) {
    notify(
      error.message === "supply_cap"
        ? marketText(
            "発行上限21億株を超えるため実行できません",
            "The split would exceed the 2.1 billion share cap",
          )
        : marketText(
            "賛成票が反対票を上回ると実行できます",
            "Votes for must exceed votes against",
          ),
    );
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-class-split-vote]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.voteClassSplit(creatorMarket, button.dataset.creator, button.dataset.classSplitVote);
    render();
    notify(marketText("ブランドシェアの投票を受け付けました", "Brand Share vote submitted"));
  } catch (error) {
    notify(error.message === "not_holder" ? marketText("ブランドシェアを1株以上保有してください", "Own at least one Brand Share") : marketText("この提案には投票済みです", "You already voted"));
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-class-revote]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.requestClassRevote(creatorMarket, button.dataset.classRevote);
    render();
    notify(marketText("ブランドシェアの第2回投票を開始しました", "Brand Share voting round 2 started"));
  } catch {
    notify(marketText("ブランドシェアの再投票条件を満たしていません", "Brand Share revote requirements are not met"));
  }
});
document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-execute-class-split]");
  if (!button || !serverReady) return;
  try {
    creatorMarket = CreatorMarket.executeClassSplit(creatorMarket, button.dataset.executeClassSplit);
    render();
    notify(marketText("ブランドシェアだけを分割しました", "Only the Brand Shares were split"));
  } catch {
    notify(marketText("ブランドシェアの分割条件を満たしていません", "Brand Share split requirements are not met"));
  }
});
document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-class-split-request]");
  if (!form) return;
  e.preventDefault();
  if (!serverReady) return;
  try {
    const data = new FormData(form);
    creatorMarket = CreatorMarket.requestClassSplitVote(creatorMarket, form.dataset.classSplitRequest, Number(data.get("ratio")), data.get("mode"));
    render();
    notify(marketText("ブランドシェアの分割投票を設置しました", "Brand Share split vote created"));
  } catch {
    notify(marketText("ブランドシェアの議決権条件を満たしていません", "Brand Share voting-power requirement is not met"));
  }
});
document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-split-request-form]");
  if (!form) return;
  e.preventDefault();
  if (!serverReady) return;
  try {
    const data = new FormData(form);
    creatorMarket = CreatorMarket.requestSplitVote(
      creatorMarket,
      form.dataset.splitRequestForm,
      Number(data.get("ratio")),
      data.get("mode"),
    );
    render();
    notify(marketText("投票を設置しました", "Split vote created"));
  } catch (error) {
    notify(
      error.message === "request_power"
        ? marketText(
            "投票設置に必要な議決権を満たしていません",
            "You do not meet the voting-power requirement to create a vote",
          )
        : marketText(
            "分割倍率は2〜200の整数にしてください",
            "Enter a whole split ratio from 2 to 200",
          ),
    );
  }
});
function render() {
  if (teenMode && view === "market") view = "home";
  const names = {
    home: tr("home"),
    search: tr("search"),
    market: marketText("シェア市場", "Creator Shares"),
    bookmark: tr("bookmark"),
    lists: tr("lists"),
    questions: tr("questions"),
    games: tr("games"),
    diagnosis: tr("diagnosis"),
    relationships: tr("relationships"),
    help: tr("help"),
    user: tr("user"),
    settings: tr("settings"),
  };
  if (teenMode) delete names.market;
  const currentTitle = view === "post" ? marketText("投稿詳細", "Post details") : names[view];
  $("#title").textContent = currentTitle;
  document.title = `Blue — ${currentTitle}`;
  $("#nav").innerHTML = Object.entries(names)
    .map(
      ([id, n]) =>
        `<button data-view="${id}" class="${view === id ? "selected" : ""}" aria-label="${n}" title="${n}" ${view === id ? 'aria-current="page"' : ""}>${icon(id)}<span>${n}</span></button>`,
    )
    .join("");
  $("#tabs").hidden = view !== "home";
  $("#composer").style.display = view === "home" ? "flex" : "none";
  const settings = view === "settings",
    standalone = settings || view === "market" || view === "questions" || view === "games" || view === "diagnosis" || view === "relationships" || view === "help" || (view === "lists" && !selectedListId) || (view === "search" && !query);
  document.querySelector(".feed-label").hidden = standalone || view === "post";
  $("#feed").hidden = standalone;
  document.querySelector(".feed-end").hidden = standalone || view === "post";
  const u = users.find((x) => x.id === profileUser);
  $("#profile").innerHTML =
    view === "settings"
      ? `<section class="settings-panel privacy-panel"><span class="eyebrow">ACCOUNT</span><h2>${tr("accountPrivacyTitle")}</h2><div class="privacy-setting"><span><b>${tr("privateAccount")}</b><small>${tr("privateAccountHelp")}</small></span><button type="button" class="privacy-switch ${accountPrivate ? "on" : ""}" data-private-account role="switch" aria-checked="${accountPrivate}" aria-label="${tr("privateAccount")}"><span></span><b>${accountPrivate ? tr("privateAccountOn") : tr("privateAccountOff")}</b></button></div></section>`
      : view === "user"
        ? `<section class="profile-card">${avatar(u)}<h2>${u.name}${u.id === "you" && accountPrivate ? ` <span class="lock-badge" title="${tr("lockedAccount")}" aria-label="${tr("lockedAccount")}">🔒</span>` : ""}</h2><small>@${u.handle}</small>${u.mbti ? `<span class="mbti-badge">${escape(u.mbti)}</span>` : ""}<p>${u.bio}</p><small>${posts.filter((p) => p.u === u.id && !p.parent).length} ${tr("post")}${u.id === "you" ? ` · ${following.size} ${tr("following")}` : ""}</small>${u.id === "you" ? `<button class="edit-profile-button" data-edit-profile>${tr("editProfile")}</button>` : ""}</section>`
        : "";
  $("#search-area").innerHTML =
    view === "search"
      ? `<form class="inner-search" id="inner-search"><div class="search-box">${icon("search")}<input name="q" aria-label="${tr("searchPlaceholder")}" placeholder="${tr("searchPlaceholder")}" value="${escape(query)}"><button>${tr("find")}</button></div></form>${searchSafetyHTML(query)}${prefectureGuideHTML(query)}${query ? "" : trendViewHTML()}${userSearchHTML()}`
      : settings
        ? `<section class="settings-panel"><span class="eyebrow">LANGUAGE</span><h2>${tr("settingsTitle")}</h2><p>${tr("settingsHelp")}</p><div class="language-options"><button data-language="ja" class="language-choice ${lang === "ja" ? "selected" : ""}" aria-pressed="${lang === "ja"}"><span>あ</span><b>${tr("japanese")}</b><small>日本語</small></button><button data-language="en" class="language-choice ${lang === "en" ? "selected" : ""}" aria-pressed="${lang === "en"}"><span>A</span><b>${tr("english")}</b><small>English</small></button></div><p class="language-note">${tr("saved")}</p><div class="settings-divider"></div><span class="eyebrow">APPEARANCE</span><h2>${tr("appearanceTitle")}</h2><p>${tr("appearanceHelp")}</p><div class="theme-options"><button data-theme-choice="light" class="theme-choice ${theme === "light" ? "selected" : ""}" aria-pressed="${theme === "light"}"><span class="theme-preview light-preview">☀</span><b>${tr("light")}</b></button><button data-theme-choice="dark" class="theme-choice ${theme === "dark" ? "selected" : ""}" aria-pressed="${theme === "dark"}"><span class="theme-preview dark-preview">☾</span><b>${tr("dark")}</b></button><button data-theme-choice="darkblue" class="theme-choice ${theme === "darkblue" ? "selected" : ""}" aria-pressed="${theme === "darkblue"}"><span class="theme-preview darkblue-preview">◆</span><b>${tr("darkBlue")}</b></button><button data-theme-choice="lightorange" class="theme-choice ${theme === "lightorange" ? "selected" : ""}" aria-pressed="${theme === "lightorange"}"><span class="theme-preview orange-preview">●</span><b>${tr("lightOrange")}</b></button><button data-theme-choice="mint" class="theme-choice ${theme === "mint" ? "selected" : ""}" aria-pressed="${theme === "mint"}"><span class="theme-preview mint-preview">✦</span><b>${tr("mint")}</b></button><button data-theme-choice="monochrome" class="theme-choice ${theme === "monochrome" ? "selected" : ""}" aria-pressed="${theme === "monochrome"}"><span class="theme-preview monochrome-preview">◼</span><b>${tr("monochrome")}</b></button><button data-theme-choice="system" class="theme-choice ${theme === "system" ? "selected" : ""}" aria-pressed="${theme === "system"}"><span class="theme-preview system-preview">◐</span><b>${tr("system")}</b></button></div><p class="language-note">${tr("themeSaved")}</p><div class="settings-divider"></div><span class="eyebrow">LIKE ICON</span><h2>${tr("likeIconTitle")}</h2><p>${tr("likeIconHelp")}</p><div class="like-icon-options">${[
            ["heart", "heartIcon"],
            ["star", "starIcon"],
            ["thumb", "thumbIcon"],
            ["upvote", "upvoteIcon"],
          ]
            .map(
              ([id, label]) =>
                `<button data-like-icon="${id}" class="like-icon-choice ${likeIcon === id ? "selected" : ""}" aria-pressed="${likeIcon === id}">${icon(id)}<b>${tr(label)}</b></button>`,
            )
            .join(
              "",
            )}</div><p class="language-note">${tr("iconSaved")}</p></section>`
        : "";
  if (settings) {
    $("#search-area").insertAdjacentHTML("beforeend", pwaGuideHTML());
    $("#search-area").insertAdjacentHTML("beforeend", teenSettingsHTML());
  }
  if (view === "market") $("#search-area").innerHTML = marketHTML();
  if (view === "questions") $("#search-area").innerHTML = questionBoxHTML();
  if (view === "games") $("#search-area").innerHTML = gameRoomHTML();
  if (view === "diagnosis") $("#search-area").innerHTML = adhdCheckHTML();
  if (view === "relationships") $("#search-area").innerHTML = relationshipsHTML();
  if (view === "help") $("#search-area").innerHTML = helpCenterHTML();
  if (view === "lists") $("#search-area").innerHTML = listHubHTML();
  $("#feed-label").textContent =
    view === "search"
      ? query
        ? `${lang === "ja" ? "「" + query + "」" : query}${tr("results")}`
        : tr("discover")
      : view === "bookmark"
        ? tr("savedLead")
        : view === "user"
          ? tr("post")
          : tr("world");
  let shown = posts.filter((p) => !p.parent);
  if (teenMode) shown = shown.filter((p) => !teenRestrictedPost(p));
  if (view === "post") {
    const selected = posts.find((p) => p.id === selectedPostId && !teenRestrictedPost(p));
    $("#feed").innerHTML = selected
      ? `<section class="post-detail-toolbar"><button type="button" data-post-back aria-label="${marketText("前の画面に戻る", "Back to previous page")}">←</button><div><b>${marketText("投稿", "Post")}</b><small>${marketText("投稿と返信の詳細", "Post and reply details")}</small></div></section>${postHTML(selected, true)}<div class="reply-section-title"><b>${marketText("返信", "Replies")}</b><span>${posts.filter((p) => p.parent === selected.id && !teenRestrictedPost(p)).length}</span></div>${posts.filter((p) => p.parent === selected.id && !teenRestrictedPost(p)).map((p) => postHTML(p, true)).join("") || `<div class="empty">${marketText("まだ返信はありません。", "No replies yet.")}</div>`}`
      : `<section class="post-detail-toolbar"><button type="button" data-post-back>←</button><b>${marketText("投稿が見つかりません", "Post not found")}</b></section>`;
  } else {
  if (view === "home" && tab === "following")
    shown = shown.filter((p) => following.has(p.u) || p.u === "you");
  if (view === "bookmark") shown = shown.filter((p) => p.saved);
  if (view === "lists" && selectedListId) {
    const activeList = lists.find((item) => item.id === selectedListId);
    shown = activeList ? shown.filter((p) => activeList.members.includes(p.u)) : [];
  }
  if (view === "user") shown = shown.filter((p) => p.u === profileUser);
  if (view === "search" && query)
    shown = shown.filter((p) => {
      const u = users.find((u) => u.id === p.u);
      return (p.text + " " + u.name + " @" + u.handle)
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  $("#feed").innerHTML = shown.length
    ? shown.map(postHTML).join("")
    : `<div class="empty">${view === "bookmark" ? tr("emptySaved") : view === "search" ? tr("emptySearch") : tr("empty")}</div>`;
  }
  $("#people").innerHTML = users
    .slice(0, 3)
    .map(
      (u) =>
        `<div class="person"><button data-person="${u.id}" aria-label="${u.name}">${avatar(u)}</button><span class="person-text"><b>${u.name}</b><small>@${u.handle}</small></span><button data-follow="${u.id}" class="follow ${following.has(u.id) ? "on" : ""}" aria-pressed="${following.has(u.id)}">${following.has(u.id) ? tr("followingBtn") : tr("follow")}</button></div>`,
    )
    .join("");
  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
    b.setAttribute("aria-pressed", b.dataset.tab === tab);
  });
  applyLanguage();
  persistState();
}
function pollHTML(p) {
  if (!p.poll) return "";
  const total = p.poll.options.reduce((n, o) => n + o.votes, 0);
  return `<div class="poll-results">${p.poll.options
    .map((o, i) => {
      const percent = total ? Math.round((o.votes / total) * 100) : 0;
      return `<button data-poll-vote="${i}" data-id="${p.id}" class="poll-option ${p.poll.voted === i ? "chosen" : ""}" ${p.poll.voted !== undefined ? "disabled" : ""}><span class="poll-fill" style="width:${p.poll.voted !== undefined ? percent : 0}%"></span><b>${escape(o.text)}</b>${p.poll.voted !== undefined ? `<em>${percent}%</em>` : ""}</button>`;
    })
    .join("")}<small>${total} ${tr("votes")}</small></div>`;
}
function imageGridHTML(images, quote = false) {
  if (!images?.length) return "";
  return `<div class="media-grid media-count-${Math.min(images.length, 4)} ${quote ? "quote-media" : ""}">${images.map((src, i) => `<img src="${src}" alt="${tr("imagePreview")} ${i + 1}">`).join("")}</div>`;
}
function audioHTML(src) {
  return src
    ? `<div class="post-audio"><span aria-hidden="true">♪</span><audio controls preload="metadata" src="${escape(src)}"></audio></div>`
    : "";
}
function youtubeIdFromUrl(value) {
  try {
    const url = new URL(String(value).trim());
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    let id = "";
    if (host === "youtu.be") id = url.pathname.split("/").filter(Boolean)[0] || "";
    if (["youtube.com", "m.youtube.com", "music.youtube.com"].includes(host)) {
      if (url.pathname === "/watch") id = url.searchParams.get("v") || "";
      else if (/^\/(embed|shorts|live)\//.test(url.pathname)) id = url.pathname.split("/")[2] || "";
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch { return null; }
}
function youtubeHTML(id) {
  return /^[A-Za-z0-9_-]{11}$/.test(id || "")
    ? `<div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${marketText("YouTube動画", "YouTube video")}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    : "";
}
function formatFileSize(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
function documentsHTML(documents = []) {
  return documents.length
    ? `<div class="post-documents">${documents.map((file) => {
        const extension = (file.name.split(".").pop() || "FILE").toUpperCase();
        return `<a href="${escape(file.url)}" target="_blank" rel="noopener" download="${escape(file.name)}"><span class="document-type">${escape(extension.slice(0, 5))}</span><span><b>${escape(file.name)}</b><small>${formatFileSize(file.size || 0)} · ${marketText("開く・保存", "Open or download")}</small></span><span aria-hidden="true">↗</span></a>`;
      }).join("")}</div>`
    : "";
}
function postHTML(p, detail = false) {
  const u = users.find((u) => u.id === p.u);
  const images = p.images || (p.image ? [p.image] : []);
  const quoteImages =
    p.quoteOf?.images || (p.quoteOf?.image ? [p.quoteOf.image] : []);
  const question=p.qa?`<div class="post-question"><small>${marketText('質問箱への質問','Question box')}</small><p>${escape(p.qa.text)}</p><span>${p.qa.anonymous?marketText('匿名','Anonymous'):escape(p.qa.fromName || '')}</span></div>`:'';
  return `<article class="post ${detail ? "post-detail" : ""}" id="post-${p.id}"${detail ? "" : ` data-open-post="${p.id}"`}><button data-person="${u.id}" aria-label="${u.name}のプロフィール" style="padding:0;align-self:flex-start">${avatar(u)}</button><div class="post-body"><div class="post-head"><button data-person="${u.id}" style="padding:0"><b>${u.name}</b></button>${u.id === "sota" ? '<span class="verified" aria-label="サンプル認証済み">✦</span>' : ""}${u.mbti ? `<span class="mbti-badge compact">${escape(u.mbti)}</span>` : ""}<span class="handle">@${u.handle}</span><button type="button" class="time post-detail-link" data-open-post="${p.id}" aria-label="${marketText("投稿詳細を表示", "View post details")}">· ${p.time}</button>${p.u === "you" ? `<button class="delete" data-action="delete" data-id="${p.id}">削除</button>` : ""}</div>${p.text ? `<p class="post-content">${escape(p.text).replace(/(#[^\s#]+)/g, '<span class="tag">$1</span>')}</p>` : ""}${question}${imageGridHTML(images)}${documentsHTML(p.documents)}${audioHTML(p.audio)}${youtubeHTML(p.youtubeId)}${stockPostCardHTML(p.stock)}${p.quoteOf ? `<div class="quote-card"><small>引用元 · ${users.find((u) => u.id === p.quoteOf.u)?.name || ""}</small>${p.quoteOf.text ? `<p>${escape(p.quoteOf.text)}</p>` : ""}${imageGridHTML(quoteImages, true)}${documentsHTML(p.quoteOf.documents)}${audioHTML(p.quoteOf.audio)}${youtubeHTML(p.quoteOf.youtubeId)}</div>` : ""}${pollHTML(p)}<div class="actions">${[
    ["reply", tr("reply"), p.replies, ""],
    ["repeat", tr("repost"), p.reposts, p.reposted ? "reposted" : ""],
    ["heart", tr("like"), p.likes, p.liked ? "liked" : ""],
    ["bookmark", tr("save"), "", p.saved ? "saved" : ""],
  ]
    .map(
      ([a, label, count, c]) =>
        `<button data-action="${a}" data-id="${p.id}" class="${c}" aria-label="${label}" ${a !== "reply" ? `aria-pressed="${!!c}"` : ""}>${icon(a === "heart" ? likeIcon : a)}<span>${count || ""}</span></button>`,
    )
    .join("")}</div>${detail ? "" : posts
    .filter((r) => r.parent === p.id && !teenRestrictedPost(r))
    .map(
      (r) =>
        `<div style="margin-top:15px;border-left:2px solid #dbe8fd;padding-left:12px"><small>あなた · 返信</small><p class="post-content" style="margin-bottom:4px">${escape(r.text)}</p></div>`,
    )
    .join("")}</div></article>`;
}
function createPost(
  text,
  parent = null,
  quoteOf = null,
  images = [],
  poll = null,
  audio = null,
  stock = null,
  youtubeId = null,
  documents = [],
) {
  if (
    typeof text !== "string" ||
    (!text.trim() && !images.length && !poll && !audio && !stock && !youtubeId && !documents.length) ||
    [...text].length > 200
  )
    throw Error("本文、画像、文書、投票、音声、シェア、YouTube動画のいずれかを追加してください。");
  const p = {
    id: Date.now(),
    u: "you",
    text: text.trim(),
    images: images.slice(0, 4),
    audio,
    poll,
    time: "たった今",
    likes: 0,
    replies: 0,
    reposts: 0,
    parent,
    quoteOf,
    stock,
    youtubeId,
    documents: documents.slice(0, 4),
  };
  if (parent) {
    const original = posts.find((p) => p.id === parent);
    if (!original) throw Error("ポストが見つかりません");
    original.replies++;
  }
  posts.unshift(p);
  render();
  return p.id;
}
function pollInputs() {
  return [...document.querySelectorAll("[data-poll-option]")];
}
function updateAddOptionButton() {
  $("#add-poll-option").hidden = pollInputs().length >= 6;
}
function addPollOption() {
  const index = pollInputs().length + 1;
  if (index > 6) return;
  const row = document.createElement("div");
  row.className = "poll-extra-row";
  row.innerHTML = `<input data-poll-option maxlength="40" placeholder="${lang === "ja" ? "選択肢" : "Option"} ${index}"><button type="button" data-remove-poll-option aria-label="${lang === "ja" ? "選択肢を削除" : "Remove option"}">×</button>`;
  $("#extra-poll-options").append(row);
  row.querySelector("input").oninput = updatePostButton;
  row.querySelector("input").focus();
  updateAddOptionButton();
  updatePostButton();
}
function pollReady() {
  const inputs = pollInputs();
  return (
    !$("#poll-builder").hidden &&
    inputs.length >= 2 &&
    inputs.every((input) => input.value.trim())
  );
}
function updatePostButton() {
  const n = [...$("#post-text").value].length;
  $("#counter").textContent = `${n} / 200`;
  $("#post-button").disabled =
    (!$("#post-text").value.trim() &&
      !composingImages.length &&
      !composingAudio &&
      !composingDocuments.length &&
      !composingStock &&
      !composingYoutube &&
      !pollReady()) ||
    n > 200;
}
function renderImagePreview() {
  $("#image-preview").hidden = !composingImages.length;
  $("#image-preview").innerHTML = composingImages
    .map(
      (src, i) =>
        `<div><img src="${src}" alt="${tr("imagePreview")} ${i + 1}"><button type="button" data-remove-image="${i}" aria-label="${tr("removeImage")}">×</button></div>`,
    )
    .join("");
}
function clearImages() {
  composingImages = [];
  $("#post-image").value = "";
  renderImagePreview();
  updatePostButton();
}
function renderDocumentPreview() {
  $("#document-preview").hidden = !composingDocuments.length;
  $("#document-preview").innerHTML = composingDocuments.map((file, index) => `<div><span class="document-type">${escape((file.name.split(".").pop() || "FILE").toUpperCase().slice(0, 5))}</span><span><b>${escape(file.name)}</b><small>${formatFileSize(file.size)}</small></span><button type="button" data-remove-document="${index}" aria-label="${tr("removeDocument")}">×</button></div>`).join("");
}
function clearDocuments() {
  composingDocuments = [];
  renderDocumentPreview();
  updatePostButton();
}
function updateYoutubePreview() {
  $("#youtube-preview").hidden = !composingYoutube;
  $("#youtube-preview").innerHTML = composingYoutube
    ? `${youtubeHTML(composingYoutube)}<button type="button" data-remove-youtube aria-label="${marketText("YouTube動画を削除", "Remove YouTube video")}">×</button>`
    : "";
}
function clearYoutube() {
  composingYoutube = null;
  updateYoutubePreview();
  updatePostButton();
}
function renderAudioPreview() {
  $("#audio-preview").hidden = !composingAudio;
  $("#audio-preview-player").src = composingAudio?.preview || "";
}
function clearAudio() {
  if (composingAudio?.preview) URL.revokeObjectURL(composingAudio.preview);
  composingAudio = null;
  renderAudioPreview();
  updatePostButton();
}
function selectAudio(file) {
  if (!file) return;
  const allowedAudio = [
    "audio/mpeg",
    "audio/mp4",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "audio/x-m4a",
    "audio/aac",
  ];
  if (!allowedAudio.includes(file.type)) return notify(tr("audioError"));
  if (file.size > 15 * 1024 * 1024) return notify(tr("audioTooLarge"));
  clearAudio();
  composingAudio = { file, preview: URL.createObjectURL(file) };
  renderAudioPreview();
  updatePostButton();
}
function clearPoll() {
  $("#poll-builder").hidden = true;
  pollInputs()
    .slice(0, 2)
    .forEach((input) => (input.value = ""));
  $("#extra-poll-options").innerHTML = "";
  updateAddOptionButton();
  updatePostButton();
}
function updateQuoteComposer() {
  const box = $("#composer-quote");
  if (!box) return;
  box.hidden = !composingQuote;
  if (composingQuote) {
    const u = users.find((x) => x.id === composingQuote.u);
    $("#composer-quote-author").textContent =
      `${tr("quoteFrom")} · ${u?.name || ""} @${u?.handle || ""}`;
    $("#composer-quote-text").textContent =
      composingQuote.text ||
      (composingQuote.audio
        ? lang === "ja"
          ? "音声投稿"
          : "Audio post"
        : lang === "ja"
          ? "画像投稿"
          : "Image post");
    $("#post-button").textContent = tr("quoteButton");
  } else {
    $("#post-button").textContent = tr("compose");
  }
}
function stockPostCardHTML(stock, compact = false) {
  if (stock?.shared) {
    const fmt = n => Number(n).toLocaleString(lang === "ja" ? "ja-JP" : "en-US", { maximumFractionDigits: 8 });
    return `<div class="stock-post-card ${compact ? "compact" : ""}"><span class="stock-post-label">${marketText("クリエイターシェア · 投稿時点", "Creator Shares · at posting")}</span><b>${escape(stock.name || "Creator")}</b><div class="stock-post-values"><span>${marketText("1株価格", "Share price")}<b>${fmt(stock.price)} pt</b></span><span>${marketText("発行済み", "Issued")}<b>${fmt(stock.supply)}</b></span><span>${marketText("時価総額", "Market cap")}<b>${fmt(stock.marketCap)} pt</b></span></div></div>`;
  }
  if (!stock || !CreatorMarket.prices[stock.creator]) return "";
  const user = users.find((u) => u.id === stock.creator);
  const fmt = (n) =>
    Number(n).toLocaleString(lang === "ja" ? "ja-JP" : "en-US");
  return `<div class="stock-post-card ${compact ? "compact" : ""}"><span class="stock-post-label">${marketText("クリエイターシェア", "Creator Shares")}</span><div class="stock-post-owner">${avatar(user)}<span><b>${escape(user.name)}</b><small>@${escape(user.handle)}</small></span></div><div class="stock-post-values"><span>${marketText("1株価格", "Share price")}<b>${fmt(stock.price)} pt</b></span><span>${marketText("発行済み", "Issued")}<b>${fmt(stock.supply)}</b></span><span>${marketText("時価総額", "Market cap")}<b>${fmt(stock.marketCap)} pt</b></span></div></div>`;
}
function updateStockComposer() {
  const box = $("#composer-stock");
  box.hidden = !composingStock;
  $("#composer-stock-card").innerHTML = composingStock
    ? stockPostCardHTML(composingStock, true)
    : "";
  updatePostButton();
}
function openQuotePicker() {
  $("#quote-picker-list").innerHTML = posts
    .filter((post) => !post.parent)
    .slice(0, 30)
    .map((post) => {
      const u = users.find((user) => user.id === post.u);
      const summary =
        post.text ||
        (post.audio
          ? lang === "ja"
            ? "音声投稿"
            : "Audio post"
          : lang === "ja"
            ? "画像投稿"
            : "Image post");
      return `<button type="button" class="quote-source" data-quote-source="${post.id}"><b>${escape(u?.name || "")} <small>@${escape(u?.handle || "")}</small></b><p>${escape(summary.slice(0, 120))}</p><small>${post.time}</small></button>`;
    })
    .join("");
  $("#quote-picker-dialog").showModal();
}
$("#choose-quote").onclick = openQuotePicker;
$("#close-quote-picker").onclick = () => $("#quote-picker-dialog").close();
$("#add-youtube").onclick = () => {
  $("#youtube-url").value = "";
  $("#youtube-error").textContent = "";
  $("#youtube-dialog").showModal();
  $("#youtube-url").focus();
};
$("#close-youtube-dialog").onclick = () => $("#youtube-dialog").close();
$("#youtube-form").onsubmit = (e) => {
  e.preventDefault();
  const id = youtubeIdFromUrl($("#youtube-url").value);
  if (!id) {
    $("#youtube-error").textContent = marketText("有効なYouTube URLを入力してください。", "Enter a valid YouTube URL.");
    return;
  }
  composingYoutube = id;
  updateYoutubePreview();
  updatePostButton();
  $("#youtube-dialog").close();
};
$("#quote-picker-list").onclick = (event) => {
  const button = event.target.closest("[data-quote-source]");
  if (!button) return;
  const original = posts.find(
    (post) => post.id === Number(button.dataset.quoteSource),
  );
  if (!original) return;
  composingQuote = {
    u: original.u,
    text: original.text,
    images: original.images || [],
    audio: original.audio || null,
    documents: original.documents || [],
  };
  $("#quote-picker-dialog").close();
  updateQuoteComposer();
  $("#post-text").focus();
};
$("#cancel-quote").onclick = () => {
  composingQuote = null;
  updateQuoteComposer();
  notify(lang === "ja" ? "引用を取り消しました" : "Quote removed");
};
$("#post-text").oninput = updatePostButton;
$("#post-image").onchange = async (e) => {
  const files = [...(e.target.files || [])];
  if (!files.length) return;
  const imageFiles = files.filter((file) => file.type.startsWith("image/"));
  const audioFiles = files.filter((file) => file.type.startsWith("audio/"));
  const documentExtensions = new Set(["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv", "rtf", "odt"]);
  const documentFiles = files.filter((file) => documentExtensions.has((file.name.split(".").pop() || "").toLowerCase()));
  if (
    imageFiles.length + audioFiles.length + documentFiles.length !== files.length ||
    audioFiles.length > 1 ||
    (audioFiles.length && (imageFiles.length || documentFiles.length || composingImages.length || composingDocuments.length)) ||
    (composingAudio && (imageFiles.length || documentFiles.length))
  ) {
    notify(
      audioFiles.length > 1
        ? lang === "ja"
          ? "音声は1件まで選択できます。"
          : "Choose one audio file."
        : tr("imageError"),
    );
    e.target.value = "";
    return;
  }
  if (composingDocuments.length + documentFiles.length > 4 || documentFiles.some((file) => file.size > 10 * 1024 * 1024)) {
    notify(tr("documentTooLarge"));
    e.target.value = "";
    return;
  }
  if (composingImages.length + imageFiles.length > 4) {
    notify(
      lang === "ja"
        ? "画像は4枚まで選択できます。"
        : "You can add up to 4 images.",
    );
    e.target.value = "";
    return;
  }
  if (
    imageFiles.some(
      (file) =>
        !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
          file.type,
        ),
    )
  ) {
    notify(tr("imageError"));
    e.target.value = "";
    return;
  }
  if (imageFiles.some((file) => file.size > 5 * 1024 * 1024)) {
    notify(tr("imageTooLarge"));
    e.target.value = "";
    return;
  }
  try {
    const added = await Promise.all(
      imageFiles.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
      ),
    );
    composingImages.push(...added);
    composingDocuments.push(...documentFiles);
    if (audioFiles[0]) selectAudio(audioFiles[0]);
    renderImagePreview();
    renderDocumentPreview();
    updatePostButton();
  } catch {
    notify(tr("imageError"));
  }
  e.target.value = "";
};
$("#document-preview").onclick = (e) => {
  const button = e.target.closest("[data-remove-document]");
  if (!button) return;
  composingDocuments.splice(Number(button.dataset.removeDocument), 1);
  renderDocumentPreview();
  updatePostButton();
};
$("#image-preview").onclick = (e) => {
  const b = e.target.closest("[data-remove-image]");
  if (!b) return;
  composingImages.splice(Number(b.dataset.removeImage), 1);
  renderImagePreview();
  updatePostButton();
};
$("#remove-audio").onclick = clearAudio;
function updateRecordingTime() {
  const minutes = String(Math.floor(recordingSeconds / 60)).padStart(2, "0");
  const seconds = String(recordingSeconds % 60).padStart(2, "0");
  $("#record-time").textContent = `${minutes}:${seconds}`;
}
function resetRecordingDialog() {
  clearInterval(recordingTimer);
  recordingTimer = null;
  recordingSeconds = 0;
  updateRecordingTime();
  if (recordedAudioCandidate?.preview)
    URL.revokeObjectURL(recordedAudioCandidate.preview);
  recordedAudioCandidate = null;
  $("#record-preview").hidden = true;
  $("#record-preview").removeAttribute("src");
  $("#record-status").textContent = tr("recordingReady");
  $("#record-orb").classList.remove("active");
  $("#start-recording").disabled = false;
  $("#stop-recording").disabled = true;
  $("#discard-recording").disabled = true;
  $("#finish-recording").disabled = true;
}
function closeRecordingDialog() {
  recordingCancelled = true;
  if (mediaRecorder?.state === "recording") mediaRecorder.stop();
  recordingStream?.getTracks().forEach((track) => track.stop());
  recordingStream = null;
  resetRecordingDialog();
  $("#record-dialog").close();
}
$("#record-audio").onclick = () => {
  resetRecordingDialog();
  applyLanguage();
  $("#record-dialog").showModal();
};
$("#start-recording").onclick = async () => {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder)
    return notify(tr("audioUnavailable"));
  if (mediaRecorder?.state === "paused") {
    mediaRecorder.resume();
    recordingTimer = setInterval(() => {
      recordingSeconds += 1;
      updateRecordingTime();
    }, 1000);
    $("#record-status").textContent = tr("recordingNow");
    $("#record-orb").classList.add("active");
    $("#start-recording").disabled = true;
    $("#stop-recording").disabled = false;
    applyLanguage();
    return;
  }
  try {
    recordingCancelled = false;
    recordingStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    recordingChunks = [];
    mediaRecorder = new MediaRecorder(
      recordingStream,
      MediaRecorder.isTypeSupported("audio/webm")
        ? { mimeType: "audio/webm" }
        : undefined,
    );
    mediaRecorder.ondataavailable = (event) =>
      event.data.size && recordingChunks.push(event.data);
    mediaRecorder.onstop = () => {
      const type = mediaRecorder?.mimeType || "audio/webm";
      recordingStream?.getTracks().forEach((track) => track.stop());
      recordingStream = null;
      mediaRecorder = null;
      clearInterval(recordingTimer);
      recordingTimer = null;
      $("#record-orb").classList.remove("active");
      if (recordingCancelled) return;
      const file = new File(recordingChunks, "voice-post.webm", { type });
      selectAudio(file);
      resetRecordingDialog();
      $("#record-dialog").close();
    };
    mediaRecorder.start();
    recordingSeconds = 0;
    updateRecordingTime();
    recordingTimer = setInterval(() => {
      recordingSeconds += 1;
      updateRecordingTime();
    }, 1000);
    $("#record-status").textContent = tr("recordingNow");
    $("#record-orb").classList.add("active");
    $("#start-recording").disabled = true;
    $("#stop-recording").disabled = false;
    $("#discard-recording").disabled = false;
    $("#finish-recording").disabled = false;
  } catch {
    notify(tr("audioUnavailable"));
  }
};
$("#stop-recording").onclick = () => {
  if (mediaRecorder?.state === "recording") mediaRecorder.pause();
  clearInterval(recordingTimer);
  recordingTimer = null;
  $("#record-status").textContent = tr("recordingPaused");
  $("#record-orb").classList.remove("active");
  $("#start-recording").disabled = false;
  $("#stop-recording").disabled = true;
  applyLanguage();
};
$("#finish-recording").onclick = () => {
  if (mediaRecorder && ["recording", "paused"].includes(mediaRecorder.state)) {
    $("#finish-recording").disabled = true;
    $("#stop-recording").disabled = true;
    $("#start-recording").disabled = true;
    mediaRecorder.stop();
  }
};
$("#discard-recording").onclick = () => {
  recordingCancelled = true;
  if (mediaRecorder && ["recording", "paused"].includes(mediaRecorder.state))
    mediaRecorder.stop();
  recordingStream?.getTracks().forEach((track) => track.stop());
  recordingStream = null;
  mediaRecorder = null;
  resetRecordingDialog();
};
$("#close-record-dialog").onclick = closeRecordingDialog;
$("#record-dialog").addEventListener("cancel", (event) => {
  event.preventDefault();
  closeRecordingDialog();
});
$("#add-poll").onclick = () => {
  $("#poll-builder").hidden = false;
  updatePostButton();
  $("#poll-option-1").focus();
};
$("#remove-poll").onclick = clearPoll;
$("#add-poll-option").onclick = addPollOption;
$("#poll-option-1").oninput = $("#poll-option-2").oninput = updatePostButton;
$("#extra-poll-options").onclick = (e) => {
  const b = e.target.closest("[data-remove-poll-option]");
  if (!b) return;
  b.closest(".poll-extra-row").remove();
  pollInputs().forEach(
    (input, i) =>
      (input.placeholder = `${lang === "ja" ? "選択肢" : "Option"} ${i + 1}`),
  );
  updateAddOptionButton();
  updatePostButton();
};
async function uploadImages(images) {
  if (!images.length) return [];
  const form = new FormData();
  for (const src of images) {
    const blob = await (await fetch(src)).blob();
    form.append("images", blob, "image");
  }
  const response = await fetch("/api/media", { method: "POST", body: form });
  if (!response.ok) throw Error("upload failed");
  const data = await response.json();
  return data.urls;
}
async function uploadAudio(audio) {
  if (!audio) return null;
  const form = new FormData();
  form.append("audio", audio.file, audio.file.name || "voice-post.webm");
  const response = await fetch("/api/media", { method: "POST", body: form });
  if (!response.ok) throw Error("audio upload failed");
  return (await response.json()).url;
}
async function uploadDocuments(documents) {
  if (!documents.length) return [];
  const form = new FormData();
  documents.forEach((file) => form.append("documents", file, file.name));
  const response = await fetch("/api/media", { method: "POST", body: form });
  if (!response.ok) throw Error("document upload failed");
  return (await response.json()).documents || [];
}
$("#post-form").onsubmit = async (e) => {
  e.preventDefault();
  const quote = composingQuote
    ? {
        u: composingQuote.u,
        text: composingQuote.text,
        images: composingQuote.images || [],
        audio: composingQuote.audio || null,
        documents: composingQuote.documents || [],
        youtubeId: composingQuote.youtubeId || null,
      }
    : null;
  const poll = $("#poll-builder").hidden
    ? null
    : {
        options: pollInputs()
          .map((input) => input.value.trim())
          .map((text) => ({ text, votes: 0 })),
      };
  if (poll && poll.options.some((o) => !o.text)) {
    notify(tr("pollError"));
    return;
  }
  const button = $("#post-button");
  button.disabled = true;
  let uploadedImages, uploadedAudio, uploadedDocuments;
  try {
    uploadedImages = await uploadImages(composingImages);
    uploadedAudio = await uploadAudio(composingAudio);
    uploadedDocuments = await uploadDocuments(composingDocuments);
  } catch {
    notify(
      lang === "ja"
        ? "メディアを保存できませんでした。もう一度お試しください。"
        : "Could not save media. Please try again.",
    );
    updatePostButton();
    return;
  }
  createPost(
    $("#post-text").value,
    null,
    quote,
    uploadedImages,
    poll,
    uploadedAudio,
    composingStock,
    composingYoutube,
    uploadedDocuments,
  );
  $("#post-text").value = "";
  composingQuote = null;
  composingStock = null;
  composingYoutube = null;
  clearImages();
  clearAudio();
  clearDocuments();
  updateYoutubePreview();
  clearPoll();
  updateQuoteComposer();
  updateStockComposer();
  updatePostButton();
  notify(
    quote
      ? lang === "ja"
        ? "引用リツイートしました"
        : "Quote reposted"
      : lang === "ja"
        ? "ポストしました"
        : "Posted",
  );
};
$("#cancel-stock").onclick = () => {
  composingStock = null;
  updateStockComposer();
  notify(marketText("シェア情報の添付を取り消しました", "Creator Shares removed"));
};
$("#compose-nav").onclick = () => {
  navigate("home");
  $("#post-text").focus();
};
$("#account").onclick = () => navigate("user");
$(".brand").onclick = (e) => {
  e.preventDefault();
  navigate("home");
};
$("#right-search").onsubmit = (e) => {
  e.preventDefault();
  query = new FormData(e.target).get("q").trim();
  navigate("search");
};
document.addEventListener("submit", (e) => {
  if (e.target.id === "help-search") {
    e.preventDefault();
    helpQuery = String(new FormData(e.target).get("q") || "").trim();
    render();
    return;
  }
  if (e.target.id === "relationship-form") {
    e.preventDefault();
    const data = new FormData(e.target);
    const person = String(data.get("person") || "").trim();
    const type = String(data.get("type") || "friend");
    const custom = String(data.get("custom") || "").trim();
    const note = String(data.get("note") || "").trim();
    if (!person) return;
    if (type === "custom" && !custom) {
      notify(marketText("その他の関係名を入力してください", "Enter a custom relationship name"));
      return;
    }
    const duplicate = relationships.some((item) => item.person.toLocaleLowerCase() === person.toLocaleLowerCase() && item.type === type && (item.custom || "").toLocaleLowerCase() === custom.toLocaleLowerCase());
    if (duplicate) {
      notify(marketText("同じ名前と関係は登録済みです", "This name and relationship already exist"));
      return;
    }
    relationships.push({ id: Date.now(), person, type, custom, note, fictional: data.get("fictional") === "on" });
    persistState();
    render();
    notify(marketText("交友関係に追加しました", "Relationship added"));
    return;
  }
  if (e.target.id === "inner-search") {
    e.preventDefault();
    query = new FormData(e.target).get("q").trim();
    render();
  }
  if (e.target.id === "adhd-check-form") {
    e.preventDefault();
    const data=new FormData(e.target),answers=Array.from({length:6},(_,i)=>Number(data.get(`q${i}`))),frequent=answers.filter(v=>v>=2).length,total=answers.reduce((a,b)=>a+b,0),result=$("#adhd-result");
    const high=frequent>=4;
    result.innerHTML=lang==="ja"
      ? `<b>${high?'困りごとが多く示されました':'高頻度の回答は少なめでした'}</b><p>「よくある・とてもよくある」：${frequent}/6項目（回答スコア ${total}/18）</p><p>${high?'学校・仕事・生活への影響が続いている場合は、医師や心理職などへの相談を検討してください。':'この結果だけでADHDの有無は判断できません。困りごとがある場合は結果にかかわらず専門家へ相談できます。'}</p>`
      : `<b>${high?'Several difficulties were reported':'Few items were reported frequently'}</b><p>Often or very often: ${frequent}/6 items (response score ${total}/18)</p><p>${high?'If these experiences continue to affect school, work, or daily life, consider talking with a qualified healthcare professional.':'This result cannot determine whether ADHD is present. You can seek professional advice whenever these experiences concern you.'}</p>`;
    result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
});
document.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-poll-vote]");
  if (!b) return;
  const p = posts.find((p) => p.id === Number(b.dataset.id));
  const choice = Number(b.dataset.pollVote);
  if (!p?.poll || p.poll.voted !== undefined || !p.poll.options[choice]) return;
  p.poll.options[choice].votes++;
  p.poll.voted = choice;
  render();
  notify(lang === "ja" ? "投票しました" : "Vote submitted");
});
document.addEventListener("click", async (e) => {
  const postTarget = e.target.closest("[data-open-post]");
  if (postTarget && !e.target.closest("button, a, input, select, textarea, audio, iframe, label")) {
    openPostDetail(postTarget.dataset.openPost);
    return;
  }
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.openList) {
    selectedListId = Number(b.dataset.openList);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (b.hasAttribute("data-list-back")) {
    selectedListId = null;
    render();
    return;
  }
  if (b.dataset.deleteList) {
    lists = lists.filter((item) => item.id !== Number(b.dataset.deleteList));
    selectedListId = null;
    persistState();
    render();
    notify(marketText("リストを削除しました", "List deleted"));
    return;
  }
  if (b.dataset.openPost) {
    openPostDetail(b.dataset.openPost);
    return;
  }
  if (b.hasAttribute("data-post-back")) {
    selectedPostId = null;
    navigate(postReturnView === "post" ? "home" : postReturnView);
    return;
  }
  if (b.dataset.deleteRelationship) {
    relationships = relationships.filter((item) => item.id !== Number(b.dataset.deleteRelationship));
    persistState();
    render();
    notify(marketText("交友関係から削除しました", "Relationship deleted"));
    return;
  }
  if (b.hasAttribute("data-remove-youtube")) {
    clearYoutube();
    return;
  }
  if (b.hasAttribute("data-install-pwa")) {
    if (!pwaInstallPrompt) return;
    await pwaInstallPrompt.prompt();
    await pwaInstallPrompt.userChoice;
    pwaInstallPrompt = null;
    render();
    return;
  }
  if (b.dataset.view) {
    if (b.dataset.view === "search") query = "";
    if (b.dataset.view === "lists") selectedListId = null;
    navigate(b.dataset.view);
  }
  if (b.dataset.language) {
    lang = b.dataset.language;
    try {
      localStorage.setItem("blue-language", lang);
    } catch {}
    render();
    notify(lang === "ja" ? "日本語に変更しました" : "Changed to English");
  }
  if (b.dataset.themeChoice) {
    theme = b.dataset.themeChoice;
    applyTheme();
    try {
      localStorage.setItem("blue-theme", theme);
    } catch {}
    render();
    const names =
      lang === "ja"
        ? {
            light: "ライト",
            dark: "ダーク",
            darkblue: "ダークブルー",
            lightorange: "ライトオレンジ",
            mint: "ミント",
            monochrome: "モノクローム",
            system: "システム",
          }
        : {
            light: "Light",
            dark: "Dark",
            darkblue: "Dark Blue",
            lightorange: "Light Orange",
            mint: "Mint",
            monochrome: "Monochrome",
            system: "System",
          };
    notify(
      lang === "ja"
        ? `${names[theme]}に変更しました`
        : `${names[theme]} enabled`,
    );
  }
  if (b.dataset.likeIcon) {
    likeIcon = b.dataset.likeIcon;
    try {
      localStorage.setItem("blue-like-icon", likeIcon);
    } catch {}
    render();
    notify(
      lang === "ja" ? "いいねアイコンを変更しました" : "Like icon changed",
    );
  }
  if (b.hasAttribute("data-private-account")) {
    accountPrivate = !accountPrivate;
    render();
    notify(accountPrivate ? tr("privacySaved") : tr("privacyRemoved"));
    return;
  }
  if (b.hasAttribute("data-edit-profile")) {
    const self = users.find((u) => u.id === "you");
    $("#profile-name").value = self.name;
    $("#profile-handle").value = self.handle;
    $("#profile-bio").value = self.bio;
    $("#profile-mbti").value = self.mbti || "";
    $("#profile-error").textContent = "";
    $("#profile-dialog").showModal();
    $("#profile-name").focus();
    return;
  }
  if (b.dataset.person) navigate("user", b.dataset.person);
  if (b.dataset.tab) {
    tab = b.dataset.tab;
    render();
  }
  if (b.dataset.follow) {
    const id = b.dataset.follow;
    following.has(id) ? following.delete(id) : following.add(id);
    render();
  }
  if (b.dataset.trend) {
    query = b.dataset.trend;
    navigate("search");
  }
  if (b.dataset.action) {
    const p = posts.find((p) => p.id === Number(b.dataset.id));
    if (!p) return;
    switch (b.dataset.action) {
      case "heart":
        p.liked = !p.liked;
        p.likes += p.liked ? 1 : -1;
        break;
      case "repeat":
        repostTo = p.id;
        $("#repost-context").textContent =
          `${users.find((u) => u.id === p.u).name}さんのポスト\n${p.text}`;
        $("#repost-dialog").showModal();
        return;
      case "bookmark":
        p.saved = !p.saved;
        notify(
          p.saved ? "ブックマークに保存しました" : "ブックマークを解除しました",
        );
        break;
      case "delete":
        if (confirm("このポストを削除しますか？")) {
          posts = posts.filter((x) => x.id !== p.id && x.parent !== p.id);
          if (view === "post" && selectedPostId === p.id) {
            selectedPostId = null;
            view = postReturnView === "post" ? "home" : postReturnView;
          }
        }
        break;
      case "reply":
        replyTo = p.id;
        $("#reply-context").textContent =
          `${users.find((u) => u.id === p.u).name}さんへ返信\n${p.text}`;
        $("#reply-dialog").showModal();
        $("#reply-text").focus();
        return;
    }
    render();
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id !== "list-create-form") return;
  e.preventDefault();
  const data = new FormData(e.target);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  const item = {
    id: Date.now(),
    name,
    description: String(data.get("description") || "").trim(),
    members: [],
  };
  lists.unshift(item);
  selectedListId = item.id;
  persistState();
  render();
  notify(marketText("リストを作成しました", "List created"));
});
document.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-member]")) return;
  const item = lists.find((list) => list.id === selectedListId);
  if (!item) return;
  const id = e.target.dataset.listMember;
  item.members = e.target.checked
    ? [...new Set([...item.members, id])]
    : item.members.filter((member) => member !== id);
  persistState();
  render();
  notify(marketText("リストのメンバーを更新しました", "List members updated"));
});
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-repost-mode]");
  if (!b) return;
  const mode = b.dataset.repostMode;
  if (mode === "plain") {
    const original = posts.find((x) => x.id === repostTo);
    if (original) {
      original.reposted = !original.reposted;
      original.reposts += original.reposted ? 1 : -1;
      notify(
        original.reposted ? "リツイートしました" : "リツイートを取り消しました",
      );
    }
    $("#repost-dialog").close();
    render();
  } else {
    const original = posts.find((x) => x.id === repostTo);
    if (!original) return;
    composingQuote = {
      u: original.u,
      text: original.text,
      images: original.images || (original.image ? [original.image] : []),
      audio: original.audio || null,
    };
    $("#repost-dialog").close();
    navigate("home");
    updateQuoteComposer();
    $("#post-text").focus();
    notify("コメントを入力してください");
  }
});
$("#profile-form").onsubmit = (e) => {
  e.preventDefault();
  const name = $("#profile-name").value.trim(),
    handle = $("#profile-handle").value.trim().replace(/^@/, "").toLowerCase(),
    bio = $("#profile-bio").value.trim(),
    mbti = $("#profile-mbti").value;
  if (!name || [...name].length > 10 || !/^[a-z0-9_]{1,25}$/.test(handle)) {
    $("#profile-error").textContent = tr("profileError");
    return;
  }
  if (mbti && !/^(I|E)(N|S)(T|F)(J|P)$/.test(mbti)) {
    $("#profile-error").textContent = tr("profileError");
    return;
  }
  if (users.some((u) => u.id !== "you" && u.handle.toLowerCase() === handle)) {
    $("#profile-error").textContent = tr("handleTaken");
    return;
  }
  const self = users.find((u) => u.id === "you");
  Object.assign(self, {
    name,
    handle,
    bio,
    mbti,
    initial: [...name][0]?.toUpperCase() || "Y",
  });
  try {
    localStorage.setItem("blue-profile", JSON.stringify({ name, handle, bio, mbti }));
  } catch {}
  $("#profile-dialog").close();
  render();
  persistState();
  notify(tr("profileSaved"));
};
$("#close-profile").onclick = $("#cancel-profile").onclick = () =>
  $("#profile-dialog").close();
$("#close-repost").onclick = () => $("#repost-dialog").close();
$("#reply-form").onsubmit = (e) => {
  e.preventDefault();
  if (!$("#reply-text").value.trim()) return;
  createPost($("#reply-text").value, replyTo);
  $("#reply-text").value = "";
  $("#reply-dialog").close();
  notify("返信しました");
};
$("#close-dialog").onclick = () => $("#reply-dialog").close();
$("#search-icon").innerHTML = icon("search");
$("#trends").innerHTML = [
  ["暮らし・日常", "#日々のこと", "1,284"],
  ["クリエイティブ", "#デザイン", "856"],
  ["好きなこと", "#音楽のある暮らし", "642"],
]
  .map(
    ([c, t, n]) =>
      `<button class="trend" data-trend="${t}"><small>${c}</small><b>${t}</b><em>${n} 件のポスト · サンプル</em></button>`,
  )
  .join("");
render();
if (document.modelContext?.registerTool) {
  try {
    Promise.resolve(
      document.modelContext.registerTool({
        name: "create_demo_post",
        description: "Blueにポストを作成し、サーバーへ保存する。",
        inputSchema: {
          type: "object",
          properties: {
            text: { type: "string", minLength: 1, maxLength: 200 },
          },
          required: ["text"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false },
        execute(input) {
          if (!input || typeof input.text !== "string")
            throw Error("text is required");
          navigate("home");
          tab = "all";
          const id = createPost(input.text);
          return { id, status: "created_and_saved" };
        },
      }),
    ).catch(() => {});
  } catch {}
}
