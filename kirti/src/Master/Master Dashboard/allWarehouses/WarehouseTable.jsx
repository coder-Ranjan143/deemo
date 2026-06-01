// src/Master/MasterDashboard/allWarehouses/WarehouseTable.jsx

import React from "react";
import { warehouseData } from "./warehouseData";

const WarehouseTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#7d1f26] text-white uppercase">
            <th className="px-4 py-4 text-left">#</th>
            <th className="px-4 py-4 text-left">Unit Type</th>
            <th className="px-4 py-4 text-left">License Type</th>
            <th className="px-4 py-4 text-left">License No</th>
            <th className="px-4 py-4 text-left">Latitude</th>
            <th className="px-4 py-4 text-left">Longitude</th>
            <th className="px-4 py-4 text-left">Premises Name</th>
            <th className="px-4 py-4 text-left">Address</th>
            <th className="px-4 py-4 text-left">District</th>
            <th className="px-4 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {warehouseData.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-5">{item.id}</td>

              <td className="px-4 py-5 font-medium">
                {item.unitType}
              </td>

              <td className="px-4 py-5">{""}</td>

              <td className="px-4 py-5">
                {item.licenseNo}
              </td>

              <td className="px-4 py-5">
                {item.latitude}
              </td>

              <td className="px-4 py-5">
                {item.longitude}
              </td>

              <td className="px-4 py-5">
                {item.premisesName || ""}
              </td>

              <td className="px-4 py-5 max-w-[450px]">
                {item.address}
              </td>

              <td className="px-4 py-5">
                {item.district}
              </td>

              <td className="px-4 py-5">
                <div className="flex flex-col gap-2 items-center">
                  <button
                    className="
                    border
                    border-blue-500
                    text-blue-600
                    px-4
                    py-1
                    rounded-md
                    hover:bg-blue-50
                    "
                  >
                    Edit
                  </button>

                  <button
                    className="
                    border
                    border-red-500
                    text-red-500
                    px-2
                    py-1
                    rounded-md
                    hover:bg-red-50
                    "
                    
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseTable;