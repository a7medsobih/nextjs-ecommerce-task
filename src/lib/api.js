// src/lib/api.js
const BASE_URL = "https://tinytales.trendline.marketing/api";

export async function apiFetch(endpoint, options = {}) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            Accept: "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }

    return res.json();
}
