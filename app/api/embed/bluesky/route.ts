export const dynamic = "force-dynamic";

function validBlueskyPost(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "bsky.app") return null;
    const match = url.pathname.match(/^\/profile\/([^/]+)\/post\/([A-Za-z0-9]+)(?:\/|$)/);
    if (!match) return null;
    const actor = decodeURIComponent(match[1]);
    if (!/^(?:did:[a-z0-9:._-]+|[A-Za-z0-9][A-Za-z0-9.-]{0,252})$/.test(actor)) return null;
    return `https://bsky.app/profile/${encodeURIComponent(actor)}/post/${match[2]}`;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const postUrl = validBlueskyPost(new URL(request.url).searchParams.get("url") || "");
  if (!postUrl) return new Response("Invalid Bluesky post URL", { status: 400 });

  const endpoint = new URL("https://embed.bsky.app/oembed");
  endpoint.searchParams.set("url", postUrl);
  endpoint.searchParams.set("maxwidth", "600");
  try {
    const response = await fetch(endpoint, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error("oEmbed request failed");
    const data = await response.json<{ html?: string }>();
    if (!data.html || !data.html.includes("class=\"bluesky-embed\"") || !data.html.includes("https://embed.bsky.app/static/embed.js")) throw new Error("Invalid oEmbed response");
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;background:transparent;font-family:system-ui,sans-serif}blockquote{margin:0!important}</style></head><body>${data.html}</body></html>`;
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "content-security-policy": "default-src 'none'; script-src https://embed.bsky.app; style-src 'unsafe-inline'; img-src https: data:; connect-src https://public.api.bsky.app https://bsky.social https://*.bsky.network; frame-src https:; font-src https:; frame-ancestors 'self'; base-uri 'none'; form-action 'none'",
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    const fallback = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;font:15px system-ui;color:#536471}a{display:block;padding:24px;border:1px solid #cfd9de;border-radius:14px;color:#0878fa;text-decoration:none}</style></head><body><a href="${postUrl}" target="_blank" rel="noreferrer">View this post on Bluesky</a></body></html>`;
    return new Response(fallback, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'self'; base-uri 'none'" } });
  }
}
