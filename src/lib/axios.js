// src/lib/axios.js
import axios from "axios";
import { getSession } from "next-auth/react";

// Added fallback for baseURL if environment variable is not set
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://tinytales.trendline.marketing/api",
});

api.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession();
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
    } catch (error) {
      // ignore — will try localStorage below
    }

    // Fallback to localStorage token when session is not available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && !config.headers?.Authorization) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
