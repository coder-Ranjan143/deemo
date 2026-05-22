// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";
import ExportDropdown from "../component/ExportDropdown";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function Dis_Camera() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#7b1028] text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">UNIT NAME</th>
              <th className="p-4 text-left">CAMERA TYPE</th>
              <th className="p-4 text-left">CAMERA NAME</th>
              <th className="p-4 text-left">ACTIVE DURATION</th>
              <th className="p-4 text-left">INACTIVE DURATION</th>
              <th className="p-4 text-left">INACTIVE %</th>
            </tr>
          </thead>

          <tbody>
            {CameraData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 text-gray-700">
                  {item.unitName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.cameraType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.cameraName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.activeDuration}
                </td>

                <td className="p-4 text-gray-700">
                  {item.InactiveDuration}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.Inactive}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dis_Camera;