// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";
import ExportDropdown from "../component/ExportDropdown";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function DownTimeCamera() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">UNIT TYPE</th>
            <th className="p-3 text-left">DISTILLERY NAME</th>
            <th className="p-3 text-left">CAMERA NAME</th>
            <th className="p-3 text-left">CRITICALITY</th>
            <th className="p-3 text-left">DOWN TIME</th>
            <th className="p-3 text-left">TOTAL DOWN TIME</th>
            <th className="p-3 text-left">MAX DOWN TIME</th>
            <th className="p-3 text-left">CATEGORY</th>
            <th className="p-3 text-left">LAST DOWN AT</th>
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
                {item.cameraName}
              </td>

              <td className="p-3">
                {item.criticality}
              </td>

              <td className="p-3">
                {item.downCount}
              </td>

              <td className="p-3">
                {item.totalDownTime}
              </td>

              <td className="p-3">
                {item.maxDownTime}
              </td>

              <td className="p-3">
                {item.category}
              </td>

              <td className="p-3">
                {item.lastDownTown}
              </td>

              
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DownTimeCamera;