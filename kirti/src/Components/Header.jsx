import React from 'react';
import LogoImage from "../Image/Smart_City_Logo.jpeg";
import AdminImage from "../Image/Super_Admin_Image.jpeg";

const Header = () => {
    return (

        <header className="bg-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">

                <img
                    src={LogoImage}
                    alt="Smart City Logo"
                    className="w-16 h-16 object-contain"
                />

                <div>
                    <h1 className="text-xl text-red-900 leading-tight">
                        Integrated Command & Control Center
                    </h1>

                    <p className="text-sm text-gray-700 font-light">
                        Department of Excise, Madhya Pradesh
                    </p>
                </div>

            </div>

            <div className="flex items-center gap-3">

                <div className="text-right">
                    <h2 className="text-sm text-gray-1200">
                        Super Admin
                    </h2>

                    <p className="text-xs text-gray-600">
                        mpexcisejcc@gmail.com
                    </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                    <img
                        src={AdminImage}
                        alt="Admin"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </header>
    )
}

export default Header;
