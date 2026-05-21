import Card from "../Components/Card";
import Heading from "../Components/Heading";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AlertBox from "../Components/AlertBox";

import {
    ShieldAlert,
    CameraOff,
    Truck,
    Ban,
    BadgeCheck,
} from "lucide-react";

function Dashboard() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-100">

            <Header />
            <Navbar />
            <Heading />

            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-3
                p-4
                md:p-5
                items-stretch
            ">

                {/* LEFT SIDE CARDS */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    lg:h-[400px]
                    auto-rows-fr
                    items-stretch
                ">

                    <Card
                        icon={<ShieldAlert size={22} className="text-yellow-600" />}
                        title="Unauthorized Vehicle Entry"
                        value="641"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

                    <Card
                        icon={<CameraOff size={22} className="text-blue-600" />}
                        title="Critical Camera Down"
                        value="109"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-blue-100"
                    />

                    <Card
                        icon={<Truck size={22} className="text-pink-600" />}
                        title="Vehicle tracked at Loading Zone"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-pink-100"
                    />

                    <Card
                        icon={<Ban size={22} className="text-green-600" />}
                        title="Non Permitted Hours"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-gray-800"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-green-100"
                    />

                    <Card
                        icon={<Ban size={22} className="text-purple-600" />}
                        title="Unauthorized Vehicle Exit"
                        value="709"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-purple-100"
                    />

                    <Card
                        icon={<BadgeCheck size={22} className="text-red-500" />}
                        title="Permit Validation"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

                </div>

                {/* RIGHT SIDE ALERT BOX */}
                <div className="flex lg:h-[400px]">
                    <AlertBox />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
