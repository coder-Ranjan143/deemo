// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import ExportDropdown from "../component/ExportDropdown";
import VehicleRunnigExpirePassPage from "./VehicleRunningExpirePassPage";


import { downloadPDF, downloadExcel } from "../utils/exportFile";

function VehicleRunningExpirePassMain() {
  const navigate = useNavigate();

  return (
    <>
    <div className="p-5 bg-gray-100 min-h-screen">
      <VehicleRunnigExpirePassPage/>
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Vehicle No</th>
              <th className="p-4 text-left">Trip ID</th>
              <th className="p-4 text-left">TP Number</th>
              <th className="p-4 text-left">Permit Generate time</th>
              <th className="p-4 text-left">Permit Validity Time</th>
              <th className="p-4 text-left">Driver Name</th>
              <th className="p-4 text-left">Trip Details</th>
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
                  {item.tripid}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.tpno}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitGenerateTime}
                </td>

                <td className="p-4 text-gray-700">
                  {item.permitvalidityTime}
                </td>

                <td className="p-4 text-gray-700">
                  {item.drivername}
                </td>

                <td className="p-4">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className={`px-4 py-1 rounded-full text-white ${
                      item.tripDetails === "View Elock"
                        ? "bg-red-800 hover:bg-red-700"
                        : "bg-blue-700 hover:bg-blue-600"
                    }`}
                  >
                    {item.tripDetails === "View Elock" ? "View Elock" : "View GPS"}
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

export default VehicleRunningExpirePassMain;
