function Administrator_Dashboard_BigCard({
    title,
    percentage,
}) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                min-h-[240px]
            "
        >

            {/* Title */}
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500">
                {title}
            </h2>

            {/* Percentage */}
            <h1 className="mt-3 text-3xl font-bold text-gray-700">
                {percentage}
            </h1>

            {/* Fake Graph */}
            <div className="mt-10 flex h-[120px] items-end justify-between gap-2">

                <div className="w-full rounded-t bg-gray-300 h-[35%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[45%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[60%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[55%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[70%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[80%]"></div>

                <div className="w-full rounded-t bg-gray-300 h-[90%]"></div>

            </div>

        </div>
    );
}

export default Administrator_Dashboard_BigCard;