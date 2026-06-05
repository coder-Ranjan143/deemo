import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CircleAlert,
  Download,
  Filter,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";




const VtsElockTrip = () => {

  const navigate = useNavigate();
  return (
    <>
 <Header/>
    <Navbar/>

    <div className="p-6 mt-35">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <h2 className="text-xl font-bold text-blue-700">
            Trips Grouped by Vehicle
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {/* Active Filter */}
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-md px-4 py-2 shadow-sm">
              <div className="bg-blue-600 p-1.5 rounded-full">
                <CircleAlert className="text-white size-4" />
              </div>

              <span>
                <strong>Active Filter:</strong> Today (29-May-2026 04:52 PM)
              </span>
            </div>

            {/* Export Button */}
            <div className="inline-block relative">
              <select
                name="perPage"
                className="appearance-none w-full text-sm text-red-700 border border-red-600 rounded-md bg-white px-4 py-2 pr-10 hover:bg-red-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600"
              >
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 border border-red-700 text-red-700 px-4 py-2  text-sm rounded-md hover:bg-red-50 transition shadow-sm">
              <Filter size={16} />
              Filter
            </button>

            {/* Back Button */}
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm ">
              <ArrowLeft size={16} />
              BACK
            </button>
          </div>
        </div>

        <div className="mb-8 border border-gray-200 rounded-lg shadow-md">
          <div className="bg-gray-100 px-4 py-2 font-semibold text-lg text-blue-800 border-b  ">
            {" "}
            1. Vehicale:MP17ZJ5{" "}
            <span className="text-sm text-gray-500 ml-2">(Total Trip: 1)</span>
          </div>

          <div className="overflow-x-auto">
            <table className=" w-full text-sm text-left">
              <thead className="bg-[#7f1d1d] text-white uppercase text-xs">
                <tr>
                  <th className="px-4 py-4 text-left">#</th>
                  <th className="px-4 py-4 text-left">Trip ID</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-left">Start Time</th>
                  <th className="px-4 py-4 text-left">Permit Validity</th>
                  <th className="px-4 py-4 text-left">Sending Unit</th>
                  <th className="px-4 py-4 text-left">Receiving Unit</th>
                  <th className="px-4 py-4 text-left">Progress</th>
                  <th className="px-4 py-4 text-left">Passes</th>
                  <th className="px-4 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">1</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    1123524
                  </td>
                  <td className="px-4 py-3 ">
                    {" "}
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700">
                      {" "}
                      Open
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">12:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-blue-100 text-blue-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-green-100 text-green-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="w-12 h-12 rounded-full border-6 border-gray-300 flex items-center justify-center mx-auto">
                      <span className="text-xs font-light font-bold">0 %</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <a
                      href=""
                      className="inline-block text-blue-600 font-medium hover:underline"
                    >
                      {" "}
                      T/ASSO/CWH/CS/2026-2027/090595
                    </a>
                  </td>

                  <td className="px-4 py-3 text-center ">
                    {" "}
                    <button     onClick={() => navigate("/vts/gps/id")}
                      className="bg-indigo-600 hover:bg-indigo-700  cursor-pointer  text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition" > Track</button>
                    {/* <a
                      href=""


                    >
                      {" "}
                      Track
                    </a> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="mb-8 border border-gray-200 rounded-lg shadow-md">
          <div className="bg-gray-100 px-4 py-2 font-semibold text-lg text-blue-800 border-b  ">
            {" "}
            1. Vehicale:MP17ZJ5{" "}
            <span className="text-sm text-gray-500 ml-2">(Total Trip: 1)</span>
          </div>

          <div className="overflow-x-auto">
            <table className=" w-full text-sm text-left">
              <thead className="bg-[#7f1d1d] text-white uppercase text-xs">
                <tr>
                  <th className="px-4 py-4 text-left">#</th>
                  <th className="px-4 py-4 text-left">Trip ID</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-left">Start Time</th>
                  <th className="px-4 py-4 text-left">Permit Validity</th>
                  <th className="px-4 py-4 text-left">Sending Unit</th>
                  <th className="px-4 py-4 text-left">Receiving Unit</th>
                  <th className="px-4 py-4 text-left">Progress</th>
                  <th className="px-4 py-4 text-left">Passes</th>
                  <th className="px-4 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">1</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    1123524
                  </td>
                  <td className="px-4 py-3 ">
                    {" "}
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700">
                      {" "}
                      Open
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">12:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-blue-100 text-blue-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-green-100 text-green-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="w-12 h-12 rounded-full border-6 border-gray-300 flex items-center justify-center mx-auto">
                      <span className="text-xs font-light font-bold">0 %</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <a
                      href=""
                      className="inline-block text-blue-600 font-medium hover:underline"
                    >
                      {" "}
                      T/ASSO/CWH/CS/2026-2027/090595
                    </a>
                  </td>

                  <td className="px-4 py-3 text-center ">
                    {" "}
                    <a
                      href=""
                      className="bg-indigo-600 hover:bg-indigo-700  text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition"
                    >
                      {" "}
                      Track
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8 border border-gray-200 rounded-lg shadow-md">
          <div className="bg-gray-100 px-4 py-2 font-semibold text-lg text-blue-800 border-b  ">
            {" "}
            1. Vehicale:MP17ZJ5{" "}
            <span className="text-sm text-gray-500 ml-2">(Total Trip: 1)</span>
          </div>

          <div className="overflow-x-auto">
            <table className=" w-full text-sm text-left">
              <thead className="bg-[#7f1d1d] text-white uppercase text-xs">
                <tr>
                  <th className="px-4 py-4 text-left">#</th>
                  <th className="px-4 py-4 text-left">Trip ID</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-left">Start Time</th>
                  <th className="px-4 py-4 text-left">Permit Validity</th>
                  <th className="px-4 py-4 text-left">Sending Unit</th>
                  <th className="px-4 py-4 text-left">Receiving Unit</th>
                  <th className="px-4 py-4 text-left">Progress</th>
                  <th className="px-4 py-4 text-left">Passes</th>
                  <th className="px-4 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">1</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    1123524
                  </td>
                  <td className="px-4 py-3 ">
                    {" "}
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700">
                      {" "}
                      Open
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">12:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <div className="text-xs text-gray-500">30-May-2026</div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-blue-100 text-blue-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <span className=" inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold  bg-green-100 text-green-700">
                      {" "}
                      rjfhsdfjgbjdfbjkdfhjkghjkfdhgkjsdhfkghfdbhgjskdf
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="w-12 h-12 rounded-full border-6 border-gray-300 flex items-center justify-center mx-auto">
                      <span className="text-xs font-light font-bold">0 %</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 ">
                    {" "}
                    <div className="font-medium text-gray-800">3:00 PM</div>
                    <a
                      href=""
                      className="inline-block text-blue-600 font-medium hover:underline"
                    >
                      {" "}
                      T/ASSO/CWH/CS/2026-2027/090595
                    </a>
                  </td>

                  <td className="px-4 py-3 text-center ">
                    {" "}
                    <a
                      href=""
                      className="bg-indigo-600 hover:bg-indigo-700  text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition"
                    >
                      {" "}
                      Track
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VtsElockTrip;
