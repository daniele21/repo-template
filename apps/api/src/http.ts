export interface JsonResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

export interface HttpRequestLike extends AsyncIterable<Buffer | string> {
  method?: string;
  url?: string;
}

export async function parseJsonBody(request: AsyncIterable<Buffer | string>): Promise<unknown> {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return JSON.parse(raw);
}

export function createJsonResponse(statusCode: number, payload: unknown): JsonResponse {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload, null, 2)
  };
}

export function notFoundResponse(): JsonResponse {
  return createJsonResponse(404, { error: "Not found" });
}
