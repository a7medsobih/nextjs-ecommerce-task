// src/app/login/page.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.email) errs.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.password) errs.password = "Password is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res?.error) {
      Swal.fire("Error", res.error, "error");
    } else {
      Swal.fire("Success", "Logged in successfully", "success");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-bg-main p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">Login</h1>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1" />
        {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="bg-white border border-primary rounded-md text-sm p-2 w-full mb-1" />
        {errors.password && <p className="text-red-500 text-xs mb-2">{errors.password}</p>}

        <button type="submit" className="bg-[#c7a79a] hover:bg-[#b8978a] shadow-md hover:shadow-lg cursor-pointer smooth-transition text-white p-2 w-full rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
