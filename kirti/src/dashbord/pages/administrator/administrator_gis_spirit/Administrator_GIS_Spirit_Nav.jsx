import {
    Filter,
    RefreshCcw,
    Home,
} from "lucide-react";

function Administrator_GIS_Spirit_Nav() {
    return (
        <div className="rounded-lg bg-gradient-to-r from-[#1f2b5e] to-[#283b8f] px-3 py-2 shadow-sm">

            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Section */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-sm font-bold tracking-wide text-white sm:text-base lg:text-lg">
                        GIS Spirit Tracking Dashboard
                    </h1>

                    <p className="text-[10px] text-gray-200 sm:text-[11px]">
                        Government of State.Permit & dispatch Monitoring
                    </p>

                </div>

                {/* Center Section */}
                <div className="flex items-center justify-start lg:justify-center">

                    <h2 className="text-[11px] font-medium text-gray-200 sm:text-xs lg:text-sm">
                        Today 23 May 2026 , 00:01 AM To Till Now
                    </h2>

                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center gap-1.5">

                    <button className="flex items-center gap-1 rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        <Filter size={11} />
                        Filter
                    </button>

                    <button className="flex items-center gap-1 rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        <RefreshCcw size={11} />
                        Refresh
                    </button>

                    <button className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        Mfg Camera
                    </button>

                    <button className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        Mfg Unit
                    </button>

                    <button className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        GIS Bottling
                    </button>

                    <button className="flex items-center gap-1 rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white transition hover:bg-white/20 sm:text-[11px]">
                        <Home size={11} />
                        Home
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Administrator_GIS_Spirit_Nav;