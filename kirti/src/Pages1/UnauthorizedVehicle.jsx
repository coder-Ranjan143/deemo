import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import VehicleData from "../Pages1/data/VehicleData.jsx";

import * as XLSX from "xlsx";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  ChevronDown,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

function UnauthorizedVehicle() {

  const navigate = useNavigate();

  // STATES

  const [selectedDate, setSelectedDate] =
    useState("");

  const [showFilter, setShowFilter] =
    useState(false);

  const [selectedGroup, setSelectedGroup] =
    useState("");

  const [
    selectedDistillery,
    setSelectedDistillery,
  ] = useState(""); 

  const [filterType, setFilterType] =
    useState("");

  // DATE RANGE STATES

  const [showDateRange, setShowDateRange] =
    useState(false);

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  // FILTER LOGIC

  const filteredData = VehicleData.filter(
    (item) => {

      const today = new Date();

      const itemDate = new Date(
        item.createdAt
      );

      let matchDate = true;

      // TODAY

      if (filterType === "today") {

        matchDate =
          itemDate.toDateString() ===
          today.toDateString();

      }

      // YESTERDAY

      else if (
        filterType === "yesterday"
      ) {

        const yesterday = new Date();

        yesterday.setDate(
          today.getDate() - 1
        );

        matchDate =
          itemDate.toDateString() ===
          yesterday.toDateString();

      }

      // LAST 7 DAYS

      else if (filterType === "7days") {

        const last7Days = new Date();

        last7Days.setDate(
          today.getDate() - 7
        );

        matchDate =
          itemDate >= last7Days;

      }

      // LAST 30 DAYS

      else if (
        filterType === "30days"
      ) {

        const last30Days = new Date();

        last30Days.setDate(
          today.getDate() - 30
        );

        matchDate =
          itemDate >= last30Days;

      }

      // DATE RANGE FILTER

      if (startDate && endDate) {

        const start = new Date(
          startDate
        );

        const end = new Date(endDate);

        end.setHours(
          23,
          59,
          59,
          999
        );

        matchDate =
          itemDate >= start &&
          itemDate <= end;

      }

      // CUSTOM DATE FILTER

      if (selectedDate) {

        matchDate =
          item.createdAt ===
          selectedDate;

      }

      // GROUP FILTER

      const matchGroup =
        selectedGroup
          ? item.distilleryName ===
            selectedGroup
          : true;

      // DISTILLERY FILTER

      const matchDistillery =
        selectedDistillery
          ? item.cameraName ===
            selectedDistillery
          : true;

      return (
        matchDate &&
        matchGroup &&
        matchDistillery
      );
    }
  );

  // CSV EXPORT

  const exportCSV = () => {

    const headers = [
      "ID",
      "Unit Type",
      "Distillery Name",
      "Camera Name",
      "LPN No",
      "Status",
      "Created At",
    ];

    const rows = filteredData.map(
      (item) => [

        item.id,
        item.unitType,
        item.distilleryName,
        item.cameraName,
        item.lpnNo,
        item.authorizedStatus,
        item.createdAt,

      ]
    );

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "unauthorized_vehicle.csv";

    a.click();
  };

  // EXCEL EXPORT

  const exportExcel = () => {

    const exportData = filteredData.map(
      (item) => ({

        ID: item.id,

        "Unit Type":
          item.unitType,

        "Distillery Name":
          item.distilleryName,

        "Camera Name":
          item.cameraName,

        "Camera Position":
          item.cameraPosition,

        "LPN No":
          item.lpnNo,

        "Pending Level":
          item.pendingLevel,

        Status:
          item.authorizedStatus,

        "Created At":
          item.createdAt,

      })
    );

    const workbook =
      XLSX.utils.book_new();

    const worksheet =
      XLSX.utils.json_to_sheet(
        exportData
      );

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Unauthorized Vehicles"
    );

    XLSX.writeFile(
      workbook,
      "Unauthorized_Vehicle_Report.xlsx"
    );
  };

  return (

    <div className="p-5 bg-gray-100 min-h-screen">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-5 flex-wrap gap-4">

        <h1 className="text-2xl font-bold text-blue-700">
          All Unauthorized Vehicle Entry
        </h1>

        <div className="flex gap-3 items-center flex-wrap">

          {/* ACTIVE FILTER */}

          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">

            Active Filter :

            {

              startDate && endDate

                ? ` ${startDate} To ${endDate}`

                : selectedDate

                ? ` ${selectedDate}`

                : filterType === "today"

                ? " Today"

                : filterType ===
                  "yesterday"

                ? " Yesterday"

                : filterType ===
                  "7days"

                ? " Last 7 Days"

                : filterType ===
                  "30days"

                ? " Last 30 Days"

                : " All"

            }

          </div>

          {/* DATE */}

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }
            className="border px-3 py-2 rounded-lg"
          />

          {/* EXPORT DROPDOWN */}

          <Menu
            as="div"
            className="relative inline-block text-left"
          >
            <MenuButton className="bg-white hover:bg-blue-50 text-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 border border-blue-400">

              Export

              <ChevronDown
                size={18}
              />

            </MenuButton>

            <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-lg border z-50">

              {/* CSV */}

              <MenuItem>

                {() => (

                  <button
                    onClick={exportCSV}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 text-sm text-blue-700"
                  >

                    <FileText
                      size={18}
                    />

                    Downl oad CSV

                  </button>

                )}

              </MenuItem>

              {/* EXCEL */}

              <MenuItem>

                {() => (

                  <button
                    onClick={
                      exportExcel
                    }
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 text-sm text-blue-700"
                  >

                    <FileSpreadsheet
                      size={18}
                    />

                    Download Excel

                  </button>

                )}

              </MenuItem>

            </MenuItems>

          </Menu>

          {/* FILTER BUTTON */}

          <button
            onClick={() =>
              setShowFilter(
                !showFilter
              )
            }
            className="border border-red-400 text-red-500 px-5 py-2 rounded-lg hover:bg-red-50"
          >
            Filter
          </button>


        </div>

      </div>

      {/* FILTER SECTION */}

      {showFilter && (

        <div className="bg-white p-5 rounded-xl shadow-md mb-5 border">

          <div className="grid grid-cols-1 md:grid-cols-8 gap-4">

            {/* GROUP */}

            <select
              value={selectedGroup}
              onChange={(e) =>
                setSelectedGroup(
                  e.target.value
                )
              }
              className="border border-red-300 rounded-lg px-4 py-3 outline-none"
            >

              <option value="">
                Select Group
              </option>

              {[

                ...new Set(

                  VehicleData.map(
                    (item) =>
                      item.distilleryName
                  )

                ),

              ].map(
                (
                  distillery,
                  index
                ) => (

                  <option
                    key={index}
                    value={distillery}
                  >
                    {distillery}
                  </option>

                )
              )}

            </select>

            {/* DISTILLERY */}

            <select
              value={
                selectedDistillery
              }
              onChange={(e) =>
                setSelectedDistillery(
                  e.target.value
                )
              }
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
            >

              <option value="">
                Select Distillery
              </option>

              {VehicleData
                .filter((item) =>

                  selectedGroup
                    ? item.distilleryName ===
                      selectedGroup
                    : true

                )

                .map(
                  (item, index) => (

                    <option
                      key={index}
                      value={
                        item.cameraName
                      }
                    >
                      {
                        item.cameraName
                      }
                    </option>

                  )
                )}

            </select>

            {/* TODAY */}

            <button
              onClick={() =>
                setFilterType(
                  "today"
                )
              }
              className="border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50"
            >
              Today
            </button>

            {/* YESTERDAY */}

            <button
              onClick={() =>
                setFilterType(
                  "yesterday"
                )
              }
              className="border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50"
            >
              Yesterday
            </button>

            {/* LAST 7 DAYS */}

            <button
              onClick={() =>
                setFilterType(
                  "7days"
                )
              }
              className="border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50"
            >
              Last 7 Days
            </button>

            {/* LAST 30 DAYS */}

            <button
              onClick={() =>
                setFilterType(
                  "30days"
                )
              }
              className="border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50"
            >
              Last 30 Days
            </button>

            {/* DATE RANGE BUTTON */}

            <button
              onClick={() =>
                setShowDateRange(
                  !showDateRange
                )
              }
              className="border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50 text-xl"
            >
              +
            </button>

            <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
              Apply
            </button>

            {/* RESET */}

            <button
              onClick={() => {

                setSelectedDate("");
                setSelectedGroup("");
                setSelectedDistillery(
                  ""
                );
                setFilterType("");
                setStartDate("");
                setEndDate("");
                setShowDateRange(
                  false
                );

              }}
              className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
            >
              Reset
            </button>

          </div>

          {/* DATE RANGE */}

          {showDateRange && (

            <div className="flex flex-wrap gap-4 mt-5">

              {/* START DATE */}

              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(
                    e.target.value
                  )
                }
                className="border border-gray-300 rounded-lg px-4 py-3"
              />

              {/* END DATE */}

              <input
                type="date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(
                    e.target.value
                  )
                }
                className="border border-gray-300 rounded-lg px-4 py-3"
              />

            </div>

          )}

        </div>

      )}

      {/* TABLE */}

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

        <table className="w-full text-sm text-left border-collapse">

          <thead className="bg-red-900 text-white">

            <tr>

              <th className="p-4">
                #
              </th>

              <th className="p-4">
                Unit Type
              </th>

              <th className="p-4">
                Distillery Name
              </th>

              <th className="p-4">
                Camera Name
              </th>

              <th className="p-4">
                Camera Position
              </th>

              <th className="p-4">
                LPN No.
              </th>

              <th className="p-4">
                Pending Level
              </th>

              <th className="p-4">
                Authorized Status
              </th>

              <th className="p-4">
                Created At
              </th>

              <th className="p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map(
              (item, index) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-4">
                    {index + 1}
                  </td>

                  <td className="p-4">
                    {item.unitType}
                  </td>

                  <td className="p-4">
                    {
                      item.distilleryName
                    }
                  </td>

                  <td className="p-4">
                    {item.cameraName}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    {
                      item.cameraPosition
                    }
                  </td>

                  <td className="p-4">
                    {item.lpnNo}
                  </td>

                  <td className="p-4">
                    {
                      item.pendingLevel
                    }
                  </td>

                  <td className="p-4">

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">

                      {
                        item.authorizedStatus
                      }

                    </span>

                  </td>

                  <td className="p-4">
                    {item.createdAt}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        navigate(
                          `/vehicle/${item.id}`
                        )
                      }
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full"
                    >
                      View
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UnauthorizedVehicle;