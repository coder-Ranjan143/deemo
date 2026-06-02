import hopePointsRecords from "./hopePointsRecords";

const HopePointsTable = () => {
  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  const handleDelete = (row) => {
    console.log("Delete:", row);
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f5f7] p-5">
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead>
              <tr className="bg-[#312783] text-white">
                <th className="px-4 py-3 text-center text-sm font-semibold w-16">
                  #
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Address
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Latitude
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Longitude
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold w-44">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {hopePointsRecords.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-5 text-center text-gray-700">
                    {item.id}
                  </td>

                  <td className="px-4 py-5 text-gray-700 text-sm uppercase">
                    {item.address}
                  </td>

                  <td className="px-4 py-5 text-center text-gray-700 text-sm">
                    {item.latitude}
                  </td>

                  <td className="px-4 py-5 text-center text-gray-700 text-sm">
                    {item.longitude}
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex justify-center gap-2">
                      
                      <button
                        onClick={() => handleEdit(item)}
                        className="
                          px-4
                          py-1.5
                          text-sm
                          border
                          border-blue-500
                          text-blue-500
                          rounded-md
                          hover:bg-blue-50
                          transition
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item)}
                        className="
                          px-4
                          py-1.5
                          text-sm
                          border
                          border-red-500
                          text-red-500
                          rounded-md
                          hover:bg-red-50
                          transition
                        "
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default HopePointsTable;