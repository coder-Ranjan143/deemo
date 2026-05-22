import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export const downloadExcel = (data) => {
  const exportData = data.map((item) => ({
    ID: item.id,
    UnitType: item.unitType,
    Distillery: item.distilleryName,
    Camera: item.cameraName,
    CameraPosition: item.cameraPosition,
    LPN: item.lpnNo,
    PendingLevel: item.pendingLevel,
    Status: item.status,
    CreatedAt: item.createdAt,
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(exportData);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "UnauthorizedVehicle"
  );

  XLSX.writeFile(
    workbook,
    "UnauthorizedVehicle.xlsx"
  );
};

export const downloadPDF = (data) => {
  const doc = new jsPDF();

  const rows = data.map((item) => [
    item.id,
    item.unitType,
    item.distilleryName,
    item.cameraName,
    item.cameraPosition,
    item.lpnNo,
    item.pendingLevel,
    item.status,
    item.createdAt,
  ]);

  autoTable(doc, {
    head: [[
      "ID",
      "Unit Type",
      "Distillery",
      "Camera",
      "Position",
      "LPN",
      "Pending",
      "Status",
      "Created At",
    ]],
    body: rows,
  });

  doc.save(
    "UnauthorizedVehicle.pdf"
  );
};