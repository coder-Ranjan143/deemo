import {
    ChevronDown,
    LayoutDashboard,
    BarChart3,
    Factory,
    Warehouse,
    Truck,
    Camera,
    Settings,
    Users,
    FileText,
} from "lucide-react";


const Navbar = () => {
    return (
        <nav className="bg-red-800 text-white px-6 py-3">
            <div className="flex items-center justify-center gap-7 text-sm font-medium">

                <a href="/" className="flex items-center gap-1 text-white hover:text-gray-200">
                    <LayoutDashboard size={18} />
                    Dashboard
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <BarChart3 size={18} />
                    Analysis
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Factory size={18} />
                    Manufacturing
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Warehouse size={18} />
                    Warehouse
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Truck size={18} />
                    VTS
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Camera size={18} />
                    Camera Summary
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Settings size={18} />
                    Master
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <Users size={18} />
                    User Mngt
                    <ChevronDown size={16} />
                </a>

                <a href="/" className="flex items-center gap-1 hover:text-gray-200">
                    <FileText size={18} />
                    Document Mngt
                    <ChevronDown size={16} />
                </a>

            </div>
        </nav>
    )
}

export default Navbar;
