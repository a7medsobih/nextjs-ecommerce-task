// src/app/product/components/SimilarItemsCarousel.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SimilarItemsCarousel({ products }) {
    return (
        <div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                loop={true}

                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className=" flex justify-center mt-6 gap-6 items-center">
                <div className="custom-prev z-10 cursor-pointer bg-bg-main p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                </div>
                <div className="custom-next z-10 cursor-pointer bg-bg-main p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                    <ChevronRight size={20} />
                </div>

            </div>
        </div>
    );
}
