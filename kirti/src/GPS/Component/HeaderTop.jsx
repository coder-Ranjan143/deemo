import React from "react";
import { useState } from "react";
import { Filter, ArrowLeft, ChevronDown } from "lucide-react";
import ExportDropdown from "./ExportDropdown";

function HeaderTop({ showFilter, setShowFilter }) {

  const [showLimit, setShowLimit] =
    useState(false);

  const [limit, setLimit] =
    useState(25);


  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <h1 className="text-2xl font-bold text-gray-800 ">
        GPS
      </h1>

      <div className="flex flex-wrap gap-3 items-center">
        {/* Active Filter */}
        <div className="bg-[#eef4ff] border border-[#cfdcff] px-4 py-2 rounded-lg text-[#4b5aa7] text-sm font-medium">
          Active Filter : Today (18-May-2026 01:31 PM)
        </div>

        {/* Export Component */}

        <ExportDropdown />


        {/* Limit */}

        <div className="relative text-red-700 border border-[#d9534f] rounded-lg">

          <button
            onClick={() =>
              setShowLimit(!showLimit)
            }
            className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-lg hover:bg-red-50"
          >
            {limit}
            <ChevronDown size={16} />
          </button>

          {showLimit && (
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg z-50">

              {[25, 50, 100].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setLimit(item);
                      setShowLimit(
                        false
                      );
                    }}
                    className="w-full text-red-700 text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                )
              )}

            </div>
          )}

        </div>

        {/* Filter */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 border border-[#d9534f] text-[#d9534f] px-4 py-2 rounded-lg hover:bg-red-50"
        >
          <Filter size={18} />
          Filter
        </button>

        {/* Back */}
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-50">
          <ArrowLeft size={18} />
          BACK
        </button>
      </div>
    </div>
  );
}

export default HeaderTop;