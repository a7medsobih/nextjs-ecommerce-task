// components/ColorSelector.jsx
export default function ColorSelector({ colors, selected, onChange }) {
    // تخطيط ألوان مخصص كما في الصورة
    const colorMap = {
        blue: "#3B82F6",
        white: "#FFFFFF",
        red: "#EF4444",
        black: "#000000",
        // يمكن إضافة المزيد حسب الحاجة
    };

    return (
        <div className="flex gap-3">
            {colors.map((color) => {
                const colorValue = colorMap[color] || color;
                return (
                    <button
                        key={color}
                        onClick={() => onChange(color)}
                        className={`relative w-10 h-10 rounded-full border-2 transition-all duration-300 ${selected === color
                            ? "border-black scale-110"
                            : "border-gray-300 hover:border-gray-400"
                            }`}
                        style={{ backgroundColor: colorValue }}
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                    >
                        {/* مؤشر التحديد */}
                        {selected === color && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
    );
}