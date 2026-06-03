import { Routes, Route } from "react-router-dom";

import Home from "./Home";

import Executive from "./dashbord/executive/Executive";
import Operator from "./dashbord/operator/Operator";
import Administrative from "./dashbord/administrator/Administrative";

import MfgUnit from "./dashbord/executive/pages/MfgUnitComm.jsx";

import AlertMngt from "./analaysis/pages/AlertMngt.jsx";
import AnalysisSummary from "./analaysis/pages/AnalysisSummary.jsx";
import CallCenter from "./analaysis/pages/CallCenter.jsx";
import SopReport from "./analaysis/pages/SopReport.jsx";
import Analysis2 from "./analaysis/pages/Analysis2.jsx";

import TpPassSummary from "./VTS/TpPassSummary.jsx";
import VtsElockId from "./VTS/VtsElockId.jsx";
import VtsElockTrip from "./VTS/VtsElockTrip.jsx";
import VtsgpsTrip from "./VTS/VtsgpsTrip.jsx";
import DocumentMngt from "./documentMngt/DocumentMngt.jsx"
import MfgDistilleries from "./manufacturing/MfgDistilleries.jsx";
import ManageUser from "./manageUser/ManageUser.jsx";
import Activity from "./manageUser/Activity.jsx";
import Edit from "./manageUser/Edit.jsx";
import AssignOperator from "./manageUser/AssignOperator.jsx";
import AssignedGroup from "./manageUser/AssignedGroup.jsx";
/* Manufacturing Pages */
import ManufacturingInPremises from "./manufacturing/InPremises.jsx";
import ManufacturingInTransit from "./manufacturing/InTransit.jsx";

/* Warehouse Pages */
import WarehouseInPremises from "./warehouse/InPremises.jsx";
import WarehouseInTransit from "./warehouse/InTransit.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/executive" element={<Executive />} />

        <Route path="/operator" element={<Operator />} />

        <Route path="/administrative" element={<Administrative />} />

        <Route path="/mfgunit" element={<MfgUnit />} />

        <Route path="/alertmangt" element={<AlertMngt />} />

        <Route path="/analysissummry" element={<AnalysisSummary />} />

        <Route path="/callcenter" element={<CallCenter />} />

        <Route path="/sopreport" element={<SopReport />} />

        <Route path="/analysis2" element={<Analysis2 />} />

        {/* Manufacturing Routes */}

        <Route path="/in-premise" element={<ManufacturingInPremises />} />

        <Route path="/in-transit" element={<ManufacturingInTransit />} />

        {/* Warehouse Routes */}

        <Route path="/warehouse/in-premise" element={<WarehouseInPremises />} />

        <Route path="/warehouse/in-transit" element={<WarehouseInTransit />} />

        <Route path="/vts/elock-trip" element={<VtsElockTrip />} />

        <Route path="/vts/gps-trip" element={<VtsgpsTrip />} />

        <Route path="/vts" element={<TpPassSummary />} />

        <Route path="/vts/gps/id" element={<VtsElockId />} />
        <Route path="/documents" element={<DocumentMngt />} />
         <Route path="/mfg-distilleries" element={< MfgDistilleries />} />
 <Route path="/manage" element={< ManageUser />} />

  <Route path="/activity" element={< Activity />} />
       
         <Route path="/edit" element={< Edit />} />

          <Route path="/assign-oprator" element={< AssignOperator />} />

 <Route path="/assign-group" element={< AssignedGroup />} />

      </Routes>
    </>
  );
}

export default App;
