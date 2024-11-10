import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [39.2, 35]; // Default center of the map

export default function Map() {
    return (
        <div className='fixed'>
            
            <MapContainer
                dragging={false}
                zoomControl={false}
                center={position}
                zoom={6.5}
                scrollWheelZoom={false}
                className='h-screen w-screen fixed'
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}
