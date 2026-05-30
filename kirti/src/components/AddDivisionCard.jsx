import { Plus } from "lucide-react";

const AddDivisionCard = () => {
  return (
    <div className="bg-white border border-dashed  
  rounded-2xl
  border border-[#e5e7eb]
  shadow-[0_2px_8px_rgba(0,0,0,0.05)]
  hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
  transition-all
  duration-300 min-h-[420px] flex flex-col justify-center items-center p-6">
      <Plus
        size={50}
        className="text-blue-400 mb-3"
      />

      <h2 className="font-semibold text-xl mb-4">
        Add Division
      </h2>

      <input
        type="text"
        placeholder="Division Name"
        className="w-full border rounded px-3 py-2"
      />

      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default AddDivisionCard;