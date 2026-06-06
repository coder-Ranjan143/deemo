import React from "react";
import { ChevronDown } from "lucide-react";
import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
// import { useNavigate } from "react-router-dom";

const PermissionCard = ({ title, permissions }) => {



    return (
        <div className="rounded-md border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b bg-gray-50 px-2 py-1.5">
                <h3 className="text-[13px] font-medium text-gray-700">
                    {title}
                </h3>

                <ChevronDown
                    size={13}
                    className="text-gray-500"
                />
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 p-2">
                {permissions.map((item, index) => (
                    <label
                        key={index}
                        className="flex items-center gap-1.5 text-[11px] text-gray-600"
                    >
                        <input
                            type="checkbox"
                            className="h-3 w-3"
                        />
                        {item}
                    </label>
                ))}
            </div>
        </div>
    );
};

const Add_Roles_Button = () => {
    const sections = [
        {
            title: "Dashboard",
            permissions: [
                "Executive Dashboard",
                "Operator Dashboard",
            ],
        },
        {
            title: "User Management",
            permissions: [
                "View Users",
                "Create Users",
                "Edit Users",
                "Delete Users",
            ],
        },
        {
            title: "Role Management",
            permissions: [
                "View Roles",
                "Create Roles",
                "Edit Roles",
                "Delete Roles",
            ],
        },
        {
            title: "Manufacturer Unit",
            permissions: [
                "Manufacturer In Premise",
                "Manufacturer In Transit",
            ],
        },
        {
            title: "Warehouse",
            permissions: [
                "Warehouse In Premise",
                "Warehouse In Transit",
            ],
        },
        {
            title: "Analysis",
            permissions: [
                "SOP Reports",
                "Alert Escalation",
                "Call Center",
                "Analysis Summary",
            ],
        },
        {
            title: "VTS Mngt",
            permissions: [
                "Vehicle Tracking",
                "Vehicle Trip GPS",
                "Trip Pass Summary",
            ],
        },
        {
            title: "Camera Summary",
            permissions: [
                "Camera Mngt Unit",
            ],
        },
        {
            title: "Masters",
            permissions: [
                "All Distillery Units",
                "All Warehouses",
                "Distillery Groups",
            ],
        },
        {
            title: "Documents Management",
            permissions: [
                "Documents",
            ],
        },
    ];

    return (
        <>
            <Header />
            <Navbar />

            <div className="mt-[150px] px-2 pb-2">
                <div className="mx-auto max-w-[1400px] rounded-md border border-gray-200 bg-white shadow-sm">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-3 py-1.5">
                        <h1 className="text-2xl font-semibold text-gray-700">
                            Add New Role
                        </h1>

                        <button className="rounded border border-red-300 px-2 py-0.5 text-[13px] font-medium text-red-500 hover:bg-red-50">
                            Cancel
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-2">

                        {/* Role Name */}
                        <div className="mb-2">
                            <label className="mb-1 block text-[12px] font-medium text-gray-700">
                                Role Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter role name"
                                className="w-full rounded border border-gray-300 px-2 py-1 text-[11px] outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Permissions */}
                        <div>
                            <h2 className="mb-2 mt-4 text-[12px] font-semibold text-gray-700">
                                Permissions
                            </h2>

                            <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-4">
                                {sections.map((section, index) => (
                                    <PermissionCard
                                        key={index}
                                        title={section.title}
                                        permissions={section.permissions}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Save */}
                        <div className="mt-4 flex justify-end">
                            <button className="rounded bg-red-500 px-3 py-1 text-[13px] font-medium text-white hover:bg-red-600">
                                Save
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Add_Roles_Button;