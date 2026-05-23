import Administrator_Dashboard_SmallCard from "./Administrator_Dashboard_SmallCard";
import Administrator_Dashboard_BigCard from "./Administrator_Dashboard_BigCard";
import Administrator_Navbar from "./admin_dash_navbar/Administrator_Navbar";

function Administrator_Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-5">

            {/* Navbar */}
            <Administrator_Navbar />

            {/* Small Cards */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <Administrator_Dashboard_SmallCard
                    title="TOTAL CAMERA"
                    subtitle="Total cameras in the premises"
                    value="303"
                />

                <Administrator_Dashboard_SmallCard
                    title="CRITICAL CAMERA"
                    subtitle="Critical cameras (bottling / high-risk zones)"
                    value="149"
                />

                <Administrator_Dashboard_SmallCard
                    title="DOWN CAMERAS"
                    subtitle="Cameras currently not streaming"
                    value="242"
                />

                <Administrator_Dashboard_SmallCard
                    title="CRITICAL CAMERA DOWN"
                    subtitle="Critical camera currently down"
                    value="118"
                />

            </div>

            {/* Second Row */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <Administrator_Dashboard_SmallCard
                    title="DOWN TIME SUMMARY"
                    subtitle="Short Time / Long Time"
                    value="218"
                />

                <Administrator_Dashboard_SmallCard
                    title="VEHICLE COUNT IN LOADING AREA"
                    subtitle="Vehicle currently available"
                    value="167"
                />

                <Administrator_Dashboard_SmallCard
                    title="BOTTLING DURING"
                    subtitle="Non Permissible Time"
                    value="0 / 0h"
                />

                <Administrator_Dashboard_SmallCard
                    title="MANUFACTURING UNIT"
                    subtitle="Average Bottling Hours"
                    value="0m"
                />

            </div>

            {/* Big Cards */}
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

                <Administrator_Dashboard_BigCard
                    title="ACTIVE CAMERAS UPTIME"
                    percentage="22.69%"
                />

                <Administrator_Dashboard_BigCard
                    title="CRITICAL COVERAGE AVAILABLE"
                    percentage="23.92%"
                />

                <Administrator_Dashboard_BigCard
                    title="DOWN CAMERAS (OF TOTAL)"
                    percentage="77.31%"
                />

            </div>

        </div>
    );
}

export default Administrator_Dashboard;