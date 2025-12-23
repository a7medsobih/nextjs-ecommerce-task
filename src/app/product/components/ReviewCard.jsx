// components/ReviewCard.jsx
import { Star } from "lucide-react";

export default function ReviewCard({ name, rating, date, comment }) {
    return (
        <div className="border-b last:border-b-0 pb-6 border-border-light   ">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-black">{name}</h4>

                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < rating
                                    ? "fill-[#c7a79a] text-[#c7a79a]"
                                    : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <span className="text-[10px] text-gray-500">{date}</span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
                {comment}
            </p>
        </div>
    );
}
