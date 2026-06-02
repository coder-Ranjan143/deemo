// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PendingAlertData from "../data/PendingAlertData";

function PendingAlertDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const alert = PendingAlertData.find(
    (item) => item.id === Number(id)
  );

  if (!alert) {
    return (
      <div className="p-10 text-center text-red-500">
        Pending Alert Not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#7b1028]">
          Pending Alert details
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Unit Type</p>
            <p>{alert.unitType}</p>
          </div>

          <div>
            <p className="font-semibold">Distellery Name</p>
            <p>{alert.distilleryName}</p>
          </div>

          <div>
            <p className="font-semibold">Type</p>
            <p>{alert.type}</p>
          </div>

          <div>
            <p className="font-semibold">Handle By</p>
            <p>{alert.handleBy}</p>
          </div>

          <div>
            <p className="font-semibold">Description</p>
            <p>{alert.description}</p>
          </div>

          <div>
            <p className="font-semibold">Status</p>
            <p className="text-red-500">{alert.status}</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold">Closed BY</p>
            <p>{alert.closedBy}</p>
          </div>

          <div>
            <p className="font-semibold">Created At</p>
            <p>{alert.createdAt}</p>
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

export default PendingAlertDetails;