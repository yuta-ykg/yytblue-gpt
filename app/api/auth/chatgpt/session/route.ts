function decodeFullName(request: Request) {
  const value = request.headers.get("oai-authenticated-user-full-name");
  if (!value) return null;
  try {
    return request.headers.get("oai-authenticated-user-full-name-encoding") === "percent-encoded-utf-8"
      ? decodeURIComponent(value)
      : value;
  } catch { return value; }
}

export async function GET(request: Request) {
  const id = request.headers.get("oai-authenticated-user-id");
  const email = request.headers.get("oai-authenticated-user-email");
  return Response.json({
    user: id ? { id, email, name: decodeFullName(request) || email || "ChatGPT User" } : null,
  }, { headers: { "cache-control": "no-store" } });
}
