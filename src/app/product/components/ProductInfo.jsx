// components/ProductInfo.jsx
import { ShoppingCart } from "lucide-react";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/context/CartContext";

export default function ProductInfo({
    product,
    selectedColor,
    onColorChange,
    quantity,
    setQuantity,
}) {
    // استخراج الجزء الأول من العنوان
    const mainTitle = product.title.split(' ').slice(0, 4).join(' ');
    const subTitle = product.title.split(' ').slice(4).join(' ');

    const { cartItems, toggleCart } = useCart();

    // التحقق إذا المنتج موجود في العربه
    const isInCart = cartItems.some((p) => p.id === product.id);
    return (
        <div className="space-y-4">
            {/* العنوان */}
            <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-900 ">
                    {mainTitle}
                </h1>
                <h2 className="text-lg md:text-xl font-medium text-gray-700">
                    {subTitle}
                </h2>
            </div>

            {/* السعر */}
            <div className="space-y-1">
                <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-semibold">
                        ${product.price}
                    </span>
                    <span className="line-through text-lg text-gray-400">
                        ${product.oldPrice}
                    </span>
                </div>
                <p className="text-sm text-gray-500">
                    This price is exclusive of taxes.
                </p>
            </div>

            {/* الوصف */}
            <div className="space-y-1">
                <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy
                </p>
                <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, diam nonummy
                </p>
            </div>

            <div className=" space-y-6">
                {/* النوع */}
                <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Type</h3>
                    <select
                        className="w-full md:w-64 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                        defaultValue="Cotton"
                    >
                        <option value="Cotton">Cotton</option>
                        <option value="Wool">Wool</option>
                        <option value="Linen">Linen</option>
                    </select>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Size</h3>
                    <select
                        className="w-full md:w-64 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                        defaultValue="XL"
                    >
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                    </select>
                </div>

                {/* الألوان */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Colors</h3>
                    <div className="flex items-center gap-3">
                        <ColorSelector
                            colors={Object.keys(product.colors)}
                            selected={selectedColor}
                            onChange={onColorChange}
                        />
                        <span className="capitalize text-gray-700">{selectedColor}</span>
                    </div>
                </div>
            </div>

            {/* الكمية والسعر الإجمالي */}
            <div className="space-y-2 mt-8">
                <p>Quantity <span className="text-gray-700">(${product.price} for Piece)</span></p>

                {/* السعر الإجمالي */}
                <div className="flex items-center justify-between flex-col md:flex-row text-lg gap-4">
                    <div className="flex items-center justify-between w-full md:w-fit gap-6">
                        <div className="w-fit flex items-center gap-4 bg-bg-main px-2 py-2 text-sm rounded-lg">
                            <QuantitySelector
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>

                        <span className="font-bold ">
                            ${(product.price * quantity).toFixed(2)}
                        </span>
                    </div>

                    <button
                        className={`w-full text-sm md:w-fit flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl shadow-md transition-colors duration-300 cursor-pointer
        ${isInCart ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-[#c7a79a] hover:bg-[#b8978a] text-white hover:shadow-lg"}
      `}
                        onClick={() => toggleCart(product)}
                    >
                        <ShoppingCart size={20} />
                        {isInCart ? "Remove" : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div >
    );
}