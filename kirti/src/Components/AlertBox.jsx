import Footer from "./Footer";

const alerts = [
    {
        message: "Camera gate 'exit' detected a vehicle at Oasis Distilleries — Vehicle No: MP09MG8116.",
        location: "Oasis Distilleries | 03:05 PM",
    },
    {
        message: "Camera gate 'entry' detected a vehicle at Associate Alcohols Khargone — Vehicle No: MP09ZX.",
        location: "Associate Alcohols Khargone | 03:05 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at Bapuna Alcobrew — Vehicle No: MP07MT022.",
        location: "Bapuna Alcobrew | 03:04 PM",
    },
    {
        message: "Camera gate 'entry' detected a vehicle at Gulshan Polyols — Vehicle No: MP28BB1299.",
        location: "Gulshan Polyols | 03:04 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at DCR Distillery — Vehicle No: MP15ME7297.",
        location: "DCR Distillery | 03:03 PM",
    },
];

const AlertBox = () => {
    return (
        <div className="
            w-full
            bg-white
            rounded-2xl
            shadow-md
            p-5
            flex
            flex-col
            max-h-[600px]
        ">

            {/* Heading */}
            <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-800">
                    Latest ANPR Alerts
                </h3>
            </div>

            {/* Alerts */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">

                {alerts.map((alert, index) => (
                    <div
                        key={index}
                        className="
                            border
                            border-gray-200
                            rounded-xl
                            p-4
                            bg-red-50
                            hover:bg-red-100
                            transition-all
                            duration-300
                        "
                    >
                        <p className="text-sm text-gray-800 leading-7">
                            {alert.message}
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                            Location: {alert.location}
                        </p>
                    </div>
                ))}

            </div>

            <div className="mt-4">
                <Footer />
            </div>

        </div>
    );
};

export default AlertBox;