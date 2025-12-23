// src/app/verify/page.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { verify } from "@/lib/apiAuth";

const VerifyPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(code)) {
      Swal.fire("Error", "Code must be 6 digits", "error");
      return;
    }

    try {
      const res = await verify(code);
      if (res.success) {
        Swal.fire("Success", "Email verified successfully", "success");
        router.push("/login");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-bg-main p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">Verify Account</h1>
        <input type="text" placeholder="Enter Verification Code" value={code} onChange={(e) => setCode(e.target.value)} className="bg-white border border-primary p-2 w-full mb-4 rounded-md" />
        <button type="submit" className="bg-[#c7a79a] hover:bg-[#b8978a] shadow-md hover:shadow-lg cursor-pointer smooth-transition text-white p-2 w-full rounded-md">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyPage;
