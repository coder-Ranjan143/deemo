import React from "react";

const Administrator_GIS_Bottling_Card = ({ title, value, badge }) => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-2 min-h-[72px] shadow-sm">

            <div className="flex items-start justify-between gap-1">

                <p className="text-[8px] font-semibold uppercase tracking-wide leading-3 text-gray-500">
                    {title}
                </p>

                {badge && (
                    <span className="rounded-full border border-green-200 bg-green-50 px-1.5 py-0.5 text-[7px] text-green-700 whitespace-nowrap">
                        {badge}
                    </span>
                )}

            </div>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {value}
            </h3>

        </div>
    );
};

export default Administrator_GIS_Bottling_Card;