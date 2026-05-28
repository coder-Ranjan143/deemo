function Administrator_Dashboard_BigCard({
    title,
    percentage,
    lineColor = "#4ade80",
}) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white/90
                p-4
                shadow-sm
                min-h-[210px]
            "
        >

            {/* Title */}
            <h2
                className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-gray-600
                "
            >
                {title}
            </h2>

            {/* Percentage */}
            <h1
                className="
                    mt-2
                    text-[18px]
                    font-bold
                    text-gray-700
                "
            >
                {percentage}
            </h1>

            {/* Graph Box */}
            <div
                className="
                    mt-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-[#fafafa]
                    p-3
                "
            >

                <div className="relative h-[95px] w-full">

                    {/* SVG GRAPH */}
                    <svg
                        viewBox="0 0 300 80"
                        className="h-full w-full"
                        preserveAspectRatio="none"
                    >

                        {/* Graph Line */}
                        <polyline
                            fill="none"
                            stroke={lineColor}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="
                                10,50
                                50,50
                                90,35
                                130,36
                                170,34
                                210,32
                                250,30
                                290,26
                            "
                        />

                    </svg>

                    {/* Percentage Labels */}
                    <div
                        className="
                            absolute
                            bottom-3
                            flex
                            w-full
                            justify-between
                            px-1
                            text-[9px]
                            text-gray-500
                        "
                    >
                        <span>21.08%</span>
                        <span>21%</span>
                        <span>22.25%</span>
                        <span>22.14%</span>
                        <span>22.31%</span>
                        <span>22.37%</span>
                        <span>22.69%</span>
                    </div>

                    {/* Days */}
                    <div
                        className="
                            absolute
                            bottom-0
                            flex
                            w-full
                            justify-between
                            px-1
                            text-[9px]
                            text-gray-400
                        "
                    >
                        <span>S</span>
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Administrator_Dashboard_BigCard;