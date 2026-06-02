// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";


function Vehicle_In_Transit() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-800 px-4 py-4 bg-gray-100 border-b">Vehicles In-Transit</h2>
        <table className="w-full border-collapse ">
          <thead className="bg-gray-50 text-gray-600 font-semibold ">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Vehicle No</th>
              <th className="p-4 text-left">Delayed</th>
              <th className="p-4 text-left">Source</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Vendor</th>
              <th className="p-4 text-left">Trip ID</th>
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
                  {item.vehicleNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.delaye}
                </td>

                <td className="p-4 text-gray-700">
                  {item.source}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.driver}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.vendor}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tripId}
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vehicle_In_Transit;