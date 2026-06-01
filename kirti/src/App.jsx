import Administrator from "./dashbord/pages/Administrator";
import Administrator_Dashboard from "./dashbord/pages/administrator/Administrator_Dashboard";
import Admin_GIS_Bottling_Dashboard from "./dashbord/pages/administrator/administrator_gis_bottling/Admin_GIS_Bottling_Dashboard";
import Admin_GIS_Spirit_Dashboard from "./dashbord/pages/administrator/administrator_gis_spirit/Admin_GIS_Spirit_Dashboard";
import Excutive from "./dashbord/pages/Excutive";
import Oprator from "./dashbord/pages/Operator";
import Add_Roles_Button from "./dashbord/user_mngt_dashboard/roles/Add_Roles_Button";
import Roles from "./dashbord/user_mngt_dashboard/roles/Roles";
import Users from "./dashbord/user_mngt_dashboard/users/Users";


function App() {
  return (
    <div>
      {/* <Excutive /> */}
      {/* <Oprator /> */}
      {/* <Administrator /> */}
      {/* <Administrator_Dashboard /> */}
      {/* <Admin_GIS_Bottling_Dashboard /> */}
      {/* <Admin_GIS_Spirit_Dashboard /> */}
      {/* <Roles /> */}
      {/* <Add_Roles_Button /> */}
      <Users />
    </div>
  );
}

export default App;