// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";
import ExportDropdown from "../component/ExportDropdown";
import VehicleCountpage from "./VehicleCountpage";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function VehicleCountMain() {
  const navigate = useNavigate();

  return (
    <>
    <VehicleCountpage/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">UNIT TYPE</th>
            <th className="p-3 text-left">DISTILLERY NAME</th>
            <th className="p-3 text-left">VEHICLE NO.</th>
            <th className="p-3 text-left">TP PASS NO.</th>
            <th className="p-3 text-left">PURPOSE</th>
            <th className="p-3 text-left">CAPTURED TIME</th>
            <th className="p-3 text-left">STATUS</th>
            </tr>
          </thead>

          <tbody>
            {CameraData.map((item, index) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50 text-sm"
            >
              <td className="p-3">{item.id}</td>

              <td className="p-3">{item.unitType}</td>

              <td className="p-3 max-w-[350px]">
                {item.distilleryName}
              </td>

              <td className="p-3">
                {item.vehicleNo}
              </td>

              <td className="p-3">
                {item.tpPassNo}
              </td>

              <td className="p-3">
                {item.pupose}
              </td>

              <td className="p-3">
                {item.capturedTime}
              </td>

              <td className="p-3">
                {item.status}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default VehicleCountMain;