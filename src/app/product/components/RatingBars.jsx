// components/RatingBars.jsx
import { Star } from "lucide-react";

const ratings = [
    { star: 5, percent: 67 },
    { star: 4, percent: 15 },
    { star: 3, percent: 6 },
    { star: 2, percent: 3 },
    { star: 1, percent: 9 },
];

export default function RatingBars() {
    return (
        <div className="space-y-3">
            {ratings.map((rate) => (
                <div key={rate.star} className="flex items-center gap-3">
                    {/* Stars Count */}
                    <div className="flex items-center gap-1 w-8">
                        <Star className="w-4 h-4 fill-[#c7a79a] text-[#c7a79a]" />
                        <span className="text-sm font-medium">{rate.star}</span>
                    </div>

                    {/* Progress */}
                    <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#c7a79a]"
                            style={{ width: `${rate.percent}%` }}
                        />
                    </div>

                    {/* Percentage */}
                    <span className="w-10 text-sm text-gray-600">
                        %{rate.percent}
                    </span>
                </div>
            ))}
        </div>
    );
}
