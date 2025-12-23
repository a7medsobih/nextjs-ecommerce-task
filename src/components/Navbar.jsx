// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Home,
    LayoutGrid,
    Info,
    Phone,
    HelpCircle,
    ShoppingCart,
    User,
    Bell,
    Heart,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { cartCount, wishlistCount } = useCart();

    return (
        <nav className="bg-white shadow-sm shadow-black/10">
            <div className="container flex items-center justify-between h-16">

                {/* Left Section */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Trendglass Logo"
                            width={50}
                            height={40}
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6 text-sm ">
                        <NavLink href="#" icon={<Home size={16} />} text="Home" />
                        <NavLink href="#" icon={<LayoutGrid size={16} />} text="Our Category" />
                        <NavLink href="#" icon={<Info size={16} />} text="About us" />
                        <NavLink href="#" icon={<Phone size={16} />} text="Contact us" />
                        <NavLink href="#" icon={<HelpCircle size={16} />} text="FAQs" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 pointer-cusor relative">
                    <IconButton icon={<ShoppingCart size={18} />} count={cartCount} />
                    <IconButton icon={<Heart size={18} />} count={wishlistCount} />
                    <IconButton icon={<User size={18} />} />

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden cursor-pointer "
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden smooth-transition ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-4 space-y-4 bg-white border-t border-gray-200">
                    <MobileLink href="#" icon={<Home size={16} />} text="Home" />
                    <MobileLink href="#" icon={<LayoutGrid size={16} />} text="Our Category" />
                    <MobileLink href="#" icon={<Info size={16} />} text="About us" />
                    <MobileLink href="#" icon={<Phone size={16} />} text="Contact us" />
                    <MobileLink href="#" icon={<HelpCircle size={16} />} text="FAQs" />
                </div>
            </div>
        </nav>
    );
}

/* =========================
   Reusable Components
   ========================= */

function NavLink({ href, icon, text }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-800 smooth-transition"
        >
            {icon}
            {text}
        </Link>
    );
}

function IconButton({ icon, count = 0 }) {
    return (
        <button className="relative cursor-pointer text-gray-500 hover:text-gray-800 smooth-transition">
            {icon}
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                </span>
            )}
        </button>
    );
}

function MobileLink({ href, icon, text }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 smooth-transition"
        >
            {icon}
            {text}
        </Link>
    );
}
