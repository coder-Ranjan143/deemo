function Administrator_Dashboard_SmallCard({
  title,
  subtitle,
  value,
}) {
  return (
    <div className="
            rounded-2xl
            border
            border-gray-200
            bg-white/90
            p-4
            shadow-sm
            transition
            hover:shadow-md
            min-h-[145px]
        ">

      {/* Title */}
      <h2 className="
                text-[18px]
                font-extrabold
                uppercase
                tracking-wide
                text-gray-700
                leading-6
            ">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="
                mt-2
                text-[13px]
                text-gray-500
                leading-5
            ">
        {subtitle}
      </p>

      {/* Value */}
      <h1 className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-gray-700
            ">
        {value}
      </h1>

    </div>
  );
}

export default Administrator_Dashboard_SmallCard;