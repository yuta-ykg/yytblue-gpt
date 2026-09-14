import { sessionCookie } from "../session";
export async function POST() {
  return Response.json({ success: true }, { headers: { "set-cookie": sessionCookie("", 0) } });
}
