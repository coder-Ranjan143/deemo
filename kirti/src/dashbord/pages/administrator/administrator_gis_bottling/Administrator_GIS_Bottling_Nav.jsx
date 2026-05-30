import { Filter, RefreshCcw, Home } from "lucide-react";

function Administrator_GIS_Bottling_Nav() {
    return (
        <div className="w-full rounded-xl bg-gradient-to-r from-[#1a2559] via-[#23357d] to-[#3047a5] px-4 py-3 shadow-lg">

            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-white">
                        GIS Bottling Tracking Dashboard
                    </h1>
                    <p className="text-xs text-gray-200">
                        Government monitoring system
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 overflow-x-auto">

                    <button className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                        <Filter size={14} /> Filter
                    </button>

                    <button className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                        <RefreshCcw size={14} /> Refresh
                    </button>

                    <button className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white">
                        Home
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Administrator_GIS_Bottling_Nav;