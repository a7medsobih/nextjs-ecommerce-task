// src/app/product/components/ProductGallery.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MAX_THUMBNAILS = 3;

export default function ProductGallery({
    images = [],
    activeIndex = 0,
    onSlideChange = () => { },
}) {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(activeIndex);
        }
    }, [activeIndex]);

    const visibleThumbnails = images.slice(0, MAX_THUMBNAILS);
    const extraCount = images.length - MAX_THUMBNAILS;

    return (
        <div>
            {/* Main Image */}
            <div className="relative ">
                <Swiper
                    modules={[Navigation, Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) =>
                        onSlideChange(swiper.activeIndex)
                    }
                    pagination={{ clickable: true }}
                    className="rounded-xl bg-bg-main h-[420px]   custom-swiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                src={img.src}
                                className="h-full object-cover "
                                alt=""
                            />
                            {/* Overlay Top Shadow */}
                            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none "></div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Arrows */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white bg-gray-300/65 p-2 rounded-full hover:bg-primary smooth-transition ponter-cursor"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white bg-gray-300/65 p-2 rounded-full hover:bg-primary smooth-transition ponter-cursor"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-2 justify-center">
                {visibleThumbnails.map((img, index) => {
                    const isLast = index === MAX_THUMBNAILS - 1;
                    const showOverlay = isLast && extraCount > 0;

                    return (
                        <div
                            key={index}
                            onClick={() =>
                                swiperRef.current?.slideTo(index)
                            }
                            className={`relative w-24 h-28 rounded-lg overflow-hidden cursor-pointer border  
                                ${index === activeIndex
                                    ? "border-primary"
                                    : "border-gray-200"
                                }`}
                        >
                            <img
                                src={img.src}
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay +N */}
                            {showOverlay && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold text-lg">
                                    +{extraCount}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
