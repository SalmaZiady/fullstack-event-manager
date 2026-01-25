export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const apiFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const auth = localStorage.getItem("auth");
  const token = auth ? JSON.parse(auth).token : null;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const headers: HeadersInit = token
    ? {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
      }
    : defaultHeaders;

  return window.fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });
};
