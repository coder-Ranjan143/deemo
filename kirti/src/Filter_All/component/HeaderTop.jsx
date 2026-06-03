import React from "react";
import { useState } from "react";
import { Filter, ArrowLeft, ChevronDown } from "lucide-react";
// import ExportDropdown from "./ExportDropdown";

function HeaderTop({ showFilter, setShowFilter }) {

  const [showLimit, setShowLimit] =
    useState(false);

  const [limit, setLimit] =
    useState(25);


  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
      <h1 className="text-2xl font-bold text-blue-700">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-3 items-center">
        {/* Active Filter */}
        <div className="bg-[#eef4ff] border border-[#cfdcff] px-4 py-2 rounded-lg text-[#4b5aa7] text-sm font-medium">
          Active Filter : Today (18-May-2026 01:31 PM)
        </div>

        {/* Export Component */}

        {/* <ExportDropdown /> */}


        {/* Limit */}

       

        {/* Filter */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 border border-[#d9534f] text-[#d9534f] px-4 py-2 rounded-lg hover:bg-red-50"
        >
          <Filter size={18} />
          Filter
        </button>

        {/* Back */}
        
      </div>
    </div>
  );
}

export default HeaderTop;