// src/Master/Master Dashboard/distilleryGroups/DistilleryGroupTable.jsx
import ActionButtons from "./ActionButtons";

const DistilleryGroupTable = ({ data, onEdit, onView, onAssignGuard }) => {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-linear-to-r from-[#7f1734] to-[#8d1f22] text-white">
              <th className="px-4 py-4 text-left">#</th>
              <th className="px-4 py-4 text-left">GROUP NAME</th>
              <th className="px-4 py-4 text-left">GUARD NAME</th>
              <th className="px-4 py-4 text-left">OPERATOR NAME</th>
              <th className="px-4 py-4 text-left">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4">{item.id}</td>
                <td className="px-4 py-4">{item.groupName}</td>
                <td className="px-4 py-4">{item.guardName}</td>
                <td className="px-4 py-4">{item.operatorName}</td>
                <td className="px-4 py-4">
                  <ActionButtons item={item} onEdit={onEdit} onView={onView} onAssignGuard={onAssignGuard} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistilleryGroupTable;
