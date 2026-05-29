import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FilterSection() {
  const [showDateRange, setShowDateRange] = useState(false);

  const dateButtons = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex flex-wrap gap-4 items-center">

        {/* Select Group */}
        <select className="w-full md:w-[330px] border border-gray-300 rounded-lg px-4 py-3 outline-none">
          <option>Select Group</option>
          <option>Group 1</option>
          <option>Group 2</option>
        </select>

        {/* Distillery */}
        <select className="w-full md:w-[180px] border border-gray-300 rounded-lg px-4 py-3 outline-none">
          <option>Select Distillery</option>
          <option>Distillery 1</option>
          <option>Distillery 2</option>
        </select>

        {/* Date Buttons + Toggle */}
        <div className="flex flex-wrap gap-3 items-center">

          {dateButtons.map((item, index) => (
            <button
              key={index}
              className="border border-[#d9534f] text-[#d9534f] px-5 py-2 rounded-lg hover:bg-red-50"
            >
              {item}
            </button>
          ))}

          {/* Plus / Minus Toggle Button */}
          <button
            onClick={() => setShowDateRange(!showDateRange)}
            className="w-11 h-11 border border-[#d9534f] text-[#d9534f] rounded-lg flex items-center justify-center hover:bg-red-50"
          >
            {showDateRange ? <Minus size={18} /> : <Plus size={18} />}
          </button>

          {/* Date Range Picker */}
          {showDateRange && (
            <div className="flex flex-wrap gap-3 items-center bg-black-50 rounded-xl">
              <div className="flex flex-col">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Apply / Reset */}
        <div className="flex gap-3">
          <button className="bg-[#d9534f] text-white px-6 py-2 rounded-lg">
            Apply
          </button>

          <button className="border border-[#d9534f] text-[#d9534f] px-6 py-2 rounded-lg">
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default FilterSection;