function Card({
    title,
    value,
    icon,
    bgColor,
    titleColor,
    valueColor,
    iconBg,
}) {
    return (

        <div
            className={`
        p-4
        rounded-2xl
        shadow-md
        ${bgColor}
        w-full
        max-w-[320px]
        h-[160px]
      `}
        >

            {/* Icon */}
            <div className="mb-5">

                <div
                    className={`
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            text-2xl
            ${iconBg}
          `}
                >
                    {icon}
                </div>

            </div>

            {/* Title */}
            <h2 className={`${titleColor} text-lg font-semibold leading-6`}>
                {title}
            </h2>

            {/* Value */}
            <p className={`${valueColor} text-4xl font-bold mt-4`}>
                {value}
            </p>

        </div>

    );
}

export default Card;