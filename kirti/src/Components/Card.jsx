function Card({
    title,
    value,
    icon,
    bgColor,
    titleColor,
    valueColor,
    iconBg,
    hoverEffect,
    cardHeight = "min-h-[120px]",
}) {
    return (
        <div
            className={`
                relative
                overflow-hidden
                w-full
                h-full
                ${cardHeight}
                p-3
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
            `}
        >

            {/* Hover Effect */}
            <div
                className={`
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
                `}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">

                {/* Icon */}
                <div
                    className={`
                        mb-3
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        ${iconBg}
                    `}
                >
                    {icon}
                </div>

                {/* Title */}
                <h2
                    className={`
                        break-words
                        text-base
                        font-bold
                        leading-snug
                        md:text-lg
                        ${titleColor}
                    `}
                >
                    {title}
                </h2>

                {/* Value */}
                <p
                    className={`
                        mt-auto
                        pt-3
                        text-lg
                        font-bold
                        md:text-xl
                        ${valueColor}
                    `}
                >
                    {value}
                </p>

            </div>
        </div>
    );
}

export default Card;