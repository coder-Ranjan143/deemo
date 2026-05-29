import {
    Filter,
    RefreshCcw,
    Home,
} from "lucide-react";

function Admin_Mfg_Unit_Nav() {
    return (
        <div className="w-full rounded-xl bg-gradient-to-r from-[#1a2559] via-[#23357d] to-[#3047a5] px-4 py-3 shadow-lg">

            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

                {/* Left Section */}
                <div className="flex flex-col">

                    <h1 className="text-lg font-bold tracking-wide text-white md:text-xl">
                        Manufacturing Unit & Entry / Exit
                    </h1>

                    <p className="text-xs text-gray-200">
                        Manufacturing Unit - Entry / Exit Monitoring
                    </p>

                </div>

                {/* Center Section */}
                <div className="flex justify-start xl:justify-center">

                    <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md shadow-md">

                        <h2 className="text-xs font-semibold tracking-wide text-white md:text-sm">
                            Today, 23 May 2026 | 00:01 AM To Till Now
                        </h2>

                    </div>

                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center gap-2">

                    <button className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">

                        <Filter size={14} />
                        Filter

                    </button>

                    <button className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">

                        <RefreshCcw size={14} />
                        Refresh

                    </button>

                    <button className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                        Mfg Camera
                    </button>

                    <button className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                        GIS Bottling
                    </button>

                    <button className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                        GIS Spirit
                    </button>

                    <button className="flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#23357d] transition-all duration-300 hover:bg-gray-100">

                        <Home size={14} />
                        Home

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Admin_Mfg_Unit_Nav;