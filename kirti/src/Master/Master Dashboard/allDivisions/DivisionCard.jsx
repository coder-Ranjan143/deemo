import {
  Building2,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

import DistrictItem from "./DistrictItem";

const DivisionCard = ({ division }) => {
  return (
    <div className=" bg-white
  rounded-2xl
  border border-[#e5e7eb]
  shadow-[0_2px_8px_rgba(0,0,0,0.05)]
  hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
  transition-all
  duration-300
  p-5
  min-h-[420px]
  flex flex-col">
      <div className="flex justify-between items-center  border-b border-[#ddd5d5] pb-3">
        <h2 className="flex items-center gap-2 text-violet-700 font-semibold">
          <Building2 size={18} />
          {division.name}
        </h2>

        <div className="flex gap-2">
          <Pencil size={18} className="text-blue-500 cursor-pointer" />
          <Trash2 size={18} className="text-red-500 cursor-pointer" />
        </div>
      </div>

      <h3 className="mt-3 mb-2 text-sm font-medium">
        Districts:
      </h3>

      <div className="flex-1 ">
        {division.districts.map((district, index) => (
          <DistrictItem
            key={index}
            district={district}
          />
        ))}
      </div>

      <button className="mt-4 ml-auto flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-full shadow hover:bg-violet-700">
        <Plus size={16} />
        Add District
      </button>
    </div>
  );
};

export default DivisionCard;