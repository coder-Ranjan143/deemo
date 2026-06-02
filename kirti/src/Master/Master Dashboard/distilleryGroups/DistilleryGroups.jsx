// src/Master/Master Dashboard/distilleryGroups/DistilleryGroups.jsx

import { useState, useEffect } from "react";
import DistilleryGroupTable from "./DistilleryGroupTable";
import EditGroup from "./EditGroup";
import ViewGroup from "./ViewGroup";
import AssignGuard from "./AssignGuard";
import { distilleryGroups } from "./distilleryGroupData";

const DistilleryGroups = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [actionMode, setActionMode] = useState(null); // "edit", "view", or "assign"

  const handleEdit = (group) => {
    setActiveGroup(group);
    setActionMode("edit");
  };

  const handleView = (group) => {
    setActiveGroup(group);
    setActionMode("view");
  };

  const handleAssignGuard = (group) => {
    setActiveGroup(group);
    setActionMode("assign");
  };

  const handleClose = () => {
    setActiveGroup(null);
    setActionMode(null);
  };

  useEffect(() => {
    if (activeGroup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGroup]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DistilleryGroupTable
        data={distilleryGroups}
        onEdit={handleEdit}
        onView={handleView}
        onAssignGuard={handleAssignGuard}
      />

      {activeGroup && actionMode === "edit" && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-screen h-screen">
            <EditGroup group={activeGroup} onCancel={handleClose} />
          </div>
        </div>
      )}

      {activeGroup && actionMode === "view" && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-screen h-screen">
            <ViewGroup group={activeGroup} onClose={handleClose} />
          </div>
        </div>
      )}

      {activeGroup && actionMode === "assign" && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-screen h-screen">
            <AssignGuard group={activeGroup} onClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DistilleryGroups;