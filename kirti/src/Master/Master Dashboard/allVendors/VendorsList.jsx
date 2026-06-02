import VendorsToolbar from "./VendorsToolbar";
import VendorsTable from "./VendorsTable";
import { vendorRecords } from "./vendorRecords";

const VendorsList = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] p-10">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        
        <div className="p-5 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-[38px] font-bold text-[#1f2937]">
              Vendors List
            </h1>

            <VendorsToolbar />
          </div>
        </div>

        <div className="p-5">
          <VendorsTable records={vendorRecords} />
        </div>
      </div>
    </div>
  );
};

export default VendorsList;