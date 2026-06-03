import React from "react";

const AssignedGroup = () => {
  const assignedGroups = []; // API se data aayega

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto pt-8 px-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Assigned Groups for{" "}
          <span className="text-indigo-700">
            Abhijeet Agarwal
          </span>
        </h1>

        <div className="mt-8">
          {assignedGroups.length === 0 ? (
            <p className="text-gray-600 text-lg">
              No groups assigned yet.
            </p>
          ) : (
            <div className="bg-white shadow rounded-lg p-6">
              <ul className="space-y-3">
                {assignedGroups.map((group, index) => (
                  <li
                    key={index}
                    className="border rounded-md p-3"
                  >
                    {group}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10">
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 px-5 py-2 rounded-md bg-white hover:bg-gray-50 flex items-center gap-2"
          >
            ← BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignedGroup;