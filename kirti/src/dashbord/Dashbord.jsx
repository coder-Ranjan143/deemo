import Card from "../Components/Card";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { CameraOff } from "lucide-react";
import { Radar } from "lucide-react";
import { Ban } from "lucide-react";
import { BadgeCheck } from "lucide-react";


import {
    ShieldAlert,
    Truck,
    Factory,
    Warehouse,
} from "lucide-react";

function Dashboard() {
    return (

        <div className="bg-gray-100 min-h-screen">

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar />

            {/* Cards */}
            <div
                className="
          flex
          flex-wrap
          gap-6
          p-6
        "
            >

                <Card
                    icon={
                        <div className="p-2 bg-red-100 rounded-full">
                            <ShieldAlert size={28} className="text-red-600" />
                        </div>
                    }
                    title="Unauthorized Vehicle Entry"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />

                <Card
                    icon={<CameraOff size={28} className="text-red-500" />}
                    title="Critical Camera Down"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />

                <Card
                    icon={<Truck size={28} className="text-blue-500" />}
                    title="Vehicle tracked at Loading Zone"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />

                <Card
                    icon={<Ban size={28} className="text-red-500" />}
                    title="Non permitted Hours"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />

                <Card
                    icon={<Ban size={28} className="text-red-500" />}
                    title="Unauthorized Vehicles Entry"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />

                <Card
                    icon={<BadgeCheck size={28} className="text-green-500" />}
                    title="Permit Validated"
                    value="120"
                    bgColor="bg-white"
                    titleColor="text-blue-800"
                    valueColor="text-blue-900"
                    iconBg="bg-blue-100"
                />



            </div>

        </div>

    );
}

export default Dashboard;