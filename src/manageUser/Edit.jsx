import React, { useState } from "react";

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: "Abhijeet Agarwal",
    username: "eccommissioner",
    mobile: "8103499383",
    email: "ec.ecogwl@mp.gov.in",
    role: "Operator",
    designation: "L3",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-xl shadow-md p-8 ">
        <div className="flex justify-between items-center mb-8 border-b  p-6 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-800">
            Edit User
          </h1>

          <button className="border border-red-700 text-red-700 px-5 py-2 rounded-md hover:bg-red-50">
            ✕ Cancel
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-3"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block mb-2 text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border rounded-md border-gray-400 px-4 py-3"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 text-gray-600">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border rounded-md border-gray-400  px-4 py-3"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md border-gray-400  px-4 py-3"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block mb-2 text-gray-600">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-400  rounded-md px-4 py-3"
              >
                <option>Operator</option>
                <option>Admin</option>
                <option>Manager</option>
              </select>
            </div>

            {/* Designation */}
            <div>
              <label className="block mb-2 text-gray-600">Designation</label>
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border border-gray-400  rounded-md px-4 py-3"
              >
                <option>L1</option>
                <option>L2</option>
                <option>L3</option>
                <option>L4</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;