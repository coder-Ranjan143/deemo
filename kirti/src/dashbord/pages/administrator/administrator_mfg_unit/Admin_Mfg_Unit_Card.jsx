// Admin_Mfg_Unit_Card.jsx

import React from "react";

const Admin_Mfg_Unit_Card = ({
    title,
    description,
    value,
    graphColor,
    fillColor,
    points,
    numbers,
    footer,
    footerText,
    countLabel,
}) => {

    const timeLabels = [
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
    ];

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm overflow-hidden">

            {/* Top */}
            <div className="flex items-start justify-between gap-2">

                <div className="flex-1 min-w-0">

                    <h2 className="text-[13px] font-semibold leading-4 text-gray-900">
                        {title}
                    </h2>

                    <p className="mt-1 text-[10px] leading-4 text-gray-500">
                        {description}
                    </p>

                </div>

                <h1 className="whitespace-nowrap text-3xl font-bold leading-none text-gray-900">
                    {value}
                </h1>

            </div>

            {/* Graph */}
            <div className="mt-1 h-16 w-full">

                <svg
                    viewBox="0 0 320 70"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    fill="none"
                >

                    {/* Bottom Line */}
                    <line
                        x1="0"
                        y1="55"
                        x2="320"
                        y2="55"
                        stroke="#d1d5db"
                        strokeWidth="1"
                    />

                    {/* Fill */}
                    <path
                        d={`${points} L310 55 L10 55 Z`}
                        fill={fillColor}
                    />

                    {/* Graph Line */}
                    <path
                        d={points}
                        stroke={graphColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                </svg>

            </div>

            {/* Values + Time */}
            <div className="mt-[2px] flex items-center justify-between">

                {numbers.map((num, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >

                        <span className="text-[10px] font-semibold text-gray-700">
                            {num}
                        </span>

                        <span className="text-[8px] text-gray-400">
                            {timeLabels[index]}
                        </span>

                    </div>
                ))}

            </div>

            {/* Footer */}
            <div className="mt-2 flex items-center justify-between">

                <span
                    className={`rounded-full px-2 py-[3px] text-[9px] font-semibold ${footer}`}
                >
                    {footerText}
                </span>

                <span className="text-[9px] text-gray-500">
                    {countLabel}
                </span>

            </div>

        </div>
    );
};

export default Admin_Mfg_Unit_Card;