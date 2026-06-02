// src/Master/Master Dashboard/distilleryGroups/EditGroup.jsx

import React, { useState } from "react";

const EditGroup = ({ onCancel, onUpdate }) => {
  const [groupName, setGroupName] = useState("Simran Industries");

  const [selectedDistilleries, setSelectedDistilleries] = useState([
    "M/s Simran Industries, 91 Industrial Area, Kheda Itarsi, District Hoshangabad",
    "M/s Simran Industries, 91 Industrial Area, Kheda Itarsi, District Hoshangabad",
    "M/s Simran Industries (FL-9/9A), 91 Area, Kheda Itarsi, District Hoshangabad",
  ]);

  const removeDistillery = (index) => {
    setSelectedDistilleries(
      selectedDistilleries.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="w-full h-full bg-[#f4f5f7]">
      <div className="w-full h-full bg-white border border-gray-200 shadow-sm overflow-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">
            Edit Group
          </h1>

          <button
            onClick={onCancel}
            className="
            px-4
            py-2
            text-sm
            border
            border-red-300
            text-red-500
            rounded-md
            hover:bg-red-50
            "
          >
            Cancel
          </button>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Group Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Group Name
              </label>

              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="
                w-full
                h-11
                px-3
                border
                border-gray-300
                rounded-md
                focus:outline-none
                focus:ring-1
                focus:ring-red-400
                "
              />
            </div>

            {/* Distillery List */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Select Distilleries
              </label>

              <div
                className="
                border
                border-gray-300
                rounded-md
                min-h-[120px]
                p-2
                bg-white
                "
              >
                <div className="flex flex-col gap-2">
                  {selectedDistilleries.map((item, index) => (
                    <div
                      key={index}
                      className="
                      flex
                      items-center
                      bg-gray-100
                      border
                      border-gray-300
                      rounded
                      px-2
                      py-2
                      text-sm
                      text-gray-700
                      "
                    >
                      <button
                        type="button"
                        onClick={() => removeDistillery(index)}
                        className="
                        mr-2
                        font-bold
                        text-gray-500
                        hover:text-red-500
                        "
                      >
                        ✕
                      </button>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Update Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={onUpdate}
              className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-8
              py-2.5
              rounded-md
              font-medium
              "
            >
              Update
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditGroup;