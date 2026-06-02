// Admin_Mfg_Unit_Box2.jsx

import React from "react";

const Admin_Mfg_Unit_Box2 = () => {
    return (
        <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm">

            {/* Header */}
            <div className="mb-2 flex items-center gap-1.5">

                <div className="h-4 w-[2px] rounded-full bg-blue-700"></div>

                <h2 className="text-[11px] font-semibold text-gray-900 sm:text-[12px] md:text-[13px] lg:text-[15px]">
                    Total ANPR Summary Camera
                </h2>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

                {/* Total */}
                <div className="rounded-md border border-gray-100 bg-[#fafafa] p-2">

                    <p className="text-[9px] font-bold text-black md:text-[10px]">
                        Total ANPR
                    </p>

                    <h1 className="mt-1 text-[20px] font-bold leading-none text-black md:text-[22px]">
                        34
                    </h1>

                    <p className="mt-1 text-[8px] leading-3 text-black md:text-[9px]">
                        All ANPR cameras (active + down)
                    </p>

                </div>

                {/* Active */}
                <div className="rounded-md border border-gray-100 bg-[#fafafa] p-2">

                    <div className="flex items-start justify-between">

                        <p className="text-[9px] font-bold text-black md:text-[10px]">
                            Active
                        </p>

                        <h1 className="text-[20px] font-bold leading-none text-black md:text-[22px]">
                            11
                        </h1>

                    </div>

                    {/* Graph */}
                    <div className="mt-1 h-10 w-full md:h-12">

                        <svg
                            viewBox="0 0 320 70"
                            preserveAspectRatio="none"
                            className="h-full w-full"
                            fill="none"
                        >

                            <line
                                x1="0"
                                y1="55"
                                x2="320"
                                y2="55"
                                stroke="#d1d5db"
                                strokeWidth="1"
                            />

                            <path
                                d="
                                    M10 50
                                    L55 40
                                    L100 24
                                    L145 38
                                    L190 26
                                    L235 28
                                    L280 14
                                    L310 8
                                    L310 55
                                    L10 55
                                    Z
                                "
                                fill="rgba(34,197,94,0.16)"
                            />

                            <path
                                d="
                                    M10 50
                                    L55 40
                                    L100 24
                                    L145 38
                                    L190 26
                                    L235 28
                                    L280 14
                                    L310 8
                                "
                                stroke="#22c55e"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                        </svg>

                    </div>

                    {/* Values + Time */}
                    <div className="mt-1 flex items-center justify-between">

                        {[
                            { value: 8, time: "7am" },
                            { value: 9, time: "8am" },
                            { value: 10, time: "9am" },
                            { value: 9, time: "10am" },
                            { value: 10, time: "11am" },
                            { value: 10, time: "12pm" },
                            { value: 11, time: "1pm" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >

                                <span className="text-[7px] font-bold text-black md:text-[8px]">
                                    {item.value}
                                </span>

                                <span className="text-[6px] font-medium text-black md:text-[7px]">
                                    {item.time}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Down */}
                <div className="rounded-md border border-gray-100 bg-[#fafafa] p-2">

                    <div className="flex items-start justify-between">

                        <p className="text-[9px] font-bold text-black md:text-[10px]">
                            Down
                        </p>

                        <h1 className="text-[20px] font-bold leading-none text-black md:text-[22px]">
                            23
                        </h1>

                    </div>

                    {/* Graph */}
                    <div className="mt-1 h-10 w-full md:h-12">

                        <svg
                            viewBox="0 0 320 70"
                            preserveAspectRatio="none"
                            className="h-full w-full"
                            fill="none"
                        >

                            <line
                                x1="0"
                                y1="55"
                                x2="320"
                                y2="55"
                                stroke="#d1d5db"
                                strokeWidth="1"
                            />

                            <path
                                d="
                                    M10 12
                                    L55 22
                                    L100 36
                                    L145 24
                                    L190 38
                                    L235 40
                                    L280 48
                                    L310 54
                                    L310 55
                                    L10 55
                                    Z
                                "
                                fill="rgba(239,68,68,0.16)"
                            />

                            <path
                                d="
                                    M10 12
                                    L55 22
                                    L100 36
                                    L145 24
                                    L190 38
                                    L235 40
                                    L280 48
                                    L310 54
                                "
                                stroke="#ef4444"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                        </svg>

                    </div>

                    {/* Values + Time */}
                    <div className="mt-1 flex items-center justify-between">

                        {[
                            { value: 23, time: "7am" },
                            { value: 22, time: "8am" },
                            { value: 21, time: "9am" },
                            { value: 22, time: "10am" },
                            { value: 21, time: "11am" },
                            { value: 21, time: "12pm" },
                            { value: 20, time: "1pm" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >

                                <span className="text-[7px] font-bold text-black md:text-[8px]">
                                    {item.value}
                                </span>

                                <span className="text-[6px] font-medium text-black md:text-[7px]">
                                    {item.time}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Admin_Mfg_Unit_Box2;