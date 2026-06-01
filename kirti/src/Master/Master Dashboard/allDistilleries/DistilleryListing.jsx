import React from "react";
import DistilleryGrid from "./DistilleryGrid";
import distilleryRecords from "./distilleryRecords";

const DistilleryListing = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-4">
        <DistilleryGrid records={distilleryRecords} />
      </div>
    </div>
  );
};

export default DistilleryListing;