// src/lib/apiAuth.js
import api from "./axios";

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {string} userData.fullName - User's full name
 * @param {string} userData.email - User's email
 * @param {string} userData.password - User's password
 * @param {string} userData.phoneNumber - User's phone number
 * @param {string} userData.countryCode - User's country code
 * @returns {Promise<Object>} - Registration response data
 * @throws {Error} - Registration error
 */
export const register = async (userData) => {
  try {
    const payload = {
      name: userData.fullName || userData.name || "",
      email: userData.email,
      mobile: userData.phoneNumber || userData.mobile || "",
      password: userData.password,
      password_confirmation:
        userData.passwordConfirmation || userData.password || "",
      mobile_country_code:
        userData.countryCode || userData.mobile_country_code || "",
      // optional fields used in Postman collection
      type: userData.type || "client",
      fcm_token: userData.fcm_token || "test",
    };

    const url = "/auth/register";
    console.log("Registering user with URL:", url, "and payload:", payload);

    const response = await api.post(url, payload);

    if (response.headers["content-type"]?.includes("application/json")) {
      if (response.data.status) {
        return response.data;
      }
      throw new Error(response.data.message || "Registration failed");
    } else {
      console.error("Unexpected response format:", response);
      throw new Error("Unexpected response format from server");
    }
  } catch (error) {
    console.error("Registration error (raw):", error);
    if (error.response?.status === 400) {
      console.error("Payload sent:", payload);
      console.error("Server response:", error.response.data);
    }
    throw {
      success: false,
      message: error.response?.data?.message || error.message || "Unknown error occurred",
    };
  }
};

/**
 * Login user
 * @param {Object} credentials - Login credentials
 * @param {string} credentials.email - User's email
 * @param {string} credentials.password - User's password
 * @returns {Promise<Object>} - Login response with token
 * @throws {Error} - Login error
 */
export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    if (response.data.status) {
      return {
        success: true,
        token: response.data.data.token,
        user: response.data.data.user,
        message: "Login successful",
      };
    }

    throw new Error(response.data.message || "Login failed");
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

/**
 * Verify email with verification code
 * @param {string} email - User's email
 * @param {string} code - Verification code
 * @returns {Promise<Object>} - Verification response
 * @throws {Error} - Verification error
 */
export const verify = async (email, code) => {
  try {
    // API expects endpoint `/auth/verify-email` and a bearer token (see Postman collection)
    // Send as FormData because Postman used form-data
    const form = new FormData();
    form.append("code", code);

    const response = await api.post("/auth/verify-email", form);

    if (response.data.status) {
      return {
        success: true,
        message: "Email verified successfully",
      };
    }

    throw new Error(response.data.message || "Verification failed");
  } catch (error) {
    console.error("Verification error:", error.response?.data || error.message);
    throw {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};
