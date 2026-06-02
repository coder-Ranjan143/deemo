// src/Master/Master Dashboard/distilleryGroups/AssignGuard.jsx

import { useState } from "react";

const guards = [
  "Simran Industries",
  "Hoshangabad Guard Squad",
  "Central Security Services",
  "Rapid Response Guard",
];

const AssignGuard = ({ group, onClose }) => {
  const [selectedGuard, setSelectedGuard] = useState(guards[0]);

  return (
    <div className="w-full h-full bg-[#f4f5f7]">
      <div className="w-full h-full bg-white border border-gray-200 shadow-sm overflow-auto">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Assign Guard to: {group.groupName}
            </h1>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Back
          </button>
        </div>

        <div className="p-6">
          <div className="grid gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Select Guard
              </label>
              <select
                value={selectedGuard}
                onChange={(e) => setSelectedGuard(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              >
                {guards.map((guard) => (
                  <option key={guard} value={guard}>
                    {guard}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-red-700 px-5 py-2 text-sm font-medium text-white hover:bg-red-800"
              >
                Assign Guard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignGuard;
