"use client";

import { useMemo, useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductClient({ initialProduct }) {
  const initialColor = useMemo(
    () => initialProduct?.images?.[0]?.color || "blue",
    [initialProduct]
  );

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [quantity, setQuantity] = useState(1);

  const activeImageIndex = useMemo(() => {
    if (!initialProduct) return 0;
    return initialProduct.images.findIndex(
      (img) => img.color === selectedColor
    );
  }, [selectedColor, initialProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <ProductGallery
          images={initialProduct.images}
          activeIndex={activeImageIndex}
          onSlideChange={(index) => {
            setSelectedColor(
              initialProduct.images[index]?.color || initialColor
            );
          }}
        />
      </div>
      <div className="md:col-span-2">
        <ProductInfo
          product={initialProduct}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
}
