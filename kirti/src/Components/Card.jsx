function Card({
    title,
    value,
    icon,
    bgColor,
    titleColor,
    valueColor,
    iconBg,
    hoverEffect,
}) {
    return (
        <div className={`
            relative
            overflow-hidden
            w-full
            min-h-[160px]
            p-4
            rounded-2xl
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
            cursor-pointer
            group
            ${bgColor}
        `}>

            {/* Hover Effect */}
            <div className={`
                absolute
                inset-0
                rounded-2xl
                bg-gradient-to-br
                ${hoverEffect}
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
            `}></div>

            <div className="relative z-10">

                <div className={`
                    w-12 h-12 flex items-center justify-center rounded-xl mb-4
                    ${iconBg}
                `}>
                    {icon}
                </div>

                <h2 className={`text-lg font-semibold ${titleColor}`}>
                    {title}
                </h2>

                <p className={`mt-2 text-2xl font-bold ${valueColor}`}>
                    {value}
                </p>

            </div>

        </div>
    );
}

export default Card;