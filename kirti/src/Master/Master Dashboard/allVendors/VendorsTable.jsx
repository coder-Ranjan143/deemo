import VendorRow from "./VendorRow";

const VendorsTable = ({ records }) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-[#7b1335] to-[#972323] text-white">
            <th className="px-4 py-4 text-left">#</th>
            <th className="px-4 py-4 text-left">Service Type</th>
            <th className="px-4 py-4 text-left">Vendor Name</th>
            <th className="px-4 py-4 text-left">Contact</th>
            <th className="px-4 py-4 text-left">Email</th>
            <th className="px-4 py-4 text-left">Address</th>
            <th className="px-4 py-4 text-left">Active</th>
            <th className="px-4 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {records.map((item) => (
            <VendorRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorsTable;