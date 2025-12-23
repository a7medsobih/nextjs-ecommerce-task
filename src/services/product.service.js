// src/services/product.service.js
import { apiFetch } from "@/lib/api";

export async function getProduct() {
    // 🔥 لما الـ backend يضيف endpoint:
    // const [product, similarProducts] = await Promise.all([
    //   apiFetch("/products/1"),
    //   apiFetch("/products/1/similar"),
    // ]);

    const product = {
        title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
        price: 300,
        oldPrice: 360,
        images: [
            { color: "blue", src: "/products/blue-1.png" },
            { color: "white", src: "/products/white.png" },
            { color: "red", src: "/products/red.png" },
            { color: "black", src: "/products/black.png" },
        ],
        colors: ["blue", "white", "red", "black"],
    };

    const similarProducts = [
        {
            id: 1,
            title: "Casual Cotton Shirt",
            category: "Shirts",
            price: 220,
            rating: 4.7,
            image: "/products/p1.png",
        },
        {
            id: 2,
            title: "Modern Fit Shirt",
            category: "Shirts",
            price: 260,
            rating: 4.5,
            image: "/products/p2.png",
        },
        {
            id: 3,
            title: "Slim Fit Shirt",
            category: "Shirts",
            price: 240,
            rating: 4.6,
            image: "/products/p3.png",
        },
        {
            id: 4,
            title: "Slim Fit Shirt",
            category: "Shirts",
            price: 240,
            rating: 4.6,
            image: "/products/p4.png",
        },
        {
            id: 5,
            title: "Slim Fit Shirt",
            category: "Shirts",
            price: 240,
            rating: 4.6,
            image: "/products/p4.png",
        },
        {
            id: 6,
            title: "Slim Fit Shirt",
            category: "Shirts",
            price: 240,
            rating: 4.6,
            image: "/products/p4.png",
        },
        {
            id: 7,
            title: "Slim Fit Shirt",
            category: "Shirts",
            price: 240,
            rating: 4.6,
            image: "/products/p4.png",
        },
    ];

    return {
        product,
        similarProducts,
    };
}
