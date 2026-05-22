import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Slider3_Map = () => {
    return (
        <div className="
            h-full
            w-full
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            shadow-sm
        ">

            <MapContainer
                center={[23.2599, 77.4126]}
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full"
            >

                {/* Map Design */}
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Marker */}
                <Marker position={[23.2599, 77.4126]}>
                    <Popup>
                        Vehicle Current Location
                    </Popup>
                </Marker>

            </MapContainer>

        </div>
    );
};

export default Slider3_Map;