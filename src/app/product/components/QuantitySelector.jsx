// components/QuantitySelector.jsx
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, setQuantity }) {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="bg-white w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Decrease quantity"
            >
                <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">
                {quantity.toString().padStart(2, '0')}
            </span>
            <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-white w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Increase quantity"
            >
                <Plus className="w-4 h-4 text-gray-700" />
            </button>
        </div>
    );
}