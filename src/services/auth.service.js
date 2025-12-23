// src/services/auth.service.js
import { apiFetch } from "@/lib/api";

export const AuthService = {
    register(data) {
        return apiFetch("/auth/register", {
            method: "POST",
            body: data, // FormData
        });
    },

    login(data) {
        return apiFetch("/auth/login", {
            method: "POST",
            body: data,
        });
    },

    getUser(token) {
        return apiFetch("/auth/user-data", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};
