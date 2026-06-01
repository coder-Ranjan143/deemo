// src/Master/MasterDashboard/allWarehouses/AllWarehouses.jsx

import React from "react";
import WarehouseTable from "./WarehouseTable";

const AllWarehouses = () => {
  return (
    <div className="p-6 bg-[#f5f7fb] min-h-screen">
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          All Warehouses
        </h2>

        <WarehouseTable />
      </div>
    </div>
  );
};

export default AllWarehouses;