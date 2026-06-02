// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleMovementData from "../data/VehicleMovementData";

function VehicleMovementDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const gps = VehicleMovementData.find(
    (item) => item.id === Number(id)
  );

  if (!gps) {
    return (
      <div className="p-10 text-center text-red-500">
        Vehicle Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#7b1028]">
          Activity List
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Group Name</p>
            <p>{gps.groupName}</p>
          </div>

          <div>
            <p className="font-semibold">Grand Total</p>
            <p>{gps.grandTotal}</p>
          </div>

          <div>
            <p className="font-semibold">Total Entry</p>
            <p>{gps.totalEntry}</p>
          </div>

          <div>
            <p className="font-semibold">Total Exit</p>
            <p>{gps.totalExit}</p>
          </div>

          <div>
            <p className="font-semibold">Total Modified</p>
            <p>{gps.totalModified}</p>
          </div>

          
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 bg-[#7b1028] text-white px-6 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default VehicleMovementDetails;