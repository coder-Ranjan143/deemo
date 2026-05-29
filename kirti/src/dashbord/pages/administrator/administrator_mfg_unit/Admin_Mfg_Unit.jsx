// Admin_Mfg_Unit.jsx

import Admin_Mfg_Unit_Box1 from "./Admin_Mfg_Unit_Box1";
import Admin_Mfg_Unit_Box2 from "./Admin_Mfg_Unit_Box2";
import Admin_Mfg_Unit_Card from "./Admin_Mfg_Unit_Card";
import Admin_Mfg_Unit_Nav from "./admin_mfg_unit_navbar/Admin_Mfg_Unit_Nav";

const Admin_Mfg_Unit = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#f5f6fa] p-2 md:p-3">

            {/* Navbar */}
            <Admin_Mfg_Unit_Nav />

            {/* Top Section */}
            <div className="mt-2 grid grid-cols-1 gap-2 xl:grid-cols-12">

                {/* Box 1 */}
                <div className="xl:col-span-7">
                    <Admin_Mfg_Unit_Box1 />
                </div>

                {/* Box 2 */}
                <div className="xl:col-span-5">
                    <Admin_Mfg_Unit_Box2 />
                </div>

            </div>

            {/* Bottom Cards */}
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">

                <Admin_Mfg_Unit_Card
                    title="Unauthorised Entry"
                    description="Entry detected without valid authorization inside premises."
                    value="255 / 22"
                    graphColor="#ef4444"
                    fillColor="rgba(239,68,68,0.16)"
                    points="
                        M10 55
                        L55 40
                        L100 28
                        L145 35
                        L190 38
                        L235 24
                        L280 42
                        L310 50
                    "
                    numbers={[14, 36, 40, 45, 44, 40, 35]}
                    footer="bg-red-100 text-red-700"
                    footerText="ALERT"
                    countLabel="events (today)"
                />

                <Admin_Mfg_Unit_Card
                    title="Unauthorised Exit"
                    description="Exit detected without valid authorization."
                    value="259 / 22"
                    graphColor="#dc2626"
                    fillColor="rgba(220,38,38,0.16)"
                    points="
                        M10 52
                        L55 34
                        L100 24
                        L145 42
                        L190 55
                        L235 52
                        L280 48
                        L310 42
                    "
                    numbers={[30, 20, 38, 55, 48, 26, 15]}
                    footer="bg-red-100 text-red-700"
                    footerText="ALERT"
                    countLabel="events (today)"
                />

                <Admin_Mfg_Unit_Card
                    title="Exit with Valid TP Pass"
                    description="Vehicles exited with valid transport pass verification."
                    value="0 / 22"
                    graphColor="#22c55e"
                    fillColor="rgba(34,197,94,0.16)"
                    points="
                        M10 58
                        L55 58
                        L100 58
                        L145 24
                        L190 58
                        L235 58
                        L280 58
                        L310 58
                    "
                    numbers={[0, 0, 0, 0, 0, 0, 0]}
                    footer="bg-green-100 text-green-700"
                    footerText="OK"
                    countLabel="vehicles (today)"
                />

                <Admin_Mfg_Unit_Card
                    title="Exit without TP Pass"
                    description="Exit movement recorded but TP pass not found."
                    value="3 / 22"
                    graphColor="#f59e0b"
                    fillColor="rgba(245,158,11,0.16)"
                    points="
                        M10 58
                        L55 58
                        L100 30
                        L145 58
                        L190 58
                        L235 58
                        L280 58
                        L310 58
                    "
                    numbers={[0, 0, 3, 0, 0, 0, 0]}
                    footer="bg-yellow-100 text-yellow-700"
                    footerText="CHECK"
                    countLabel="vehicles (today)"
                />

                <Admin_Mfg_Unit_Card
                    title="In-Premises Vehicle Count"
                    description="Current vehicles inside the premises."
                    value="109 / 22"
                    graphColor="#4f46e5"
                    fillColor="rgba(79,70,229,0.16)"
                    points="
                        M10 52
                        L55 48
                        L100 32
                        L145 32
                        L190 28
                        L235 24
                        L280 20
                        L310 40
                    "
                    numbers={[2, 1, 4, 22, 21, 28, 26]}
                    footer="bg-indigo-100 text-indigo-700"
                    footerText="LIVE"
                    countLabel="vehicles (now)"
                />

                <Admin_Mfg_Unit_Card
                    title="Purpose Mismatch"
                    description="Declared purpose mismatch activity."
                    value="1 / 22"
                    graphColor="#d97706"
                    fillColor="rgba(217,119,6,0.16)"
                    points="
                        M10 58
                        L55 58
                        L100 58
                        L145 58
                        L190 24
                        L235 54
                        L280 54
                        L310 54
                    "
                    numbers={[0, 0, 0, 0, 1, 0, 0]}
                    footer="bg-yellow-100 text-yellow-700"
                    footerText="CHECK"
                    countLabel="cases (today)"
                />

            </div>

        </div>
    );
};

export default Admin_Mfg_Unit;