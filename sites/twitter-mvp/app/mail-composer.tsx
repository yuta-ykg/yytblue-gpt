"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type TokenResponse = { access_token?: string; error?: string };
type GoogleTokenClient = { requestAccessToken: () => void };
declare global {
  interface Window {
    google?: { accounts: { oauth2: { initTokenClient: (options: {
      client_id: string;
      scope: string;
      callback: (response: TokenResponse) => void;
      error_callback?: (error: { type?: string }) => void;
    }) => GoogleTokenClient } } };
  }
}

const CLIENT_ID_KEY = "twitter-mvp-gmail-client-id";
const GMAIL_SCOPE = "https://www.googleapis.com/auth/gmail.send";

function base64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(binary);
}

function rawMessage(to: string, subject: string, body: string): string {
  const encoder = new TextEncoder();
  const encodedSubject = `=?UTF-8?B?${base64(encoder.encode(subject.replace(/[\r\n]/g, " ")))}?=`;
  const encodedBody = base64(encoder.encode(body.replace(/\r\n?/g, "\n"))).replace(/.{1,76}/g, "$&\r\n");
  const message = `To: ${to}\r\nSubject: ${encodedSubject}\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n${encodedBody}`;
  return base64(encoder.encode(message)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function MailComposer({ clientId = "", initialSubject = "", initialBody = "", inline = false, label = "メールで共有" }: {
  clientId?: string; initialSubject?: string; initialBody?: string; inline?: boolean; label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [oauthClientId, setOauthClientId] = useState(clientId);
  const [settingsValue, setSettingsValue] = useState("");
  const [ready, setReady] = useState(false);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [body, setBody] = useState(initialBody);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [siteOrigin, setSiteOrigin] = useState("このサイトのURL");

  useEffect(() => {
    setSiteOrigin(window.location.origin);
    const saved = localStorage.getItem(CLIENT_ID_KEY) || "";
    if (!clientId && saved) setOauthClientId(saved);
    setSettingsValue(saved);
  }, [clientId]);

  useEffect(() => {
    if (!(inline || open) || !oauthClientId) return;
    if (window.google?.accounts.oauth2) { setReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => setReady(!!window.google?.accounts.oauth2);
    script.onerror = () => setMessage("Googleとの接続を読み込めませんでした。再度お試しください。");
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [inline, open, oauthClientId]);

  function saveSettings() {
    const value = settingsValue.trim();
    if (!/^[\w.-]+\.apps\.googleusercontent\.com$/.test(value)) {
      setMessage("Webアプリ用の Google OAuth クライアントIDを入力してください。");
      return;
    }
    localStorage.setItem(CLIENT_ID_KEY, value);
    setOauthClientId(value);
    setMessage("");
  }

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (sending) return;
    const recipient = to.trim();
    if (!/^[^\s@,<>\r\n]+@[^\s@,<>\r\n]+\.[^\s@,<>\r\n]+$/.test(recipient)) { setMessage("宛先のメールアドレスを確認してください。"); return; }
    if (!subject.trim() || !body.trim()) { setMessage("件名と本文を入力してください。"); return; }
    if (!oauthClientId || !window.google?.accounts.oauth2) { setMessage("Gmailの接続設定を確認してください。"); return; }
    setSending(true);
    try {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: oauthClientId,
        scope: GMAIL_SCOPE,
        callback: async (response) => {
          if (!response.access_token) { setMessage("Googleアカウントの許可を確認してください。"); setSending(false); return; }
          try {
            const raw = rawMessage(recipient, subject.trim(), body);
            const result = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
              method: "POST",
              headers: { Authorization: `Bearer ${response.access_token}`, "Content-Type": "application/json" },
              body: JSON.stringify({ raw }),
            });
            if (!result.ok) throw new Error(`Gmailからエラーが返されました (${result.status})。アカウントと送信権限を確認してください。`);
            setSent(true);
            setMessage("送信しました。");
          } catch (error) {
            setMessage(error instanceof Error ? error.message : "送信できませんでした。もう一度お試しください。");
          } finally { setSending(false); }
        },
        error_callback: () => { setMessage("Googleの認証が完了しませんでした。"); setSending(false); },
      });
      client.requestAccessToken();
    } catch {
      setMessage("Googleの認証を開始できませんでした。");
      setSending(false);
    }
  }

  const content = <div className="mail-compose-panel">
    {!inline && <DialogHeader><DialogTitle>メールを作成</DialogTitle></DialogHeader>}
    {sent ? <div className="mail-success" role="status"><strong>送信しました</strong><p>メールはGmailから送信されました。</p><button type="button" onClick={() => { setSent(false); setTo(""); setSubject(""); setBody(""); setMessage(""); }}>別のメールを作成</button></div> : <>
      {!oauthClientId && <div className="mail-setup"><strong>Gmailの接続設定</strong><p>Google Cloud の Webアプリ用 OAuth クライアントIDを登録してください。承認済みの JavaScript 生成元には <code>{siteOrigin}</code> を追加し、Gmail APIを有効にします。<a href="https://developers.google.com/workspace/gmail/api/quickstart/js" target="_blank" rel="noopener noreferrer">設定方法</a></p><div className="mail-setup-row"><input aria-label="Google OAuth クライアントID" value={settingsValue} onChange={e => setSettingsValue(e.target.value)} placeholder="xxxx.apps.googleusercontent.com"/><button type="button" onClick={saveSettings}>設定</button></div></div>}
      {oauthClientId && !clientId && <button type="button" className="mail-settings-change" onClick={() => { setOauthClientId(""); setReady(false); }}>Gmailの設定を変更</button>}
      <form className="mail-form" onSubmit={send}>
        <label>宛先<input type="email" value={to} onChange={e=>setTo(e.target.value)} required placeholder="name@example.com" autoComplete="email"/></label>
        <label>件名<input value={subject} onChange={e=>setSubject(e.target.value)} required maxLength={200}/></label>
        <label>本文<textarea value={body} onChange={e=>setBody(e.target.value)} required rows={9} maxLength={100000}/></label>
        <div className="mail-form-footer"><span>送信前に宛先と本文を確認してください。</span><button type="submit" disabled={!oauthClientId || !ready || sending}><Send size={17}/>{sending ? "送信中…" : "Gmailから送信"}</button></div>
      </form>
    </>}
    {message && <p className={sent ? "mail-feedback success" : "mail-feedback"} role="status">{message}</p>}
  </div>;

  if (inline) return <section className="mail-page"><h2>メールを作成</h2>{content}</section>;
  return <><button className="gmail-share" type="button" onClick={() => { setOpen(true); setMessage(""); }}><Mail size={17}/>{label}</button><Dialog open={open} onOpenChange={setOpen}><DialogContent className="mail-dialog">{content}</DialogContent></Dialog></>;
}
