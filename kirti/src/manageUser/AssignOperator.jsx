import React, { useState } from "react";

const AssignOperator = () => {
  const [selectedGroups, setSelectedGroups] = useState([]);

  const groups = [
    "Vindhyachal Distilleries Pvt",
    "Som Distilleries Private Limited (Rojrachak)",
    "Agrawal Distilleries Private Limited",
    "Gwalior Distilleries Didee Etawah Road Bhind",
    "Jagpin Breweries Limited",
    "Oasis Distilleries Limited",
    "Great Galleon Ventures Limited",
    "Bapuna Alcobrew, GWL",
    "Som Distilleries Private Limited (Sehatganj)",
    "Associated Alcohols And Breweries Limited (Rewa)",
    "Associated Alcohols And Breweries Limited (Khargone)",
    "Mount Everest Breweries Limited",
    "MP Beer Products Limited",
    "DCR Distillery Pvt Limited",
    "Gulshan Polyols Limited",
    "Allied Blenders & Distillers Limited",
    "Regentbeer",
    "JK Liquors Pvt Ltd",
    "Simran Industries",
  ];

  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedGroups(values);
  };

  const handleSubmit = () => {
    console.log(selectedGroups);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="w-full h-[450px] max-w-4xl bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-6  m-6 border-b  border-gray-400">
          <h2 className="text-3xl font-bold text-gray-800">
            Assign Groups to:
            <span className="text-indigo-700 ml-2">
              Abhijeet Agarwal
            </span>
          </h2>

          <button className="border px-4 py-2 rounded text-gray-600">
            ← BACK
          </button>
        </div>

        <div className="p-6">
          <label className="block mb-3 font-medium text-gray-600">
            Select Distillery Groups
          </label>

          <select
            multiple
            value={selectedGroups}
            onChange={handleChange}
            className="w-full h-30 border border-gray-400 rounded-md p-2"
          >
            {groups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>

          <p className="text-sm text-gray-500 mt-2">
            Hold Ctrl (Windows) or Command (Mac) to select multiple groups.
          </p>
        </div>

        <div className="flex justify-end gap-3 p-5 ">
          <button className="px-5 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-indigo-600 text-white rounded"
          >
            Assign Groups
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignOperator;