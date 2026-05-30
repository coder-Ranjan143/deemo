import { MapPin, Pencil, Trash2 } from "lucide-react";

const DistrictItem = ({ district }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-violet-500" />

        <span className="bg-violet-50 text-violet-600 px-2 py-1 rounded text-xs">
          {district}
        </span>
      </div>

      <div className="flex gap-2">
        <Pencil size={16} className="text-blue-500 cursor-pointer" />
        <Trash2 size={16} className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default DistrictItem;