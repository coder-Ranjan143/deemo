import React from "react";
import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";

const Add_Users = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="mt-35 px-3 sm:px-4 md:px-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-5">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 border-b">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800">
                            Add New User
                        </h2>

                        <button className="border border-red-500 text-red-500 text-xs md:text-sm px-3 py-1 rounded hover:bg-red-50">
                            ✕ Cancel
                        </button>
                    </div>

                    {/* Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Role
                            </label>

                            <select className="w-full border rounded-md px-3 py-2 text-sm">
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="operator">Operator</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Designation
                            </label>

                            <select className="w-full border rounded-md px-3 py-2 text-sm">
                                <option value="">-- Select Designation --</option>
                                <option value="L1">L1</option>
                                <option value="L2">L2</option>
                                <option value="L3">L3</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-600 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                defaultValue="12345678"
                                className="w-full border rounded-md px-3 py-2 text-sm bg-blue-50"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center sm:justify-end mt-5">
                        <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm">
                            Create
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Add_Users;