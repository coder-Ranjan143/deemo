import React, { useState } from "react";
import HeaderTop from "../component/HeaderTop";
import FilterSection from "../component/FilterSection";

function VehicleDelayPage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-[#f5f7fb] p-5">
      {/* Header */}
      <HeaderTop
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />

      {/* Filter Section */}
      {showFilter && <FilterSection />}
    </div>
  );
}

export default VehicleDelayPage;