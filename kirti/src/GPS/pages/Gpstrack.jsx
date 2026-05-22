// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import GpsData from "../data/GpsData";
import ExportDropdown from "../Component/ExportDropdown";

function Gpstrack() {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#7b1028] text-white">
            <tr>
              <th className="p-4 text-left">Distellery</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Total Issued TP Pass</th>
              <th className="p-4 text-left">Total Matched TP Pass</th>
              <th className="p-4 text-left">Deviation of matched Tp Pass</th>
              <th className="p-4 text-left">Match %</th>
              <th className="p-4 text-left">Deviation %</th>
            </tr>
          </thead>

          <tbody>
            {GpsData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* <td className="p-4">{index + 1}</td> */}

                <td className="p-4 text-gray-700">
                  {item.distillery}
                </td>

                <td className="p-4 text-gray-700">
                  {item.date}
                </td>

                <td className="p-4 text-gray-700">
                  {item.totalIssuedTPpass}
                </td>

                <td className="p-4 text-gray-700">
                  {item.totalMatchTPpass}
                </td>

                <td className="p-4 text-gray-700">
                  {item.deviationOfMatchTPpass}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.match}
                </td>
                <td className="p-4 text-gray-700 ">
                  {item.deviation}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gpstrack;