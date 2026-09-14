import { env } from "cloudflare:workers";

const allowedImages = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);
const allowedAudio = new Set([
  "audio/mpeg",
  "audio/mp4",
  "audio/ogg",
  "audio/wav",
  "audio/webm",
  "audio/x-m4a",
  "audio/aac",
]);
const allowedDocumentExtensions = new Set([
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv", "rtf", "odt",
]);

export async function POST(request: Request) {
  if (!env.BUCKET)
    return Response.json({ error: "storage_unavailable" }, { status: 503 });
  const form = await request.formData();
  const images = form
    .getAll("images")
    .filter((value): value is File => value instanceof File);
  const audio = form.get("audio");
  const audioFile = audio instanceof File ? audio : null;
  const documents = form
    .getAll("documents")
    .filter((value): value is File => value instanceof File);
  if (
    (!images.length && !audioFile && !documents.length) ||
    images.length > 4 ||
    documents.length > 4 ||
    (audioFile && (images.length || documents.length))
  )
    return Response.json({ error: "invalid_count" }, { status: 400 });
  if (
    images.some(
      (file) => !allowedImages.has(file.type) || file.size > 5 * 1024 * 1024,
    )
  )
    return Response.json({ error: "invalid_image" }, { status: 400 });
  if (
    audioFile &&
    (!allowedAudio.has(audioFile.type) || audioFile.size > 15 * 1024 * 1024)
  )
    return Response.json({ error: "invalid_audio" }, { status: 400 });
  if (documents.some((file) => {
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    return !allowedDocumentExtensions.has(extension) || file.size > 10 * 1024 * 1024;
  })) return Response.json({ error: "invalid_document" }, { status: 400 });
  const userId =
    request.headers.get("oai-authenticated-user-id") ?? "local-preview";
  const urls: string[] = [];
  for (const file of images) {
    const key = `${userId}-${crypto.randomUUID()}`;
    await env.BUCKET.put(key, file.stream(), {
      httpMetadata: { contentType: file.type },
    });
    urls.push(`/api/media/${key}`);
  }
  if (audioFile) {
    const key = `${userId}-${crypto.randomUUID()}`;
    await env.BUCKET.put(key, audioFile.stream(), {
      httpMetadata: { contentType: audioFile.type },
    });
    return Response.json({ url: `/api/media/${key}` });
  }
  const savedDocuments: Array<{ url: string; name: string; type: string; size: number }> = [];
  for (const file of documents) {
    const key = `${userId}-${crypto.randomUUID()}`;
    await env.BUCKET.put(key, file.stream(), {
      httpMetadata: { contentType: file.type || "application/octet-stream" },
    });
    savedDocuments.push({ url: `/api/media/${key}`, name: file.name.slice(0, 120), type: file.type, size: file.size });
  }
  return Response.json({ urls, documents: savedDocuments });
}
