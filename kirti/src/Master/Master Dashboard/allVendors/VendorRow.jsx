import { SquarePen } from "lucide-react";

const VendorRow = ({ item }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-4">{item.id}</td>
      <td className="px-4 py-4">{item.serviceType}</td>
      <td className="px-4 py-4">{item.vendorName}</td>
      <td className="px-4 py-4">{item.contact}</td>
      <td className="px-4 py-4">{item.email}</td>
      <td className="px-4 py-4">{item.address}</td>

      <td className="px-4 py-4">
        <span className="bg-green-100 text-green-700 text-xs px-4 py-1 rounded-full">
          Active
        </span>
      </td>

      <td className="px-4 py-4">
        <button className="w-9 h-9 border border-blue-400 rounded flex items-center justify-center text-blue-600 hover:bg-blue-50">
          <SquarePen size={17} />
        </button>
      </td>
    </tr>
  );
};

export default VendorRow;