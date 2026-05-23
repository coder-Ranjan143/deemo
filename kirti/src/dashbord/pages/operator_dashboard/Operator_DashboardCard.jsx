function Operator_DashboardCard({
    title,
    value,
    icon,
    titleColor,
    valueColor,
    iconBg,
    bgColor,
}) {
    return (
        <div
            className={`
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-3
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
                min-h-[110px]
            `}
        >

            {/* Left Side */}
            <div className="flex flex-col">

                {/* Icon */}
                <div
                    className={`
                        mb-3
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        ${iconBg}
                    `}
                >
                    {icon}
                </div>

                {/* Title */}
                <h3 className={`text-sm font-semibold ${titleColor}`}>
                    {title}
                </h3>
            </div>

            {/* Right Side Number */}
            <div>
                <p className={`text-4xl font-bold ${valueColor}`}>
                    {value}
                </p>
            </div>
        </div>
    );
}

export default Operator_DashboardCard;