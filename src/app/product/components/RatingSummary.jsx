// components/RatingSummary.jsx
import RatingBars from "./RatingBars";

export default function RatingSummary() {
    return (
        <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-4 items-center">
            {/* Left: Average Rating */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-8xl font-semibold text-black">
                    4.5
                    <span className="text-gray-400 text-2xl font-medium"> /5</span>
                </h2>
            </div>

            {/* Middle: Rating Bars */}
            <RatingBars />

            {/* Right: Total Reviews */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4">
                <div>
                    <p className="text-sm text-gray-500">Total Reviews</p>
                    <h3 className="text-4xl font-bold text-black">3.0K</h3>
                </div>

                <button className="bg-[#c7a79a] hover:bg-[#b8978a] shadow-md hover:shadow-lg cursor-pointer smooth-transition text-white px-4 py-3 rounded-lg  text-sm font-medium">
                    Add Comment
                </button>
            </div>
        </div>
    );
}
