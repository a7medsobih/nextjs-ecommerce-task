// src/context/CartContext.jsx
"use client";

import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const toggleCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            const newCart = exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];

            // Toast notification
            Swal.fire({
                toast: true,
                position: "top",
                icon: exists ? "info" : "success",
                title: exists ? "Removed from cart" : "Added to cart",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });

            return newCart;
        });
    };

    const toggleWishlist = (product) => {
        setWishlistItems((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            const newWishlist = exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];

            // Toast notification
            Swal.fire({
                toast: true,
                position: "top",
                icon: exists ? "info" : "success",
                title: exists ? "Removed from wishlist" : "Added to wishlist",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });

            return newWishlist;
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                wishlistItems,
                cartCount: cartItems.length,
                wishlistCount: wishlistItems.length,
                toggleCart,
                toggleWishlist,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
