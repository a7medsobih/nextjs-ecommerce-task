"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { register } from "@/lib/apiAuth";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    countryCode: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName) errs.fullName = "Full Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.password) errs.password = "Password is required";
    if (formData.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (!formData.phoneNumber) errs.phoneNumber = "Phone number is required";
    if (!formData.countryCode) errs.countryCode = "Country code is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // تسجيل المستخدم
      const payload = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password,
        mobile: formData.phoneNumber,
        mobile_country_code: formData.countryCode,
        type: "client",
        fcm_token: "test",
      };

      const res = await register(payload);
      console.log("Registration response:", res);

      if (res.status) {
        Swal.fire("Success", "Account created successfully", "success");

        // تسجيل الدخول مباشرة بعد التسجيل
        const signInResult = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        console.log("SignIn result:", signInResult);

        if (signInResult?.ok) {
          router.push("/dashboard"); // توجيه للداشبور بعد تسجيل الدخول
        } else {
          Swal.fire("Error", signInResult?.error || "Login failed", "error");
        }
      }
    } catch (error) {
      console.error("Registration failed:", error);
      Swal.fire(
        "Error",
        error.message || error?.message || "Registration failed",
        "error"
      );
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-bg-main p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-primary mb-4">Register</h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mb-2">{errors.fullName}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password}</p>
        )}

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mb-2">{errors.phoneNumber}</p>
        )}

        <input
          type="text"
          name="countryCode"
          placeholder="Country Code"
          value={formData.countryCode}
          onChange={handleChange}
          className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-4"
        />
        {errors.countryCode && (
          <p className="text-red-500 text-xs mb-2">{errors.countryCode}</p>
        )}

        <button
          type="submit"
          className="bg-[#c7a79a] hover:bg-[#b8978a] shadow-md hover:shadow-lg cursor-pointer smooth-transition text-white p-2 w-full rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
