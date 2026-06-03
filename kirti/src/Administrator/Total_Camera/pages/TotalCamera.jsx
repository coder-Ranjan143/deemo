// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";
import ExportDropdown from "../component/ExportDropdown";
import TotalCamera_page from "./TotalCamera_page";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function Dis_Camera() {
  const navigate = useNavigate();

  return (
    <>
    <TotalCamera_page/>
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
            <th className="p-3 text-left">STATUS</th>
            <th className="p-3 text-left">LAST ON</th>
            <th className="p-3 text-left">LAST OFF</th>
            <th className="p-3 text-left">ACTION</th>
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
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.status === "ON"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-3">{item.lastOn}</td>

              <td className="p-3">{item.lastOff}</td>

              <td className="p-3">
                <button 
                onClick={() =>
                      navigate(`/details/${item.id}`)
                    } className="border border-green-600 text-green-700 px-4 py-1 rounded-md hover:bg-green-100">
                  View
                </button>
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

export default Dis_Camera;