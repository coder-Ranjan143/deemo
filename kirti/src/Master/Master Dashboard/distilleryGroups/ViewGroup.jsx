// src/Master/Master Dashboard/distilleryGroups/ViewGroup.jsx

import { ArrowLeft } from "lucide-react";

const ViewGroup = ({ group, onClose }) => {
  if (!group) return null;

  return (
    <div className="min-h-screen bg-[#f5f6f8] px-12 py-5">
      <div className="w-full bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6">
          <h2 className="text-[20px] font-semibold text-[#1f2937]">
            Assign Guard to: {group.groupName}
          </h2>

          <button
            onClick={onClose}
            className="flex items-center gap-2 h-[40px] px-4 border border-[#d1d5db] rounded-md bg-white text-[13px] text-[#4b5563]"
          >
            <ArrowLeft size={14} />
            BACK
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5e7eb]" />

        {/* Content */}
        <div className="px-5 pt-6 pb-5">

          {/* Select */}
          <div className="max-w-[1020px]">
            <label className="block text-[14px] font-medium text-[#374151] mb-3">
              Select Guard
            </label>

            <select
              className="
                w-full
                h-[36px]
                border
                border-[#d1d5db]
                rounded
                px-3
                text-[14px]
                text-[#4b5563]
                bg-white
                outline-none
              "
            >
              <option>{group.groupName}</option>
              <option>Simran Industries</option>
              <option>ABC Distillery</option>
              <option>XYZ Distillery</option>
            </select>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 mt-10">
            <button
              onClick={onClose}
              className="
                h-[36px]
                px-5
                border
                border-[#cfcfcf]
                rounded
                bg-white
                text-[14px]
                text-[#4b5563]
              "
            >
              Cancel
            </button>

            <button
              className="
                h-[36px]
                px-5
                rounded
                bg-[#9d1d1d]
                hover:bg-[#861717]
                text-white
                text-[14px]
                font-medium
              "
            >
              Assign Guard
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewGroup;