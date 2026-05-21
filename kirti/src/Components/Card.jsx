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
            h-full
            min-h-[105px]
            p-3
            sm:min-h-[115px]
            rounded-xl
            border
            border-gray-200
            shadow-sm
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-md
            cursor-pointer
            group
            ${bgColor}
        `}>

            {/* Hover Effect */}
            <div className={`
                absolute
                inset-0
                rounded-xl
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
                    w-9 h-9 flex items-center justify-center rounded-full mb-3
                    ${iconBg}
                `}>
                    {icon}
                </div>

                <h2 className={`break-words text-base font-bold leading-snug md:text-lg ${titleColor}`}>
                    {title}
                </h2>

                <p className={`mt-2 text-lg font-bold md:text-xl ${valueColor}`}>
                    {value}
                </p>

            </div>

        </div>
    );
}

export default Card;
