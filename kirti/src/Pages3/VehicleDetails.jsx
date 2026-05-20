import React from "react";
import { useParams } from "react-router-dom";
import VehicleData from "./data/VehicleData";

function VehicleDetails() {
  const { id } = useParams();

  const vehicle = VehicleData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return <div className="p-5">Vehicle Not Found</div>;
  }

  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-5 text-red-900">
          Vehicle Details
        </h1>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p><strong>Unit Type:</strong> {vehicle.unitType}</p>
            <p><strong>Distillery:</strong> {vehicle.distilleryName}</p>
            <p><strong>Camera:</strong> {vehicle.cameraName}</p>
            <p><strong>Event Type:</strong> {vehicle.EventType}</p>
          </div>

          <div>
            <p><strong>Event Image:</strong> {vehicle.EventImage}</p>
            <p><strong>Event Snapshot:</strong> {vehicle.EventSnapshot}</p>
            <p><strong>Date:</strong> {vehicle.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default VehicleDetails;