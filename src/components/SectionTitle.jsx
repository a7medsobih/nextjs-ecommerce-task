// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
    return (
        <div className="mb-2">
            <h3 className="text-xl font-bold ">
                {title}
            </h3>

            {/* underline */}
            <div className="w-12 h-[3px] bg-[#c7a79a] mt-2 rounded-full" />
        </div>
    );
}
