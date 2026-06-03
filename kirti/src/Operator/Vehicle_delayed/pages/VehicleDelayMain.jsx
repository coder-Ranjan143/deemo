// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import VehicleDelayPage from "./VehicleDelayPage";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function VehicleDelayMain() {
  const navigate = useNavigate();

  return (

    <>
    <VehicleDelayPage/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Alert No</th>
              <th className="p-4 text-left">Distillery</th>
              <th className="p-4 text-left">Tp Pass No</th>
              <th className="p-4 text-left">Vehicle No</th>
              <th className="p-4 text-left">Sending Unit</th>
              <th className="p-4 text-left">Receiving Unit</th>
              <th className="p-4 text-left">Description</th>
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
                  {item.alertNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.distilleryName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tpPassNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.vehicleNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.sendingUnit}
                </td>

                <td className="p-4 text-gray-700">
                  {item.receivingUnit}
                </td>

                <td className="p-4 text-gray-700">
                  {item.description}
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

export default VehicleDelayMain;