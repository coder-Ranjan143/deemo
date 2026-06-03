// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";
import ExportDropdown from "../component/ExportDropdown";
import ManufacturingUnitPage from "./ManufacturingUnitPage";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function ManufacturingUnitMain() {
  const navigate = useNavigate();

  return (
    <>
    <ManufacturingUnitPage/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">UNIT TYPE</th>
            <th className="p-3 text-left">DISTILLERY NAME</th>
            <th className="p-3 text-left">DATE</th>
            <th className="p-3 text-left">OPEN TIME</th>
            <th className="p-3 text-left">CLOSE TIME</th>
            <th className="p-3 text-left">WORKING HOURS</th>
            
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
                {item.date}
              </td>

              <td className="p-3">
                {item.openTime}
              </td>

              <td className="p-3">
                {item.closeTime}
              </td>

              <td className="p-3">
                {item.workingHours}
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

export default ManufacturingUnitMain;