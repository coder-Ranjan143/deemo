// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import AlertData from "../data/AlertData";
import ExportDropdown from "../component/ExportDropdown";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function AlertTablePage() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">UNIT TYPE</th>
              <th className="p-4 text-left">DISTILLERY NAME</th>
              <th className="p-4 text-left">TYPE</th>
              <th className="p-4 text-left">HANDLE BY</th>
              <th className="p-4 text-left">DESCRIPTION</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">CLOSED BY</th>
              <th className="p-4 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {AlertData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{item.cn}</td>

                <td className="p-4 text-gray-700">
                  {item.unitType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.distilleryName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.type}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {item.handleBy}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {item.description}
                </td>
              
                <td className="p-4">
                  <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {item.closedBy}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlertTablePage;