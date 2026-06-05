// pages/UnauthorizedVehicle.jsx   --- Table

import React from "react";
import { useNavigate } from "react-router-dom";
import CallData from "../data/CallData";
import ExportDropdown from "../component/ExportDropdown";
import CallCenterPage  from "../pages/CallCenterPage"



import { downloadPDF,downloadExcel } from "../utils/exportFile";

function Call_center_Main() {
  const navigate = useNavigate();

  return (
    <>
    <CallCenterPage/>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">CALLER TYPE</th>
              <th className="p-4 text-left">NAME</th>
              <th className="p-4 text-left">MOBILE</th>
              <th className="p-4 text-left">DESCRIPTION</th>
              <th className="p-4 text-left">LOCATION</th>
              <th className="p-4 text-left">STATUS</th>
              <th className="p-4 text-left">CREATED AT</th>
              
            </tr>
          </thead>

          <tbody>
            {CallData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 text-gray-700">
                  {item.callerType}
                </td>

                <td className="p-4 text-gray-700">
                  {item.name}
                </td>

                <td className="p-4 text-gray-700">
                  {item.mobile}
                </td>

                <td className="p-4 text-gray-700">
                  {item.description}
                </td>

                <td className="p-4 text-gray-700">
                  {item.location}
                </td>

                <td className="p-4 text-gray-700 ">
                  {item.status}
                </td>

                <td className="p-4">{item.createdAt}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Call_center_Main;