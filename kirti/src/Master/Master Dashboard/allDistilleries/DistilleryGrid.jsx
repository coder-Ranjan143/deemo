import React from "react";

const DistilleryGrid = ({ records = [] }) => {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#7b1230] text-white">
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">UNIT TYPE</th>
            <th className="px-4 py-3 text-left">LICENSE TYPE</th>
            <th className="px-4 py-3 text-left">LICENSE NO</th>
            <th className="px-4 py-3 text-left">BRANCHES</th>
            <th className="px-4 py-3 text-left">LATITUDE</th>
            <th className="px-4 py-3 text-left">LONGITUDE</th>
            <th className="px-4 py-3 text-left">ADDRESS</th>
            <th className="px-4 py-3 text-left">DISTRICT</th>
            <th className="px-4 py-3 text-center">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {records.length > 0 ? (
            records.map((item, index) => (
              <tr
                key={item.id || index}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-4">{index + 1}</td>

                <td className="px-4 py-4 break-words">
                  {item.unitType}
                </td>

                <td className="px-4 py-4 break-words">
                  {item.licenseType}
                </td>

                <td className="px-4 py-4 break-words">
                  {item.licenseNo}
                </td>

                <td className="px-4 py-4 break-words">
                  {item.branch}
                </td>

                <td className="px-4 py-4">
                  {item.latitude}
                </td>

                <td className="px-4 py-4">
                  {item.longitude}
                </td>

                <td className="px-4 py-4 break-words max-w-xs">
                  {item.address}
                </td>

                <td className="px-4 py-4">
                  {item.district}
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs border border-green-500 text-green-600 rounded-md hover:bg-green-50 transition">
                        Time
                      </button>

                      <button className="px-3 py-1 text-xs border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Edit
                      </button>
                    </div>

                    <button className="px-3 py-1 text-xs border border-red-500 text-red-600 rounded-md hover:bg-red-50 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                className="text-center py-8 text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DistilleryGrid;