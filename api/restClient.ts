const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8081";

export const restApi = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      ...options,
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      const message =
        errorData?.message ||
        errorData?.error ||
        `Request failed with status ${res.status}`;
      throw new Error(message);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error("API request error:", err.message);
    } else {
      console.error("API request error:", err);
    }
    throw err;
  }
};
