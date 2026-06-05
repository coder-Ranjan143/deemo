
import React from "react";
import {
  Folder,
  Home,
  Upload,
  FolderPlus,
  CornerUpLeft,
  RefreshCw,
  CheckSquare,
  Trash2,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const folders = [
  "Executive",
  "Administrator",
  "L1",
  "L3",
  "L2",
  "L1",
  "L1",
];


const DocumentMngt = () => {
 return (
<>
  <Header/>
  <Navbar/>
    <div className="flex bg-gray-100 min-h-screen mt-30">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-300">
        <div className="p-4 ">
          <h2 className="font-bold text-lg flex items-center gap-2 font-medium text-gray-600">
            <Folder className="text-yellow-500 fill-yellow-400 " size={20} />
            Folders
          </h2>
        </div>

        <div className="p-3 space-y-2">
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <Folder className="text-yellow-500 fill-yellow-400" size={18} />
            <span>All Folders</span>
          </div>

          {folders.map((folder, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <Folder className="text-yellow-500 fill-yellow-400" size={18} />
              <span>{folder}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button className="flex items-center gap-2 border px-4 py-2 rounded border-gray-400 bg-white hover:bg-gray-50">
            <Home size={16} className="text-purple-600 " />
            Home
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded  border-gray-400  bg-white hover:bg-gray-50">
            <Upload size={16} className="text-purple-600 " />
            Upload
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded  border-gray-400   bg-white hover:bg-gray-50">
            <FolderPlus size={16} className="text-purple-600 "   />
            New Folder
          </button>

          <button className="flex items-center gap-2 border px-4 py-2  rounded border-gray-400   bg-white hover:bg-gray-50">
            <CornerUpLeft size={16} className="text-purple-600 "  />
            Up One Level
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded border-gray-400   bg-white hover:bg-gray-50">
            <RefreshCw size={16} className="text-purple-600 "  />
            Reload
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded border-gray-400   bg-white hover:bg-gray-50">
            <CheckSquare size={16}  className="text-purple-600 " />
            Select All
          </button>

          <button className="flex items-center gap-2 border px-4 py-2 rounded border-gray-400   bg-white hover:bg-gray-50">
            <Trash2 size={16}  className="text-purple-600 "/>
            View Trash
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden border-gray-200 border-2">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr className="text-left text-gray-500 text-xs font-semibold  font-thin uppercase">
                <th className="px-6 py-4">NAME</th>
                <th className="px-6 py-4">SIZE</th>
                <th className="px-6 py-4">MODIFIED</th>
                <th className="px-6 py-4">TYPE</th>
                <th className="px-6 py-4">PERMISSIONS</th>
              </tr>
            </thead>

            <tbody>
              {folders.map((folder, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Folder
                        className="text-yellow-500 fill-yellow-400"
                        size={18}
                      />
                      <span className="font-medium">{folder}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-500">—</td>
                  <td className="px-6 py-4 text-gray-500">
                    8 months ago
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    Folder
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    —
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default DocumentMngt