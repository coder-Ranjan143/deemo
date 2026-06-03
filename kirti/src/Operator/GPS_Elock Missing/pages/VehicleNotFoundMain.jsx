// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import VehicleNotFoundPage from "./VehicleNotFoundPage";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function VehicleNotFoundMain() {
  const navigate = useNavigate();

  return (
    <>
    <VehicleNotFoundPage/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">UNIT TYPE</th>
              <th className="p-4 text-left">DISTILLERY NAME</th>
              <th className="p-4 text-left">TP TYPE</th>
              <th className="p-4 text-left">TP NO.</th>
              <th className="p-4 text-left">PERMIT GEN.</th>
              <th className="p-4 text-left">PERMIT EXP.</th>
              <th className="p-4 text-left">VEHICLE NO.</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {VehicleData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 text-gray-700">
                  {item.unitType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.distilleryName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tpType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tpNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitgen}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitExp}
                </td>

                <td className="p-4 text-gray-700">
                  {item.vehicleNo}
                </td>

                <td className="p-4 text-semibold text-green-700">
                  {item.status}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full border border-gray-500"
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
    </>
  );
}

export default VehicleNotFoundMain;