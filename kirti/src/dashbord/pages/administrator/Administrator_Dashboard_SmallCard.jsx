function Administrator_Dashboard_SmallCard({
  title,
  subtitle,
  value,
  bgColor = "bg-white",
}) {
  return (
    <div
      className={`
                rounded-2xl
                border
                border-gray-200
                ${bgColor}
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                min-h-[150px]
                md:min-h-[165px]
            `}
    >

      {/* Title */}
      <h2 className="text-lg font-bold uppercase tracking-wide text-gray-600 sm:text-xl lg:text-2xl">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-xs text-gray-500 sm:text-sm">
        {subtitle}
      </p>

      {/* Value */}
      <h1 className="mt-4 text-4xl font-bold text-gray-700 sm:text-5xl">
        {value}
      </h1>

    </div>
  );
}

export default Administrator_Dashboard_SmallCard;