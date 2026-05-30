import Administrator from "./dashbord/pages/Administrator";
import Admin_GIS_Bottling_Dashboard from "./dashbord/pages/administrator/administrator_gis_bottling/Admin_GIS_Bottling_Dashboard";
import Admin_GIS_Spirit_Dashboard from "./dashbord/pages/administrator/administrator_gis_spirit/Admin_GIS_Spirit_Dashboard";
import Excutive from "./dashbord/pages/Excutive";
import Oprator from "./dashbord/pages/Operator";

function App() {
  return (
    <div>
      {/* <Excutive /> */}
      {/* <Oprator /> */}
      {/* <Administrator /> */}
      {/* <Admin_GIS_Bottling_Dashboard /> */}
      <Admin_GIS_Spirit_Dashboard />
    </div>
  );
}

export default App;