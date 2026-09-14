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
const copy = {
  ja: {
    home: "ホーム",
    search: "見つける",
    bookmark: "ブックマーク",
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
  addImage: "画像・音声",
  removeImage: "画像を削除",
  imagePreview: "選択した画像のプレビュー",
  imageError: "JPEG、PNG、WebP、GIFの画像を選択してください。",
  imageTooLarge: "画像は5MB以下にしてください。",
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
  addImage: "Image or audio",
  removeImage: "Remove image",
  imagePreview: "Preview of selected image",
  imageError: "Choose a JPEG, PNG, WebP, or GIF image.",
  imageTooLarge: "Images must be 5 MB or smaller.",
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
    ["画像・音声・動画", "画像、音声、YouTube動画を投稿できますか？", "画像は最大4枚、音声は録音または音声ファイルから1件追加できます。YouTube動画はURLを入力すると投稿内で再生できます。画像と音声は同じ投稿に同時には追加できません。"],
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
    ["Media", "Can I post images, audio, or YouTube videos?", "You can add up to four images, one audio recording or audio file, or a YouTube video by entering its URL. Images and audio cannot be added to the same post."],
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
  $("#add-youtub…37931 tokens truncated…(--muted); font-style: normal; font-variant-numeric: tabular-nums; white-space: nowrap; }
@media (max-width: 620px) { .holder-chart { grid-template-columns: 1fr; justify-items: center; } .holder-legend { width: 100%; grid-template-columns: 1fr; } }
.holder-rank {
  color: var(--muted);
  font-weight: 700;
  text-align: center;
}
.holder-name,
.holder-power {
  display: grid;
  min-width: 0;
}
.holder-name b,
.holder-name small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.holder-name em {
  color: var(--blue);
  font-size: 0.75rem;
  font-style: normal;
}
.holder-power {
  text-align: right;
}
.holder-name small,
.holder-power small {
  color: var(--muted);
}
.market-cap-ranking {
  margin: 18px 0 22px;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  background: var(--surface);
}
.market-cap-heading {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
  padding: 16px;
}
.market-cap-heading h3 {
  margin: 3px 0 0;
}
.market-cap-heading > small {
  color: var(--muted);
  text-align: right;
}
.market-cap-ranking ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.market-cap-ranking li {
  display: grid;
  grid-template-columns: 2rem auto minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--line);
}
.market-cap-ranking li:first-child {
  background: var(--pale);
}
.cap-rank {
  font-size: 1.05rem;
  font-weight: 800;
  text-align: center;
}
.cap-creator {
  display: grid;
  min-width: 0;
}
.cap-creator small {
  overflow: hidden;
  color: var(--muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.market-cap-ranking li > strong {
  text-align: right;
}
@media (max-width: 600px) {
  .market-cap-heading {
    align-items: start;
    flex-direction: column;
  }
  .market-cap-heading > small {
    text-align: left;
  }
  .market-cap-ranking li {
    grid-template-columns: 1.5rem auto minmax(0, 1fr);
  }
  .market-cap-ranking li > strong {
    grid-column: 3;
    text-align: left;
  }
}
.market-history {
  padding: 0;
  list-style: none;
}
.market-history li {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14px;
}
@media (max-width: 400px) {
  .market-summary {
    grid-template-columns: 1fr;
  }
  .creator-market {
    padding: 20px 16px;
  }
}
.settings-panel {
  padding: 38px 32px 50px;
}
.settings-panel h2 {
  font-size: 24px;
  margin: 10px 0;
}
.settings-panel > p {
  color: #6f8093;
  font-size: 14px;
  line-height: 1.7;
}
.language-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 18px;
}
.language-choice {
  border: 1px solid #dfe7f1;
  border-radius: 14px;
  padding: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: 42px 1fr;
  column-gap: 12px;
  align-items: center;
}
.language-choice > span {
  grid-row: 1/3;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #edf4ff;
  color: var(--blue);
  font-weight: 800;
}
.language-choice b {
  font-size: 15px;
}
.language-choice small {
  color: #8290a0;
}
.language-choice.selected {
  border: 2px solid var(--blue);
  background: #f5f9ff;
  padding: 19px;
}
.language-note {
  font-size: 12px !important;
  color: #8a97a5 !important;
}
.privacy-panel {
  padding-bottom: 0;
}
.privacy-setting {
  margin-top: 22px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}
.privacy-setting > span {
  display: grid;
  gap: 6px;
}
.privacy-setting > span b {
  font-size: 15px;
}
.privacy-setting > span small {
  max-width: 420px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}
.privacy-switch {
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: 42px auto;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 13px;
}
.privacy-switch > span {
  position: relative;
  width: 42px;
  height: 24px;
  border-radius: 999px;
  background: #bdc7d4;
  transition: background 0.2s ease;
}
.privacy-switch > span::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px #0003;
  transition: transform 0.2s ease;
}
.privacy-switch.on {
  color: var(--blue);
}
.privacy-switch.on > span {
  background: var(--blue);
}
.privacy-switch.on > span::after {
  transform: translateX(18px);
}
.lock-badge {
  font-size: 14px;
  vertical-align: 2px;
}
@media (max-width: 600px) {
  .settings-panel {
    padding: 30px 20px;
  }
  .language-options {
    grid-template-columns: 1fr;
  }
  .privacy-setting {
    align-items: flex-start;
    flex-direction: column;
  }
}
.settings-divider {
  height: 1px;
  background: var(--line);
  margin: 36px 0;
}
.teen-settings { margin-top: 16px; }.teen-status { display: flex; align-items: center; gap: 13px; margin: 18px 0; padding: 15px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); }.teen-status > span { display: grid; place-items: center; flex: 0 0 36px; height: 36px; border-radius: 50%; background: var(--line); color: var(--muted); font-weight: 900; }.teen-status.on { border-color: color-mix(in srgb,var(--blue) 48%,var(--line)); background: color-mix(in srgb,var(--blue) 7%,var(--surface)); }.teen-status.on > span { background: var(--blue); color: #fff; }.teen-status div { display: grid; gap: 4px; }.teen-status small,.teen-note { color: var(--muted); line-height: 1.5; }.teen-settings form { display: flex; align-items: end; gap: 10px; }.teen-settings form label { display: grid; flex: 1; gap: 7px; font-weight: 700; }.teen-settings form input { min-height: 44px; }.teen-settings form button { min-height: 44px; }.teen-note { margin: 14px 0 0; font-size: .84rem; }
@media (max-width:600px) { .teen-settings form { align-items: stretch; flex-direction: column; } }
.theme-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 24px 0 18px;
}
.theme-choice {
  border: 1px solid #dfe7f1;
  border-radius: 14px;
  padding: 12px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
}
.theme-choice.selected {
  border: 2px solid var(--blue);
  padding: 11px;
  background: #f5f9ff;
}
.theme-preview {
  width: 62px;
  height: 42px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-size: 20px;
  border: 1px solid #d8e0e9;
}
.light-preview {
  background: #fff;
  color: #f2a900;
}
.dark-preview {
  background: #152235;
  color: #d8e5ff;
  border-color: #2b3d55;
}
.theme-choice b {
  font-size: 14px;
}
html[data-theme="dark"] {
  --ink: #edf3fa;
  --muted: #94a3b5;
  --line: #27364a;
  --pale: #152235;
  color-scheme: dark;
}
html[data-theme="dark"] body {
  background: #0e1826;
  color: var(--ink);
}
html[data-theme="dark"] .left,
html[data-theme="dark"] main,
html[data-theme="dark"] header,
html[data-theme="dark"] .post,
html[data-theme="dark"] .composer {
  background: #0e1826;
}
html[data-theme="dark"] .demo-banner,
html[data-theme="dark"] .feed-label {
  background: #121f30;
  color: #93a7bd;
}
html[data-theme="dark"] .search-box {
  background: #182638;
}
html[data-theme="dark"] .welcome {
  background: #172b46;
}
html[data-theme="dark"] .welcome h2 {
  color: #b8d5ff;
}
html[data-theme="dark"] .welcome p,
html[data-theme="dark"] .settings-panel > p {
  color: #9eb1c7;
}
html[data-theme="dark"] .side-card,
html[data-theme="dark"] dialog,
html[data-theme="dark"] .quote-card,
html[data-theme="dark"] .composer-quote {
  background: #121f30;
  border-color: #2a3a4f;
  color: var(--ink);
}
html[data-theme="dark"] .profile-card {
  background: linear-gradient(135deg, #172b46, #0e1826);
}
html[data-theme="dark"] nav button.selected {
  background: #172b46;
}
html[data-theme="dark"] .language-choice,
html[data-theme="dark"] .theme-choice {
  border-color: #2a3a4f;
}
html[data-theme="dark"] .language-choice.selected,
html[data-theme="dark"] .theme-choice.selected {
  background: #172b46;
  border-color: #5e9cff;
}
html[data-theme="dark"] .language-choice > span {
  background: #223a59;
}
html[data-theme="dark"] .repost-choice {
  border-color: #2a3a4f;
  color: #bdd6f5;
}
html[data-theme="dark"] .repost-choice:hover {
  background: #172b46;
}
html[data-theme="dark"] textarea,
html[data-theme="dark"] input {
  color: #edf3fa;
}
html[data-theme="dark"] .quote-card p,
html[data-theme="dark"] .composer-quote p {
  color: #c0cee0;
}
@media (max-width: 600px) {
  html[data-theme="dark"] .left {
    background: #0e1826ed;
  }
  .theme-options {
    grid-template-columns: 1fr;
  }
}
.darkblue-preview {
  background: #071b44;
  color: #4e91ff;
  border-color: #2857a0;
}
.system-preview {
  background: linear-gradient(90deg, #fff 50%, #152235 50%);
  color: #6382aa;
}
html[data-theme="darkblue"] {
  --ink: #eff5ff;
  --muted: #9cb3d4;
  --line: #1d4179;
  --pale: #0b2859;
  color-scheme: dark;
}
html[data-theme="darkblue"] body {
  background: #061a3a;
  color: var(--ink);
}
html[data-theme="darkblue"] .left,
html[data-theme="darkblue"] main,
html[data-theme="darkblue"] header,
html[data-theme="darkblue"] .post,
html[data-theme="darkblue"] .composer {
  background: #061a3a;
}
html[data-theme="darkblue"] .demo-banner,
html[data-theme="darkblue"] .feed-label {
  background: #0a2550;
  color: #a9c2e7;
}
html[data-theme="darkblue"] .search-box {
  background: #0d2a58;
}
html[data-theme="darkblue"] .welcome {
  background: #0b3069;
}
html[data-theme="darkblue"] .welcome h2 {
  color: #d6e6ff;
}
html[data-theme="darkblue"] .welcome p,
html[data-theme="darkblue"] .settings-panel > p {
  color: #adc4e4;
}
html[data-theme="darkblue"] .side-card,
html[data-theme="darkblue"] dialog,
html[data-theme="darkblue"] .quote-card,
html[data-theme="darkblue"] .composer-quote {
  background: #09234d;
  border-color: #1d4179;
  color: var(--ink);
}
html[data-theme="darkblue"] .profile-card {
  background: linear-gradient(135deg, #0c326d, #061a3a);
}
html[data-theme="darkblue"] nav button.selected {
  background: #0c326d;
}
html[data-theme="darkblue"] .language-choice,
html[data-theme="darkblue"] .theme-choice {
  border-color: #1d4179;
}
html[data-theme="darkblue"] .language-choice.selected,
html[data-theme="darkblue"] .theme-choice.selected {
  background: #0c326d;
  border-color: #62a1ff;
}
html[data-theme="darkblue"] .language-choice > span {
  background: #123d7a;
}
html[data-theme="darkblue"] .repost-choice {
  border-color: #1d4179;
  color: #c8ddff;
}
html[data-theme="darkblue"] .repost-choice:hover {
  background: #0c326d;
}
html[data-theme="darkblue"] textarea,
html[data-theme="darkblue"] input {
  color: #eff5ff;
}
html[data-theme="darkblue"] .quote-card p,
html[data-theme="darkblue"] .composer-quote p {
  color: #c9dafa;
}
@media (max-width: 600px) {
  html[data-theme="darkblue"] .left {
    background: #061a3aed;
  }
}
.orange-preview {
  background: #fff1df;
  color: #ef7d22;
  border-color: #ffc98f;
}
.mint-preview {
  background: #e4f8f0;
  color: #17886c;
  border-color: #9dddc9;
}
html[data-theme="lightorange"] {
  --blue: #e96f18;
  --ink: #3c2a20;
  --muted: #897266;
  --line: #f0d8c6;
  --pale: #fff5eb;
  color-scheme: light;
}
html[data-theme="lightorange"] body {
  background: #fffaf5;
  color: var(--ink);
}
html[data-theme="lightorange"] .left,
html[data-theme="lightorange"] main,
html[data-theme="lightorange"] header,
html[data-theme="lightorange"] .post,
html[data-theme="lightorange"] .composer {
  background: #fffaf5;
}
html[data-theme="lightorange"] .demo-banner,
html[data-theme="lightorange"] .feed-label {
  background: #fff1e3;
  color: #8a6248;
}
html[data-theme="lightorange"] .search-box {
  background: #fff0e2;
}
html[data-theme="lightorange"] .welcome {
  background: #ffe8d1;
}
html[data-theme="lightorange"] .welcome h2 {
  color: #a8460d;
}
html[data-theme="lightorange"] .welcome p,
html[data-theme="lightorange"] .settings-panel > p {
  color: #8b654d;
}
html[data-theme="lightorange"] .side-card,
html[data-theme="lightorange"] dialog,
html[data-theme="lightorange"] .quote-card,
html[data-theme="lightorange"] .composer-quote {
  background: #fffdfb;
  border-color: #f0d8c6;
  color: var(--ink);
}
html[data-theme="lightorange"] .profile-card {
  background: linear-gradient(135deg, #ffe8d1, #fffaf5);
}
html[data-theme="lightorange"] nav button.selected,
html[data-theme="lightorange"] .language-choice.selected,
html[data-theme="lightorange"] .theme-choice.selected {
  background: #fff0e2;
  border-color: #e96f18;
}
html[data-theme="lightorange"] .language-choice > span {
  background: #ffe4ca;
  color: #d55b0b;
}
html[data-theme="lightorange"] .avatar.me {
  background: #ffe4ca;
  color: #d55b0b;
}
@media (max-width: 600px) {
  html[data-theme="lightorange"] .left {
    background: #fffaf5ed;
  }
}
html[data-theme="mint"] {
  --blue: #14876d;
  --ink: #18382f;
  --muted: #65847b;
  --line: #cce8df;
  --pale: #eaf8f3;
  color-scheme: light;
}
html[data-theme="mint"] body {
  background: #f7fffc;
  color: var(--ink);
}
html[data-theme="mint"] .left,
html[data-theme="mint"] main,
html[data-theme="mint"] header,
html[data-theme="mint"] .post,
html[data-theme="mint"] .composer {
  background: #f7fffc;
}
html[data-theme="mint"] .demo-banner,
html[data-theme="mint"] .feed-label {
  background: #e8f8f2;
  color: #567b70;
}
html[data-theme="mint"] .search-box {
  background: #e7f6f1;
}
html[data-theme="mint"] .welcome {
  background: #dff5ed;
}
html[data-theme="mint"] .welcome h2 {
  color: #126b58;
}
html[data-theme="mint"] .welcome p,
html[data-theme="mint"] .settings-panel > p {
  color: #557c70;
}
html[data-theme="mint"] .side-card,
html[data-theme="mint"] dialog,
html[data-theme="mint"] .quote-card,
html[data-theme="mint"] .composer-quote {
  background: #fbfffd;
  border-color: #cce8df;
  color: var(--ink);
}
html[data-theme="mint"] .profile-card {
  background: linear-gradient(135deg, #dff5ed, #f7fffc);
}
html[data-theme="mint"] nav button.selected,
html[data-theme="mint"] .language-choice.selected,
html[data-theme="mint"] .theme-choice.selected {
  background: #e4f7f0;
  border-color: #14876d;
}
html[data-theme="mint"] .language-choice > span {
  background: #d5f1e7;
  color: #14876d;
}
html[data-theme="mint"] .avatar.me {
  background: #d5f1e7;
  color: #14876d;
}
@media (max-width: 600px) {
  html[data-theme="mint"] .left {
    background: #f7fffced;
  }
}
.monochrome-preview {
  background: linear-gradient(135deg, #f5f5f5 50%, #707070 50%);
  color: #333;
  border-color: #aaa;
}
html[data-theme="monochrome"] {
  --blue: #555;
  --ink: #292929;
  --muted: #767676;
  --line: #d4d4d4;
  --pale: #ededed;
  color-scheme: light;
}
html[data-theme="monochrome"] body {
  background: #f5f5f5;
  color: var(--ink);
}
html[data-theme="monochrome"] .left,
html[data-theme="monochrome"] main,
html[data-theme="monochrome"] header,
html[data-theme="monochrome"] .post,
html[data-theme="monochrome"] .composer {
  background: #f5f5f5;
}
html[data-theme="monochrome"] .demo-banner,
html[data-theme="monochrome"] .feed-label {
  background: #e9e9e9;
  color: #686868;
}
html[data-theme="monochrome"] .search-box {
  background: #e5e5e5;
}
html[data-theme="monochrome"] .welcome {
  background: #dedede;
}
html[data-theme="monochrome"] .welcome h2 {
  color: #333;
}
html[data-theme="monochrome"] .welcome p,
html[data-theme="monochrome"] .settings-panel > p {
  color: #666;
}
html[data-theme="monochrome"] .welcome-mark {
  color: #c4c4c4;
}
html[data-theme="monochrome"] .side-card,
html[data-theme="monochrome"] dialog,
html[data-theme="monochrome"] .quote-card,
html[data-theme="monochrome"] .composer-quote {
  background: #fafafa;
  border-color: #d0d0d0;
  color: var(--ink);
}
html[data-theme="monochrome"] .profile-card {
  background: linear-gradient(135deg, #dedede, #f5f5f5);
}
html[data-theme="monochrome"] nav button.selected,
html[data-theme="monochrome"] .language-choice.selected,
html[data-theme="monochrome"] .theme-choice.selected {
  background: #e2e2e2;
  border-color: #555;
}
html[data-theme="monochrome"] .language-choice > span,
html[data-theme="monochrome"] .avatar.me {
  background: #d8d8d8;
  color: #444;
}
html[data-theme="monochrome"] .actions .liked,
html[data-theme="monochrome"] .actions .reposted,
html[data-theme="monochrome"] .actions .saved {
  color: #444;
}
html[data-theme="monochrome"] .actions .liked svg {
  fill: #666;
}
html[data-theme="monochrome"] .tag,
html[data-theme="monochrome"] .verified {
  color: #555;
}
@media (max-width: 600px) {
  html[data-theme="monochrome"] .left {
    background: #f5f5f5ed;
  }
}
.like-icon-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 24px 0 18px;
}
.like-icon-choice {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
}
.like-icon-choice svg {
  width: 24px;
  height: 24px;
}
.like-icon-choice b {
  font-size: 14px;
}
.like-icon-choice.selected {
  border: 2px solid var(--blue);
  padding: 14px;
  background: var(--pale);
  color: var(--blue);
}
@media (max-width: 600px) {
  .like-icon-options {
    grid-template-columns: 1fr 1fr;
  }
}
.user-results {
  border-top: 1px solid var(--line);
  padding: 22px 26px 8px;
}
.user-results h2 {
  font-size: 14px;
  margin: 0 0 14px;
}
.user-result {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 0;
  border-top: 1px solid var(--line);
}
.user-result:first-of-type {
  border-top: 0;
}
.user-result-main {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  text-align: left;
  min-width: 0;
  flex: 1;
}
.user-result-main > span:last-child {
  min-width: 0;
  display: block;
}
.user-result-main b {
  display: block;
  font-size: 14px;
}
.user-result-main small {
  display: block;
  color: var(--muted);
  font-size: 12px;
  margin: 3px 0 6px;
}
.user-result-main em {
  display: block;
  color: var(--muted);
  font-style: normal;
  font-size: 12px;
  line-height: 1.55;
  overflow-wrap: anywhere;
}
.self-label {
  color: var(--muted);
  font-size: 12px;
}
.no-users {
  color: var(--muted);
  font-size: 13px;
  padding: 8px 0 18px;
}
@media (max-width: 600px) {
  .user-results {
    padding-inline: 18px;
  }
  .user-result-main em {
    display: none;
  }
}
.trends-page {
  padding: 38px 28px 55px;
}
.trends-page > h2 {
  font-size: 24px;
  margin: 10px 0;
}
.trends-page > p {
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 28px;
}
.trend-ranking {
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
}
.trend-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 18px 17px;
  text-align: left;
  border-top: 1px solid var(--line);
}
.trend-row:first-child {
  border-top: 0;
}
.trend-row:hover {
  background: var(--pale);
}
.trend-rank {
  font-size: 20px;
  font-weight: 800;
  color: var(--blue);
  font-variant-numeric: tabular-nums;
}
.trend-copy {
  display: block;
  min-width: 0;
  flex: 1;
}
.trend-copy small,
.trend-copy em {
  display: block;
  font-size: 11px;
  color: var(--muted);
  font-style: normal;
}
.trend-copy b {
  display: block;
  font-size: 15px;
  margin: 5px 0;
}
.trend-arrow {
  color: var(--muted);
  font-size: 19px;
}
@media (max-width: 600px) {
  .trends-page {
    padding: 30px 18px;
  }
  .trend-row {
    padding-inline: 14px;
  }
}
.edit-profile-button {
  display: block;
  margin-top: 18px;
  border: 1px solid var(--blue);
  color: var(--blue);
  border-radius: 22px;
  padding: 9px 16px;
  font-size: 13px;
  font-weight: 700;
}
.field-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin: 17px 0 7px;
}
.field-input,
.handle-input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--pale);
  color: var(--ink);
  padding: 11px 12px;
}
.field-input:focus,
.handle-input:focus-within {
  outline: 2px solid var(--blue);
  outline-offset: 1px;
}
.handle-input {
  display: flex;
  align-items: center;
  gap: 4px;
}
.handle-input input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
}
.field-count {
  display: block;
  text-align: right;
  color: var(--muted);
  font-size: 11px;
  margin-top: 4px;
}
#profile-bio {
  min-height: 95px;
  resize: vertical;
}
.form-error {
  min-height: 20px;
  color: #d04444 !important;
  font-size: 12px !important;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
}
.form-actions > button:first-child {
  padding: 10px 15px;
  color: var(--muted);
}
html[data-theme="dark"] .field-input,
html[data-theme="dark"] .handle-input,
html[data-theme="darkblue"] .field-input,
html[data-theme="darkblue"] .handle-input {
  background: #17283d;
}
@media (min-width: 601px) {
  .shell {
    max-width: 1092px;
    grid-template-columns: 92px minmax(0, 650px) 350px;
  }
  .left {
    padding: 28px 14px 22px;
    align-items: center;
  }
  .brand {
    width: 52px;
    height: 52px;
    justify-content: center;
    margin: 0 0 28px;
    font-size: 0;
    letter-spacing: 0;
  }
  .brand span {
    font-size: 35px;
  }
  nav {
    width: 100%;
    gap: 8px;
  }
  nav button {
    width: 52px;
    height: 52px;
    justify-content: center;
    padding: 0;
    margin: auto;
    border-radius: 14px;
  }
  nav button span,
  .compose-nav span,
  .left-bottom .demo-label,
  .left-bottom > p,
  .account > span:last-child {
    display: none;
  }
  .compose-nav {
    width: 52px;
    height: 52px;
    padding: 0;
    margin-top: 22px;
    border-radius: 50%;
    font-size: 24px;
  }
  .left-bottom {
    width: 100%;
    padding: 18px 0 0;
    display: flex;
    justify-content: center;
  }
  .account {
    justify-content: center;
    padding: 0;
  }
  .account .avatar {
    width: 42px;
    height: 42px;
  }
  .right {
    padding-left: 28px;
  }
}
@media (min-width: 961px) and (max-width: 1150px) {
  .shell {
    max-width: none;
    grid-template-columns: 92px minmax(0, 1fr) 300px;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .shell {
    max-width: 742px;
    grid-template-columns: 92px minmax(0, 1fr);
  }
}
.image-picker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 20px;
  cursor: pointer;
}
.image-picker:hover {
  background: var(--pale);
}
.image-picker span:first-child {
  font-size: 22px;
  line-height: 1;
}
.image-preview {
  position: relative;
  margin: 8px 0 14px;
  width: min(100%, 440px);
}
.image-preview img,
.post-image {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid var(--line);
}
.image-preview button {
  position: absolute;
  top: 9px;
  right: 9px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #10233dcc;
  color: #fff;
  font-size: 21px;
  line-height: 1;
}
.post-image {
  margin: 8px 0 18px;
}
.quote-image {
  display: block;
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 9px;
  margin-top: 10px;
}
.post-content + .post-image {
  margin-top: -8px;
}
@media (max-width: 600px) {
  .image-picker span:last-child {
    display: none;
  }
  .compose-footer {
    flex-wrap: wrap;
  }
  .post-image {
    max-height: 420px;
  }
  .left {
    transition: transform 0.24s ease;
  }
  .left.nav-hidden {
    transform: translateY(calc(100% + 2px));
    pointer-events: none;
  }
  .left:focus-within {
    transform: translateY(0);
    pointer-events: auto;
  }
}
@media (max-width: 600px) and (prefers-reduced-motion: reduce) {
  .left {
    transition: none;
  }
}
.poll-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 20px;
}
.poll-toggle:hover {
  background: var(--pale);
}
.poll-toggle span:first-child {
  font-size: 20px;
}
.poll-builder {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 13px;
  margin: 8px 0 14px;
  background: var(--pale);
}
.poll-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
}
.poll-head button {
  font-size: 22px;
  color: var(--muted);
}
.poll-builder > input {
  display: block;
  width: 100%;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  border-radius: 9px;
  padding: 10px 12px;
  margin-top: 8px;
}
.poll-results {
  margin: 8px 0 18px;
}
.poll-option {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 11px 12px;
  margin-top: 8px;
  border: 1px solid var(--line);
  border-radius: 9px;
  text-align: left;
}
.poll-option:disabled {
  cursor: default;
  opacity: 1;
}
.poll-fill {
  position: absolute;
  inset: 0 auto 0 0;
  background: color-mix(in srgb, var(--blue) 18%, transparent);
  z-index: 0;
}
.poll-option b,
.poll-option em {
  position: relative;
  z-index: 1;
  font-size: 13px;
}
.poll-option em {
  font-style: normal;
}
.poll-option.chosen {
  border-color: var(--blue);
}
.poll-results > small {
  display: block;
  margin-top: 9px;
  color: var(--muted);
  font-size: 11px;
}
@media (max-width: 600px) {
  .poll-toggle span:last-child {
    display: none;
  }
}
.poll-extra-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.poll-extra-row input {
  display: block;
  min-width: 0;
  flex: 1;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  border-radius: 9px;
  padding: 10px 12px;
  margin-top: 8px;
}
.poll-extra-row button {
  width: 34px;
  height: 34px;
  margin-top: 8px;
  border-radius: 50%;
  color: var(--muted);
  font-size: 20px;
}
.add-poll-option {
  display: block;
  margin-top: 10px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  padding: 7px;
}
.add-poll-option[hidden] {
  display: none;
}
.image-picker > span:last-child,
.poll-toggle > span:last-child {
  display: none;
}
.image-picker,
.poll-toggle {
  width: 40px;
  height: 40px;
  justify-content: center;
  padding: 0;
}
.image-picker svg,
.poll-toggle svg {
  width: 21px;
  height: 21px;
}
.image-picker span:first-child,
.poll-toggle span:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-preview {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
  width: min(100%, 440px);
}
.image-preview[hidden] {
  display: none;
}
.image-preview > div {
  position: relative;
}
.image-preview img {
  height: 160px;
  object-fit: cover;
}
.image-preview > div:only-child {
  grid-column: 1/-1;
}
.image-preview > div:only-child img {
  height: auto;
  max-height: 420px;
}

.audio-preview,
.post-audio {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 18px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--pale);
}
.audio-preview[hidden] {
  display: none;
}
.audio-preview audio,
.post-audio audio {
  width: min(100%, 360px);
  height: 34px;
}
.audio-preview button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 18px;
}
.record-toggle[aria-pressed="true"] {
  color: #e33a4f;
  background: #fff0f2;
  animation: record-pulse 1s ease-in-out infinite;
}
@keyframes record-pulse {
  50% {
    opacity: 0.55;
  }
}
.record-dialog form {
  width: min(88vw, 420px);
}
.record-stage {
  display: grid;
  justify-items: center;
  gap: 14px;
  padding: 24px 10px 28px;
}
.record-orb {
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  color: #d9e2f0;
  background: var(--pale);
  font-size: 30px;
}
.record-orb.active {
  color: #e33a4f;
  background: #fff0f2;
  animation: record-pulse 1s ease-in-out infinite;
}
.record-stage strong {
  font-size: 16px;
}
.record-stage time {
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.record-stage audio {
  width: 100%;
}
.record-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
}
.record-actions button {
  min-height: 44px;
  border: 1px solid var(--line);
  border-radius: 12px;
  font-weight: 700;
}
.record-actions button:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}
.record-start {
  color: #d92d44;
}
#discard-recording {
  color: var(--muted);
}
.quote-picker-list {
  display: grid;
  gap: 8px;
  max-height: min(60vh, 520px);
  overflow-y: auto;
  padding: 4px 2px;
}
.quote-source {
  width: 100%;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 12px;
  text-align: left;
  background: var(--surface);
}
.quote-source:hover {
  border-color: var(--blue);
  background: var(--pale);
}
.quote-source b {
  display: block;
  margin-bottom: 5px;
}
.quote-source p {
  margin: 0;
  color: var(--text);
  line-height: 1.45;
  white-space: pre-wrap;
}
.quote-source small {
  display: block;
  margin-top: 6px;
  color: var(--muted);
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3px;
  margin: 8px 0 18px;
  border-radius: 16px;
  overflow: hidden;
}
.media-grid img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.media-grid.media-count-1 {
  grid-template-columns: 1fr;
}
.media-grid.media-count-1 img {
  height: auto;
  max-height: 520px;
}
.media-grid.media-count-3 img:first-child {
  grid-row: span 2;
  height: 443px;
}
.quote-media {
  margin-bottom: 0;
  border-radius: 9px;
}
.quote-media img {
  height: 130px;
}
.quote-media.media-count-1 img {
  max-height: 260px;
}
@media (max-width: 600px) {
  .image-preview img {
    height: 120px;
  }
  .media-grid img {
    height: 170px;
  }
  .media-grid.media-count-3 img:first-child {
    height: 343px;
  }
}
.shared-brand-form { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.shared-brand-form small { grid-column: 1 / -1; }
.shared-brand-form input { min-width: 0; max-width: 100%; }
.creator-market .market-card h3 { overflow-wrap: anywhere; margin: 0; }
.creator-market .split-vote > small { display: block; line-height: 1.6; margin: 8px 0; }
.creator-market .market-card > small { display: block; line-height: 1.6; }
.creator-market .market-card button { white-space: normal; }
.creator-market button.danger { color: #c93636; border-color: color-mix(in srgb, #c93636 45%, var(--line)); }
.creator-market button.danger:hover { background: color-mix(in srgb, #c93636 8%, transparent); }
.large-holder-reports { margin: 20px 0; padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: var(--pale); }
.large-holder-reports h3 { margin: 0 0 4px; }
.large-holder-reports ol { list-style: none; padding: 0; margin: 14px 0 0; display: grid; gap: 10px; }
.large-holder-reports li { display: flex; justify-content: space-between; gap: 18px; padding: 12px 0; border-top: 1px solid var(--line); }
.large-holder-reports li > span:last-child { text-align: right; }
.large-holder-reports small { display: block; color: var(--muted); line-height: 1.45; }
.large-holder-reports .empty-report { color: var(--muted); }
@media (max-width: 560px) { .shared-brand-form { grid-template-columns: minmax(0, 1fr); } }
@media (max-width: 560px) { .large-holder-reports li { flex-direction: column; gap: 6px; } .large-holder-reports li > span:last-child { text-align: left; } }
.question-box { padding: 26px 22px 36px; }
.question-box > h2 { margin: 6px 0; }
.question-box > p { color: var(--muted); line-height: 1.6; }
.question-form, .question-card { border: 1px solid var(--line); border-radius: 18px; background: var(--surface); padding: 18px; }
.question-form { display: grid; gap: 13px; margin: 20px 0 26px; }
.question-form label:not(.question-identity) { display: grid; gap: 7px; font-weight: 700; }
.question-form select, .question-form textarea, .question-card textarea { width: 100%; box-sizing: border-box; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); color: var(--text); padding: 11px 13px; font: inherit; resize: vertical; }
.question-identity { display: flex; align-items: center; gap: 8px; color: var(--muted); }
.question-form .primary { justify-self: start; }

.relationships-panel { padding: 28px 24px 48px; }
.relationships-intro h2 { margin: 7px 0 8px; font-size: clamp(1.55rem, 4vw, 2.2rem); }
.relationships-intro p { margin: 0; color: var(--muted); line-height: 1.7; }
.relationship-hub { display: flex; align-items: center; gap: 18px; margin: 24px 0; padding: 20px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, var(--surface)), var(--surface)); }
.relationship-hub > div:last-child p { margin: 5px 0 0; color: var(--muted); font-size: .9rem; }
.relationship-me { width: 92px; min-width: 92px; aspect-ratio: 1; display: grid; place-content: center; text-align: center; border-radius: 50%; color: white; background: var(--accent); box-shadow: 0 10px 28px color-mix(in srgb, var(--accent) 30%, transparent); }
.relationship-me span, .relationship-me small { font-size: .72rem; }
.relationship-me b { font-size: 1.5rem; line-height: 1.1; }
.relationship-form { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 20px; border: 1px solid var(--line); border-radius: 20px; background: var(--surface); }
.relationship-form label { display: grid; gap: 7px; font-weight: 700; font-size: .9rem; }
.relationship-form input, .relationship-form select, .relationship-form textarea { width: 100%; box-sizing: border-box; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); color: var(--text); padding: 11px 13px; font: inherit; resize: vertical; }
.relationship-form input:focus, .relationship-form select:focus, .relationship-form textarea:focus { outline: 2px solid color-mix(in srgb, var(--accent) 32%, transparent); border-color: var(--accent); }
.relationship-note { grid-column: 1 / -1; }
.relationship-fictional { display: flex !important; grid-auto-flow: column; justify-content: start; align-items: center; font-weight: 600 !important; color: var(--muted); }
.relationship-fictional input { width: auto; accent-color: var(--accent); }
.relationship-form .primary { justify-self: end; }
.relationship-list { margin-top: 28px; }
.relationship-list-title { display: flex; align-items: center; gap: 9px; margin-bottom: 12px; }
.relationship-list-title h3 { margin: 0; }
.relationship-list-title span { min-width: 24px; padding: 2px 7px; border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); text-align: center; font-weight: 800; }
.relationship-card { display: flex; gap: 14px; padding: 16px; margin-bottom: 10px; border: 1px solid var(--line); border-radius: 17px; background: var(--surface); }
.relationship-avatar { width: 46px; height: 46px; flex: 0 0 46px; display: grid; place-items: center; border-radius: 50%; background: color-mix(in srgb, var(--accent) 16%, var(--surface)); color: var(--accent); font-size: 1.1rem; font-weight: 900; }
.relationship-card-body { min-width: 0; flex: 1; }
.relationship-card-head { display: flex; justify-content: space-between; gap: 12px; }
.relationship-card h3 { display: inline; margin: 0 8px 0 0; font-size: 1rem; }
.relationship-card p { margin: 9px 0 0; color: var(--muted); white-space: pre-wrap; line-height: 1.55; }
.relationship-kind, .relationship-virtual { display: inline-block; margin: 2px 5px 2px 0; padding: 3px 8px; border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); font-size: .73rem; font-weight: 800; }
.relationship-virtual { background: color-mix(in srgb, #8b5cf6 12%, var(--surface)); color: #7c3aed; }
.relationship-card-head button { width: 32px; height: 32px; border: 0; border-radius: 50%; background: transparent; color: var(--muted); font-size: 1.25rem; cursor: pointer; }
.relationship-card-head button:hover { background: color-mix(in srgb, #ef4444 10%, var(--surface)); color: #dc2626; }
@media (max-width: 620px) { .relationships-panel { padding: 22px 16px 90px; } .relationship-form { grid-template-columns: 1fr; padding: 16px; } .relationship-note { grid-column: auto; } .relationship-form .primary { justify-self: stretch; } .relationship-hub { align-items: flex-start; } }

.pwa-guide { margin-top: 20px; }
.pwa-guide-head { display: flex; gap: 16px; align-items: flex-start; }
.pwa-guide-head h2 { margin: 4px 0 7px; }
.pwa-guide-head p { margin: 0; line-height: 1.65; }
.pwa-guide-icon { width: 58px; height: 58px; flex: 0 0 58px; display: grid; place-items: center; border-radius: 16px; color: #fff; background: var(--blue); font-size: 1.7rem; box-shadow: 0 10px 24px color-mix(in srgb, var(--blue) 28%, transparent); }
.pwa-install-button { margin-top: 18px; padding: 11px 20px; }
.pwa-installed, .pwa-manual { margin-top: 18px; padding: 14px 16px; border-radius: 14px; background: color-mix(in srgb, var(--blue) 9%, var(--surface)); }
.pwa-installed { display: flex; align-items: center; gap: 10px; color: var(--blue); }
.pwa-installed span { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--blue); }
.pwa-manual p { margin: 6px 0 0; color: var(--muted); line-height: 1.65; }
@media (max-width: 620px) { .pwa-guide-head { gap: 12px; } .pwa-guide-icon { width: 50px; height: 50px; flex-basis: 50px; } .pwa-install-button { width: 100%; } }

.help-center { padding: 28px 24px 50px; }
.help-hero { padding: 25px; border-radius: 22px; color: #fff; background: linear-gradient(135deg, #1265ed, #5d3bdb); }
.help-hero h2 { margin: 7px 0 6px; font-size: clamp(1.55rem, 4vw, 2.2rem); }
.help-hero p { margin: 0; color: rgba(255,255,255,.85); line-height: 1.6; }
.help-search { display: flex; gap: 9px; margin-top: 18px; }
.help-search input { min-width: 0; flex: 1; border: 0; border-radius: 12px; padding: 12px 14px; font: inherit; }
.help-search button { border: 0; border-radius: 12px; padding: 0 16px; color: var(--blue); background: #fff; font-weight: 800; }
.help-results { margin-top: 25px; }
.help-result-head { display: flex; align-items: center; gap: 9px; margin-bottom: 12px; }
.help-result-head h3 { margin: 0; }
.help-result-head span { min-width: 25px; padding: 2px 7px; border-radius: 999px; color: var(--blue); background: color-mix(in srgb, var(--blue) 12%, var(--surface)); text-align: center; font-weight: 800; }
.help-item { margin-bottom: 9px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); overflow: hidden; }
.help-item summary { display: flex; align-items: center; gap: 11px; padding: 16px; cursor: pointer; list-style: none; }
.help-item summary::-webkit-details-marker { display: none; }
.help-item summary b { flex: 1; line-height: 1.45; }
.help-item summary > span:last-child { color: var(--muted); font-size: 1.25rem; transition: transform .2s ease; }
.help-item[open] summary > span:last-child { transform: rotate(45deg); }
.help-category { flex: 0 0 auto; padding: 3px 8px; border-radius: 999px; color: var(--blue); background: color-mix(in srgb, var(--blue) 12%, var(--surface)); font-size: .72rem; font-weight: 800; }
.help-item p { margin: 0; padding: 0 16px 17px; color: var(--muted); line-height: 1.7; }
@media (max-width: 620px) { .help-center { padding: 22px 16px 90px; } .help-hero { padding: 20px; } .help-search { flex-direction: column; } .help-search button { min-height: 44px; } .help-item summary { align-items: flex-start; } }

.youtube-toggle > span:first-child { color: #ff0033; }
.youtube-preview { position: relative; margin: 10px 0; }
.youtube-preview button { position: absolute; z-index: 2; top: 8px; right: 8px; width: 32px; height: 32px; border-radius: 50%; color: #fff; background: rgba(0,0,0,.72); }
.youtube-embed { position: relative; width: 100%; aspect-ratio: 16 / 9; margin: 12px 0; border-radius: 15px; overflow: hidden; background: #000; }
.youtube-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.youtube-dialog { width: min(480px, calc(100% - 28px)); border: 0; border-radius: 20px; padding: 0; color: var(--text); background: var(--surface); }
.youtube-dialog form { padding: 21px; }
.youtube-dialog p { color: var(--muted); line-height: 1.6; }
.youtube-dialog input { width: 100%; border: 1px solid var(--line); border-radius: 12px; padding: 12px 13px; color: var(--text); background: var(--bg); font: inherit; }
.youtube-dialog .primary { width: 100%; margin-top: 10px; }
.youtube-error { min-height: 1.4em; margin: 7px 0 0 !important; color: #dc2626 !important; font-size: .875rem; }
.question-columns { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
.question-columns section { display: grid; align-content: start; gap: 12px; }
.question-columns h3 { margin: 0; }
.question-card small { color: var(--muted); }
.question-card > p { white-space: pre-wrap; line-height: 1.55; }
.question-card form { display: grid; gap: 8px; }
.question-answer { border-top: 1px solid var(--line); padding-top: 10px; }
.post-question { margin: 10px 0 12px; padding: 14px; border-left: 4px solid var(--blue); border-radius: 4px 14px 14px 4px; background: var(--pale); }
.post-question small,.post-question span { color: var(--muted); }
.post-question p { margin: 6px 0; line-height: 1.5; white-space: pre-wrap; }
@media (max-width: 700px) { .question-columns { grid-template-columns: 1fr; } .question-box { padding: 20px 15px 30px; } }
.game-room { padding: 26px 22px 38px; }
.game-room > h2 { margin: 6px 0; }
.game-room > p { color: var(--muted); line-height: 1.6; }
.game-cards { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin-top: 24px; }
.game-cards > article { display: grid; gap: 8px; min-height: 190px; padding: 22px; border: 1px solid var(--line); border-radius: 22px; background: var(--surface); color: var(--text); text-align: left; }
.game-cards > article:hover { border-color: var(--blue); transform: translateY(-2px); }
.game-cards > article > div { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
.game-cards > article > div button:first-child { background: var(--blue); color: white; border-color: var(--blue); }
.game-cards .difficulty-buttons { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); width: 100%; }
.game-cards .difficulty-buttons button { padding-inline: 8px; }
.game-cards b { font-size: 1.25rem; }
.game-cards small { color: var(--muted); line-height: 1.5; }
.online-lobby { margin: 22px 0 26px; padding: 18px; border: 1px solid var(--line); border-radius: 20px; background: var(--surface); }
.online-lobby-head,.online-lobby-head > div,.online-status { display: flex; align-items: center; gap: 10px; }
.online-lobby-head { justify-content: space-between; margin-bottom: 14px; }
.live-dot { width: 9px; height: 9px; border-radius: 50%; background: #1688f4; box-shadow: 0 0 0 4px color-mix(in srgb,#1688f4 18%,transparent); }
.online-create,.online-join-code { display: grid; grid-template-columns: 1fr auto 1.3fr auto; gap: 8px; margin-top: 9px; }
.online-create select,.online-create input,.online-join-code input { min-width: 0; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); color: var(--text); font: inherit; }
.online-create label { display: flex; align-items: center; gap: 7px; padding: 0 8px; white-space: nowrap; }
.online-room-list { display: grid; gap: 7px; margin-top: 14px; }
.online-room-row { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 11px 13px; text-align: left; }
.online-room-row span { display: flex; align-items: center; gap: 10px; }.online-room-row small { color: var(--muted); }.online-room-row em { color: var(--blue); font-style: normal; font-size: .88rem; }
.online-empty { margin: 14px 2px 0; color: var(--muted); }
.online-status { flex-wrap: wrap; margin: 14px 0; padding: 10px 13px; border: 1px solid color-mix(in srgb,var(--blue) 35%,var(--line)); border-radius: 14px; background: color-mix(in srgb,var(--blue) 7%,var(--surface)); }
.online-status code { padding: 3px 7px; border-radius: 7px; background: var(--bg); font-weight: 700; letter-spacing: .08em; }
.tetris-mark { background: #7c3aed; color: #fff; }
.tetris-wrap { display: flex; justify-content: center; align-items: flex-start; gap: 24px; margin: 22px auto; }
.tetris-board { display: grid; grid-template-columns: repeat(10, 1fr); width: min(100%, 320px); aspect-ratio: 1/2; padding: 5px; gap: 2px; border: 2px solid var(--line); border-radius: 12px; background: #101624; box-shadow: 0 14px 36px #0003; }
.t-cell { display: block; border-radius: 3px; background: #1c2638; }
.t-cell.c1 { background: #22d3ee; }.t-cell.c2 { background: #facc15; }.t-cell.c3 { background: #a78bfa; }.t-cell.c4 { background: #fb923c; }.t-cell.c5 { background: #60a5fa; }.t-cell.c6 { background: #4ade80; }
.tetris-help { display: grid; gap: 9px; min-width: 150px; padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); }
.tetris-help span { color: var(--muted); font-size: .9rem; }
.tetris-controls { display: grid; grid-template-columns: repeat(5, 52px); justify-content: center; gap: 8px; margin: 14px 0; }
.tetris-controls button { min-height: 48px; font-size: 1.3rem; }
.blast-mark { color: #fff; background: linear-gradient(135deg,#0ea5e9,#7c3aed); }
.blast-board { display: grid; grid-template-columns: repeat(8,1fr); width: min(100%,520px); aspect-ratio: 1; gap: 5px; padding: 9px; border-radius: 18px; background: #151d31; box-shadow: 0 16px 38px #00132b30; }
.blast-board button { min-width: 0; padding: 0; border: 0; border-radius: 7px; background: #25314c; box-shadow: inset 0 1px 1px #ffffff10; }
.blast-board button.c1,.blast-piece .c1 { background: #22d3ee; }.blast-board button.c2,.blast-piece .c2 { background: #facc15; }.blast-board button.c3,.blast-piece .c3 { background: #a78bfa; }.blast-board button.c4,.blast-piece .c4 { background: #fb923c; }.blast-board button.c5,.blast-piece .c5 { background: #60a5fa; }.blast-board button.c6,.blast-piece .c6 { background: #4ade80; }
.blast-tray { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; width: min(100%,520px); margin-top: 16px; }
.blast-piece { display: grid; place-items: center; min-height: 118px; padding: 12px; border: 2px solid transparent; background: var(--surface); }
.blast-piece.selected { border-color: var(--blue); background: color-mix(in srgb,var(--blue) 9%,var(--surface)); transform: translateY(-4px); }.blast-piece.used { opacity: .25; }
.blast-piece > span { display: grid; grid-template-columns: repeat(var(--cols),20px); gap: 3px; }.blast-piece i { display: block; width: 20px; height: 20px; border-radius: 4px; }
.rps-mark { background: #ff6b35; color: #fff; }
.rps-arena { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 22px; width: min(100%,580px); margin: 26px 0 18px; padding: 28px; border: 1px solid var(--line); border-radius: 24px; background: var(--surface); }
.rps-arena > div { display: grid; place-items: center; gap: 8px; }.rps-arena small { color: var(--muted); }.rps-arena strong { font-size: clamp(3.6rem,10vw,6rem); line-height: 1; }.rps-arena > b { color: var(--muted); font-size: 1.25rem; }
.rps-thinking { animation: rpsShake .22s ease-in-out infinite alternate; }.rps-streak { width: min(100%,580px); color: #ef6c00; font-weight: 800; text-align: center; }
.rps-buttons { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; width: min(100%,580px); }.rps-buttons button { display: grid; place-items: center; gap: 7px; min-height: 98px; font-weight: 750; }.rps-buttons span { font-size: 2rem; }
@keyframes rpsShake { from { transform: rotate(-9deg) translateY(-2px); } to { transform: rotate(9deg) translateY(2px); } }
.go-mark { background: #d9a75b; color: #151515; box-shadow: inset -22px 0 0 #f8f8f8; }
.go-board { display: grid; grid-template-columns: repeat(9,1fr); width: min(100%,570px); aspect-ratio: 1; padding: 18px; background: #d9a75b; border: 3px solid #83531e; border-radius: 8px; box-shadow: 0 16px 38px #2d190d2b; }
.go-board button { position: relative; display: grid; place-items: center; min-width: 0; padding: 0; border: 0; border-radius: 0; background: linear-gradient(#80531f,#80531f) center/100% 1px no-repeat,linear-gradient(90deg,#80531f,#80531f) center/1px 100% no-repeat; }
.go-board button:hover { background-color: #e8bd75; }.go-stone { position: relative; z-index: 1; display: block; width: 82%; aspect-ratio: 1; border-radius: 50%; box-shadow: inset -5px -6px 8px #0005,0 2px 4px #0006; }.go-stone.black { background: #17191d; }.go-stone.white { background: #f5f5f3; box-shadow: inset -4px -5px 7px #aaa8,0 2px 4px #0005; }
.go-note { width: min(100%,570px); color: var(--muted); font-size: .9rem; line-height: 1.5; }
.chess-mark { background: linear-gradient(135deg,#313744,#111827); color: #fff; }
.chess-board { display: grid; grid-template-columns: repeat(8,1fr); width: min(100%,570px); aspect-ratio: 1; border: 4px solid #293241; border-radius: 8px; overflow: hidden; box-shadow: 0 16px 38px #10182730; }
.chess-board button { display: grid; place-items: center; min-width: 0; padding: 0; border: 0; border-radius: 0; }.chess-board .light-square { background: #e7edf3; }.chess-board .dark-square { background: #718096; }.chess-board button.selected { box-shadow: inset 0 0 0 4px #ffb703; }
.chess-piece { font-family: Georgia,serif; font-size: clamp(1.7rem,7vw,3.55rem); line-height: 1; }.white-piece { color: #fff; text-shadow: 0 1px 0 #111,1px 0 0 #111,0 -1px 0 #111,-1px 0 0 #111,0 3px 5px #0005; }.black-piece { color: #15181d; text-shadow: 0 2px 2px #fff5; }
.chess-note { width: min(100%,570px); color: var(--muted); font-size: .9rem; line-height: 1.5; }
.check-panel { padding: 26px 22px 40px; }.check-panel h2 { margin: 6px 0 16px; }.medical-note { padding: 16px 18px; border: 1px solid #d79b3266; border-radius: 16px; background: #ffb74d16; }.medical-note p,.check-privacy { color: var(--muted); line-height: 1.6; }.medical-note p { margin: 6px 0 0; }
#adhd-check-form { display: grid; gap: 14px; margin-top: 20px; }#adhd-check-form fieldset { padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); }#adhd-check-form legend { display: flex; align-items: center; gap: 9px; padding: 0 5px; font-weight: 700; line-height: 1.5; }#adhd-check-form legend > span { display: grid; place-items: center; flex: 0 0 27px; height: 27px; border-radius: 50%; background: var(--blue); color: #fff; font-size: .8rem; }#adhd-check-form fieldset > div { display: grid; grid-template-columns: repeat(4,1fr); gap: 7px; margin-top: 12px; }#adhd-check-form label { cursor: pointer; }#adhd-check-form label input { position: absolute; opacity: 0; pointer-events: none; }#adhd-check-form label span { display: grid; place-items: center; min-height: 46px; padding: 7px; border: 1px solid var(--line); border-radius: 11px; color: var(--muted); text-align: center; font-size: .86rem; }#adhd-check-form label input:checked + span { border-color: var(--blue); background: color-mix(in srgb,var(--blue) 10%,var(--surface)); color: var(--blue); font-weight: 700; }#adhd-check-form > button { min-height: 48px; }
.check-result { margin-top: 18px; padding: 18px; border: 1px solid color-mix(in srgb,var(--blue) 40%,var(--line)); border-radius: 16px; background: color-mix(in srgb,var(--blue) 7%,var(--surface)); }.check-result b { font-size: 1.08rem; }.check-result p { margin: 8px 0 0; line-height: 1.55; }.medical-source { display: inline-block; margin-top: 4px; color: var(--blue); font-weight: 700; }
.search-safety-alert { display: grid; grid-template-columns: auto 1fr; gap: 14px; margin: 18px 0; padding: 18px; border: 1px solid; border-radius: 18px; color: var(--text); }.search-safety-alert > span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: #fff; font-weight: 900; }.search-safety-alert b { display: block; font-size: 1.03rem; }.search-safety-alert p { margin: 7px 0 10px; line-height: 1.6; }.search-safety-alert a { color: var(--blue); font-weight: 800; text-decoration: underline; text-underline-offset: 3px; }.crime-alert { border-color: #d66a3266; background: #f59e0b16; }.crime-alert > span { background: #d66a32; }.consumer-alert { border-color: #2878c866; background: #3b82f616; }.consumer-alert > span { background: #2878c8; }.crisis-alert { border-color: #cb3d6266; background: #ec489916; }.crisis-alert > span { background: #cb3d62; }
@media (max-width: 600px) { #adhd-check-form fieldset > div { grid-template-columns: 1fr 1fr; }.check-panel { padding: 20px 12px 32px; } }
.game-mark { display: grid; place-items: center; width: 72px; height: 72px; border-radius: 20px; font-size: 1.5rem; font-weight: 800; }
.othello-mark { background: #08764d; color: white; }.shogi-mark { background: #e7b86b; color: #4a2c10; }
.game-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 20px 0 14px; flex-wrap: wrap; }
.game-toolbar strong { font-size: 1.05rem; }.game-toolbar span { color: var(--muted); }
.othello-board { width: min(100%,560px); aspect-ratio: 1; display: grid; grid-template-columns: repeat(8,1fr); padding: 5px; background: #075f3f; border: 3px solid #063d2b; border-radius: 10px; box-shadow: 0 16px 38px #001d1426; }
.othello-board button { position: relative; display: grid; place-items: center; border: 1px solid #064f35; border-radius: 0; background: #128359; padding: 0; }
.othello-board button.legal::after { content: ''; width: 14%; aspect-ratio: 1; border-radius: 50%; background: #dff8edaa; }
.disc { width: 78%; aspect-ratio: 1; border-radius: 50%; box-shadow: inset 0 -4px 8px #0005,0 2px 4px #0005; }.disc.black { background: #151719; }.disc.white { background: #f8fafb; }
.shogi-board { width: min(100%,570px); aspect-ratio: 1; display: grid; grid-template-columns: repeat(9,1fr); background: #dcae62; border: 3px solid #704716; }
.shogi-board button { display: grid; place-items: center; min-width: 0; border: 1px solid #8b5d25; border-radius: 0; background: #e8bd77; padding: 0; color: #2c1b0b; font-size: clamp(.72rem,2.6vw,1.25rem); font-weight: 800; }
.shogi-board button.selected { background: #ffe2a9; box-shadow: inset 0 0 0 3px var(--blue); }.shogi-board .enemy { display: block; transform: rotate(180deg); }
.shogi-hand { width: min(100%,570px); min-height: 42px; display: flex; align-items: center; gap: 7px; flex-wrap: wrap; padding: 8px 0; }.shogi-hand b { margin-right: 7px; }.shogi-hand button.selected { background: var(--blue); color: white; }
.game-actions { display: flex; gap: 10px; margin-top: 16px; }.game-actions .danger { color: #c93636; border-color: #c9363666; }
@media (max-width: 600px) { .game-room { padding: 20px 12px 30px; }.game-cards { grid-template-columns: 1fr; }.game-cards > article { min-height: 145px; }.game-toolbar { align-items: flex-start; flex-direction: column; }.online-create,.online-join-code { grid-template-columns: 1fr 1fr; }.online-create input { grid-column: 1/-1; }.tetris-wrap { display: block; }.tetris-board { width: min(78vw,300px); margin: auto; }.tetris-help { display: none; }.tetris-controls { grid-template-columns: repeat(5, minmax(44px,1fr)); }.blast-board { gap: 3px; padding: 6px; }.blast-piece { min-height: 90px; padding: 8px; }.blast-piece > span { grid-template-columns: repeat(var(--cols),15px); }.blast-piece i { width: 15px; height: 15px; } }

.prefecture-guides { padding: 0 24px; }
.prefecture-guide { margin: 16px 0; padding: 20px; border: 1px solid var(--line); border-left: 4px solid var(--blue); border-radius: 16px; color: var(--ink); }
.prefecture-guide small { color: var(--blue); font-size: .875rem; font-weight: 700; }
.prefecture-guide h2 { margin: 8px 0; font-size: 1.5rem; }
.prefecture-guide p { margin: 8px 0; line-height: 1.7; font-size: 1rem; }
.prefecture-guide a { display: inline-block; margin-top: 8px; padding: 10px 0; color: var(--blue); font-weight: 700; text-underline-offset: 4px; }
@media (max-width: 620px) { .prefecture-guides { padding: 0 16px; } }
