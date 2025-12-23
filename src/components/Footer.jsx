"use client";

import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative text-gray-300 px-6 md:px-20 py-16 overflow-hidden ">

            {/* الخلفية */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/footer.jpg"
                    alt="Footer background"
                    fill
                    className="object-cover "
                    priority
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-[#020202B2]"></div>
            </div>

            {/* محتوى الفوتر */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo + Description */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Trendglass Logo"
                            width={60}
                            height={50}
                            priority
                        />
                    </div>
                    <p className=" text-sm">
                        Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab. Soluta dolor quae...
                    </p>
                </div>

                {/* Let Us Help */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-lg">Let Us Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer smooth-transition">My Account</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">FAQs</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">Categories</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">All Products</li>
                    </ul>
                </div>

                {/* Policies */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-lg">Policies</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer smooth-transition">Refund Policy</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">About Us</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">Cancellation Policy</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">Terms and Conditions</li>
                        <li className="hover:text-white cursor-pointer smooth-transition">Privacy Policy</li>
                    </ul>
                </div>

                {/* Send Email + Social */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-lg">Send Email</h3>
                    <div className="flex ">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 text-sm bg-white py-2 rounded-l-md text-gray-900 focus:outline-none"
                        />
                        <button className="bg-primary px-4 py-2 rounded-r-md text-white flex items-center gap-1">
                            <Send size={16} /> Send
                        </button>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-white font-semibold text-sm">Follow Us</h3>
                        <div className="flex gap-3 mt-2 text-white">
                            <a href="#" className="cursor-pointer smooth-transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="cursor-pointer smooth-transition">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="cursor-pointer smooth-transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="cursor-pointer smooth-transition">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
