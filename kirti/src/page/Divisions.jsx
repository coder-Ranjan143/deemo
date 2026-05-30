import AddDivisionCard from "../components/AddDivisionCard";
import DivisionCard from "../components/DivisionCard";

import { divisions } from "../data/divisionsData";

const Divisions = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <h1 className="text-4xl font-bold">
        Divisions List
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Manage all divisions in the system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <AddDivisionCard />

        {divisions.map((division) => (
          <DivisionCard
            key={division.id}
            division={division}
          />
        ))}
      </div>
    </div>
  );
};

export default Divisions;