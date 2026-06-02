// src/Master/Master Dashboard/distilleryGroups/ActionButtons.jsx

const ActionButtons = ({ item, onEdit, onView, onAssignGuard }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onEdit(item)}
        className="px-3 py-1 text-sm rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50"
      >
        Edit
      </button>

      <button
        onClick={() => onView(item)}
        className="px-3 py-1 text-sm rounded-md border border-green-500 text-green-500 hover:bg-green-50"
      >
        View
      </button>

      <button
        onClick={() => onAssignGuard(item)}
        className="px-3 py-1 text-sm rounded-md border border-indigo-500 text-indigo-500 hover:bg-indigo-50"
      >
        Assign Guard
      </button>

      <button
        className="px-3 py-1 text-sm rounded-md border border-indigo-500 text-indigo-500 hover:bg-indigo-50"
      >
        Assign Operator
      </button>

      <button
        className="px-3 py-1 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-50"
      >
        Delete
      </button>
    </div>
  );
};

export default ActionButtons;
