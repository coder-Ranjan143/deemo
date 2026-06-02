import {
  Filter,
  Plus,
  FileSpreadsheet,
  ArrowLeft,
} from "lucide-react";

const VendorsToolbar = () => {
  return (
    <div className="flex justify-end gap-3 mb-5">
      <button className="w-10 h-10 rounded border border-purple-400 flex items-center justify-center text-purple-600 bg-purple-50">
        <Filter size={18} />
      </button>

      <button className="w-10 h-10 rounded border border-green-400 flex items-center justify-center text-green-600 bg-green-50">
        <Plus size={18} />
      </button>

      <button className="w-10 h-10 rounded border border-blue-400 flex items-center justify-center text-blue-600 bg-blue-50">
        <FileSpreadsheet size={18} />
      </button>

      <button className="w-10 h-10 rounded border border-gray-400 flex items-center justify-center text-gray-700 bg-gray-50">
        <ArrowLeft size={18} />
      </button>
    </div>
  );
};

export default VendorsToolbar;