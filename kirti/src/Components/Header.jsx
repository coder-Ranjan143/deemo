import React from 'react';
import LogoImage from "../Image/Smart_City_Logo.jpeg";
import AdminImage from "../Image/Super_Admin_Image.jpeg";

const Header = () => {
    return (

        <header className="bg-white px-4 py-3 sm:px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4">

                <img
                    src={LogoImage}
                    alt="Smart City Logo"
                    className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
                />

                <div className="min-w-0">
                    <h1 className="text-base font-semibold text-red-800 leading-tight sm:text-lg">
                        Integrated Command & Control Center
                    </h1>

                    <p className="text-xs text-gray-700 font-light sm:text-sm">
                        Department of Excise, Madhya Pradesh
                    </p>
                </div>

            </div>

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">

                <div className="min-w-0 text-left sm:text-right">
                    <h2 className="text-sm text-gray-1200">
                        Super Admin
                    </h2>

                    <p className="text-xs text-gray-600 whitespace-nowrap">
                        mpexcisejcc@gmail.com
                    </p>
                </div>

                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-yellow-400">
                    <img
                        src={AdminImage}
                        alt="Admin"
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>
        </header>
    )
}

export default Header;
