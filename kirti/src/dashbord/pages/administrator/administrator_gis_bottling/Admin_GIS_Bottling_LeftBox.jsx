import React from "react";
import Card from "./Administrator_GIS_Bottling_Card";

const Admin_GIS_Bottling_LeftBox = () => {
    return (
        <div className="space-y-3 h-full flex flex-col overflow-hidden">

            <div className="relative rounded-xl border border-gray-200 bg-white p-3 shadow-sm h-[130px] flex flex-col justify-start">

                <div className="absolute right-3 top-3">
                    <span className="rounded-full border border-yellow-200 bg-yellow-50 px-2 py-1 text-[9px] font-semibold text-yellow-700">
                        IN PROCESS
                    </span>
                </div>

                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                    Total Transit Permits
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    57
                </h2>

            </div>

            {/* MAIN BOX */}
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm flex-1 overflow-auto">

                <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-xs font-bold text-white">
                        BL
                    </div>

                    <h2 className="text-sm font-semibold text-gray-800">
                        Bottled Liquor In Transit
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                    <div className="overflow-hidden rounded-xl border border-gray-200">
                        <div className="bg-blue-700 px-3 py-2 text-xs font-medium text-white">
                            Within State
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
                            <Card title="TOTAL IN TRANSIT PERMITS" value="43" />
                            <Card title="MISSED HOP POINTS" value="4" badge="MISSED" />
                            <Card title="ACTIVE GPS / ELOCK DEVICE" value="37" />
                            <Card title="VEHICLE DELAYED" value="0" />
                            <Card title="LOCK / UNLOCK HISTORY" value="0" />
                            <Card title="ELOCK TEMPERING" value="0" />
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200">
                        <div className="bg-slate-100 px-3 py-2 text-xs font-medium text-gray-700">
                            Inter State
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
                            <Card title="TOTAL IN TRANSIT PERMITS" value="14" />
                            <Card title="MISSED HOP POINTS" value="0" badge="MISSED" />
                            <Card title="ACTIVE GPS / ELOCK DEVICE" value="4" />
                            <Card title="VEHICLE DELAYED" value="0" />
                            <Card title="LOCK / UNLOCK HISTORY" value="0" />
                            <Card title="ELOCK TEMPERING" value="0" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Admin_GIS_Bottling_LeftBox;