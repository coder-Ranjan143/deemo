import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  Download,
  ChevronDown,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

import VehicleMovementDetails from "../pages/VehicleMovementDetails";

// import {
//   downloadPDF,
//   downloadExcel,
// } from "../utils/exportFile";

function ExportDropdown() {
  const [showExport, setShowExport] =
    useState(false);

  const exportRef = useRef();

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        exportRef.current &&
        !exportRef.current.contains(
          event.target
        )
      ) {
        setShowExport(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={exportRef}
    >
      <button
        onClick={() =>
          setShowExport(!showExport)
        }
        className="flex items-center gap-2 text-indigo-600 border border-indigo-500 px-3 py-2 rounded-lg bg-white hover:bg-indigo-50"
      >
        <Download size={18} />
        Export
        <ChevronDown size={16} />
      </button>

      {showExport && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">

          <button
            onClick={() => {
              downloadExcel(
                VehicleData
              );
              setShowExport(false);
            }}
            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100"
          >
            <FileSpreadsheet
              size={18}
            />

            Download Excel
          </button>

          <button
            onClick={() => {
              downloadPDF(
                VehicleData
              );
              setShowExport(false);
            }}
            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100"
          >
            <FileText size={18} />

            Download PDF
          </button>

        </div>
      )}
    </div>
  );
}

export default ExportDropdown;