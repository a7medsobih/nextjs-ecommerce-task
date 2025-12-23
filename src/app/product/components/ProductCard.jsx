// src/app/product/components/ProductCard.jsx
"use client";

import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
    const { cartItems, wishlistItems, toggleCart, toggleWishlist } = useCart();

    const isInCart = cartItems.some((p) => p.id === product.id);
    const isInWishlist = wishlistItems.some((p) => p.id === product.id);

    return (
        <div className="pt-4">
            {/* Image */}
            <div className="relative p-12 md:p-8 rounded-2xl border border-border-light hover:border-gray-400 smooth-transition overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                />

                {/* Top Icons */}
                <div className="absolute top-3 right-3 flex flex-row gap-2 ">
                    <button
                        onClick={() => toggleWishlist(product)}
                        className={`w-9 h-9 border border-border-light rounded-xl flex items-center justify-center transition-colors ${isInWishlist
                            ? "bg-red-100 text-red-500"
                            : "text-primary hover:border-gray-400"
                            }`}
                    >
                        <Heart size={18} />
                    </button>

                    <button
                        onClick={() => toggleCart(product)}
                        className={`w-9 h-9 border border-border-light rounded-xl flex items-center justify-center transition-colors ${isInCart
                            ? "bg-yellow-100 text-yellow-500"
                            : "text-primary hover:border-gray-400"
                            }`}
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-2">
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-1 text-primary font-simibold">
                        <Star size={14} fill="currentColor" />
                        <span className="text-black text-xs">
                            {product.rating}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-medium text-sm line-clamp-2">
                    {product.title}
                </h3>

                {/* Price */}
                <div className="font-semibold text-lg">
                    ${product.price}
                </div>
            </div>
        </div>
    );
}
