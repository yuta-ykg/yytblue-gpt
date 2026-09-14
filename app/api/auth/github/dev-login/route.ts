import { createSession, sessionCookie } from "../session";

export async function POST(request: Request) {
  const hostname = new URL(request.url).hostname;
  if (hostname !== "localhost" && hostname !== "127.0.0.1")
    return Response.json({ error: "not_available" }, { status: 403 });
  const session = await createSession({ id: 0, login: "local-developer", name: "Local Developer", avatarUrl: "" });
  return Response.json({ success: true }, { headers: { "set-cookie": sessionCookie(session) } });
}
