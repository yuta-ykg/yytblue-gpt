import { env } from "cloudflare:workers";

export const dynamic = "force-dynamic";

function getUserId(request: Request) {
  return request.headers.get("oai-authenticated-user-id") ?? "local-preview";
}

export async function GET(request: Request) {
  if (!env.DB) return Response.json({ error: "storage_unavailable" }, { status: 503 });
  const row = await env.DB.prepare("SELECT data FROM app_state WHERE user_id = ?")
    .bind(getUserId(request)).first<{ data: string }>();
  return Response.json({ state: row ? JSON.parse(row.data) : null });
}

export async function PUT(request: Request) {
  if (!env.DB) return Response.json({ error: "storage_unavailable" }, { status: 503 });
  const state = await request.json();
  // Preserve the old personal simulation as an archive, never as shared authority.
  const previous = await env.DB.prepare("SELECT data FROM app_state WHERE user_id = ?")
    .bind(getUserId(request)).first<{ data: string }>();
  const saved = previous ? JSON.parse(previous.data) : null;
  if (saved?.creatorMarket) state.creatorMarket = saved.creatorMarket;
  else delete state.creatorMarket;
  const data = JSON.stringify(state);
  if (data.length > 750_000) return Response.json({ error: "state_too_large" }, { status: 413 });
  await env.DB.prepare(
    "INSERT INTO app_state (user_id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at"
  ).bind(getUserId(request), data, Date.now()).run();
  return Response.json({ saved: true });
}
