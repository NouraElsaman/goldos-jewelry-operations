import { ServiceError } from "../types";

/**
 * Thin transport used by the future FastAPI provider.
 * No provider-specific SDK, no vendor lock-in: plain fetch + JWT bearer.
 */

export type TokenProvider = () => string | null | Promise<string | null>;

let tokenProvider: TokenProvider = () => null;

/** Wire the auth layer's token getter once, at app bootstrap. */
export function setTokenProvider(provider: TokenProvider) {
  tokenProvider = provider;
}

export const apiBaseUrl: string =
  (import.meta.env["VITE_API_URL"] as string | undefined)?.replace(/\/$/, "") ??
  "/api";

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  query?: Record<string, unknown> | undefined;
  signal?: AbortSignal | undefined;
};

function buildUrl(path: string, query?: Record<string, unknown> | undefined) {
  const url = `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  if (!query) return url;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null || value === "") continue;
    params.set(key, String(value));
  }
  const qs = params.toString();
  return qs ? `${url}?${qs}` : url;
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const token = await tokenProvider();
  const headers: Record<string, string> = { Accept: "application/json" };
  if (options.body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(buildUrl(path, options.query), {
    method: options.method ?? "GET",
    headers,
    ...(options.body !== undefined
      ? { body: JSON.stringify(options.body) }
      : {}),
    ...(options.signal ? { signal: options.signal } : {}),
  });

  if (!response.ok) {
    let details: unknown = null;
    try {
      details = await response.json();
    } catch {
      details = await response.text().catch(() => null);
    }
    throw new ServiceError(`Request failed with status ${response.status}`, {
      status: response.status,
      code: `http_${response.status}`,
      details,
    });
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
