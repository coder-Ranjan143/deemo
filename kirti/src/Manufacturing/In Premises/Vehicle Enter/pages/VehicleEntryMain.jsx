// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";
import ExportDropdown from "../component/ExportDropdown";
import VehicleEntryPage from "./VehicleEntryPage";


import { downloadPDF,downloadExcel } from "../utils/exportFile";

function VehicleEntryMain() {
  const navigate = useNavigate();

  return (
    <>
    
    <div className="p-5 bg-gray-100 min-h-screen">
      <VehicleEntryPage/>
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Distillery Info</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Vegicle No. / TP Pass</th>
              <th className="p-4 text-left">View Image</th>
              <th className="p-4 text-left">Details</th>
              <th className="p-4 text-left">Purpose / Status</th>
              <th className="p-4 text-left">entry / Exit Time</th>
              <th className="p-4 text-left">Event</th>
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
                  {item.distilleryInfo} 
                  <br />
                  <span className="text-xs text-gray-500">{item.date}</span>
                </td>

                <td className="p-4 text-gray-700">
                  {item.category}
                </td>

                <td className="p-4 text-gray-700">
                  <div>
                    <strong>{item.vehicleNo}</strong>
                  </div>
                  <span className="text-xs text-gray-500">{item.tpPass}</span>
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {item.viewImage}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      navigate(`/details/${item.id}`)
                    }
                    className="bg-red-800 hover:bg-red-700 px-4 py-1 rounded-full text-white"
                  >
                    View
                  </button>
                </td>

                <td className="p-4 text-gray-700">
                  {item.pepose}
                  <br />
                  <span className="text-xs text-gray-500">{item.status}</span>
                </td>

                <td className="p-4 text-gray-700">
                  <div>
                    <strong>In:</strong>
                    {item.entry}
                  </div>

                  <div>
                    <strong>Out:</strong>
                    {item.exit}
                  </div>
                </td>
                <td className="p-4 text-gray-700">
                  {item.event}
                  <br />
                  <span className="text-xs text-gray-500">{item.eneter}</span>
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
    </>
  );
}

export default VehicleEntryMain;