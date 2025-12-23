// components/ReviewList.jsx
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        id: 1,
        name: "Alex Daewn",
        rating: 5,
        date: "4 months ago",
        comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
        id: 2,
        name: "Alex Daewn",
        rating: 5,
        date: "4 months ago",
        comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
        id: 3,
        name: "Alex Daewn",
        rating: 5,
        date: "4 months ago",
        comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
        id: 4,
        name: "Alex Daewn",
        rating: 5,
        date: "4 months ago",
        comment:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
];

export default function ReviewList() {
    return (
        <>
            <div className="bg-white rounded-xl p-6 space-y-6">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
            <div className="text-center">
                <a href="#" className="bg-[#F5F5F5] hover:bg-[#b8978a] text-primary hover:text-white px-4 py-3 rounded-lg smooth-transition text-sm font-medium">
                    View More Comments
                </a>
            </div>
        </>
    );
}
