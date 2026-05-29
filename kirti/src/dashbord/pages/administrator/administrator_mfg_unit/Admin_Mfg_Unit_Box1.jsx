// Admin_Mfg_Unit_Box1.jsx

const Admin_Mfg_Unit_Box1 = () => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm h-full overflow-hidden">

            {/* Header */}
            <div className="mb-2 flex items-center justify-between">

                <h2 className="text-[15px] font-semibold text-black">
                    Today&apos;s Summary
                </h2>

                <span className="rounded-full bg-blue-100 px-2 py-[2px] text-[15px] font-semibold text-blue-700">
                    LIVE
                </span>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-1.5">

                {/* Total Entry */}
                <div className="rounded-md border border-gray-300 p-2 h-[110px] flex flex-col justify-between">

                    <p className="text-[10px] font-semibold tracking-wide text-black">
                        TOTAL ENTRY
                    </p>

                    <h1 className="text-[24px] font-bold leading-none text-black">
                        256
                    </h1>

                    {/* Graph Color Same */}
                    <div className="h-[5px] rounded-full bg-red-100">

                        <div className="h-full w-[95%] rounded-full bg-red-500"></div>

                    </div>

                    <p className="text-[9px] leading-3 text-black">
                        Unauth entry + mismatch
                    </p>

                </div>

                {/* Total Exit */}
                <div className="rounded-md border border-gray-300 p-2 h-[110px] flex flex-col justify-between">

                    <p className="text-[10px] font-semibold tracking-wide text-black">
                        TOTAL EXIT
                    </p>

                    <h1 className="text-[24px] font-bold leading-none text-black">
                        262
                    </h1>

                    {/* Graph Color Same */}
                    <div className="h-[5px] rounded-full bg-orange-100">

                        <div className="h-full w-[92%] rounded-full bg-orange-500"></div>

                    </div>

                    <p className="text-[9px] leading-3 text-black">
                        4 valid / 5 no-pass
                    </p>

                </div>

                {/* In Premises */}
                <div className="rounded-md border border-gray-300 p-2 h-[110px] flex flex-col justify-between">

                    <p className="text-[10px] font-semibold tracking-wide text-black">
                        IN PREMISES
                    </p>

                    <h1 className="text-[24px] font-bold leading-none text-black">
                        109
                    </h1>

                    <p className="text-[9px] leading-3 text-black">
                        Vehicles (now)
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Admin_Mfg_Unit_Box1;