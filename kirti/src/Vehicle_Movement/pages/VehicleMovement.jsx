// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleMovementData from "../data/VehicleMovementData";
import ExportDropdown from "../Component/ExportDropdown";

function VehicleMovement() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">SN</th>
              <th className="p-4 text-left">GROUP NAME</th>
              <th className="p-4 text-left">GRAND TOTAL</th>
              <th className="p-4 text-left">TOTAL ENTRY</th>
              <th className="p-4 text-left">TOTAL EXIT</th>
              <th className="p-4 text-left">TOTAL MODIFIED</th>
            </tr>
          </thead>

          <tbody>
            {VehicleMovementData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 text-gray-700">
                  {item.groupName}
                </td>

                <td className="p-4 text-gray-700">
                  {item.grandTotal}
                </td>

                <td className="p-4 text-gray-700">
                  {item.totalEntry}
                </td>

                <td className="p-4 text-gray-700">
                  {item.totalExit}
                </td>

                <td className="p-4 text-gray-700">
                  {item.totalModified}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehicleMovement;