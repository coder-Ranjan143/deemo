// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import UnauthorizedVehiclePage4 from "./UnauthorizedvehiclePage4";

import { downloadPDF,downloadExcel } from "../utils/exportFile";

function UnauthorizedVehicle4() {
  const navigate = useNavigate();

  return (
    <>
    <UnauthorizedVehiclePage4/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">UNIT TYPE</th>
              <th className="p-4 text-left">DISTILLERY NAME</th>
              <th className="p-4 text-left">CAMERA NAME</th>
              <th className="p-4 text-left">EVENT TYPE</th>
              <th className="p-4 text-left">EVENT IMAGES</th>
              <th className="p-4 text-left">EVENT SNAPSHOT</th>
              <th className="p-4 text-left">AUTHORIZED STATUS</th>
              <th className="p-4 text-left">CREATED AT</th>
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
                  {item.cameraName}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {item.eventType}
                </td>

                <td className="p-4">{item.eventImage}</td>

                <td className="p-4">{item.eventSnapshot}</td>

                <td className="p-4">
                  <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>

                <td className="p-4">{item.createdAt}</td>

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
    </>
  );
}

export default UnauthorizedVehicle4;