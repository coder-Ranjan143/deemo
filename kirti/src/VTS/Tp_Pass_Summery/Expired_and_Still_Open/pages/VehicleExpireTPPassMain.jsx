// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import ExportDropdown from "../component/ExportDropdown";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function VehicleExpireTPPassMain() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">UNIT TYPE</th>
              <th className="p-4 text-left">DISTILLERY NAME Info</th>
              <th className="p-4 text-left">TP TYPE</th>
              <th className="p-4 text-left">TP NO.</th>
              <th className="p-4 text-left">PERMIT GEN.</th>
              <th className="p-4 text-left">PERMIT EXP.</th>
              <th className="p-4 text-left">VEHICLE NO.</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">ELOCK STATUS</th>
              <th className="p-4 text-left">MATCHED PER.</th>
              <th className="p-4 text-left">GPS CORDINATE</th>
              <th className="p-4 text-left">SENDING UNIT</th>
              <th className="p-4 text-left">RECEIVING UNIT</th>
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
                  {item.unitTpe} 
                </td>

                <td className="p-4 text-gray-700">
                  {item.distilleryInfo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tpType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.tpNo}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitGene}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitExp}
                </td>

                <td className="p-4 text-gray-700">
                  {item.vehicleNo}
                </td>

                <td className="p-4 text-green-700 font-semibold">
                  {item.status}
                </td>

                <td className="p-4 text-gray-700">
                  {item.elockStatus}
                </td>

                <td className="p-4 text-gray-700">
                  {item.matchedPercentage}
                </td>

                <td className="p-4 text-gray-700">
                  {item.gpsCordinates}
                </td>

                <td className="p-4 text-gray-700">
                  {item.sendingUnit}
                </td>

                <td className="p-4 text-gray-700">
                  {item.receivingUnit}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className=" hover:bg-green-100 px-4 py-1 border border-green-600 rounded-md text-green-700"
                  >
                    View
                  </button>
                </td>
              

                {/* <td className="p-4">
                  <button
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full"
                  >
                    View
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehicleExpireTPPassMain;