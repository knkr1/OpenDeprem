// components/map/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import AlertReceiver from '@/earthquakeHandlers/AlertReceiver';
import { SimulateEarthquake } from '@/earthquakeHandlers/SimulateEarthquake';   


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [39.2, 35]; // Default center of the map

export default function Map({ earthquakeData }) {
    const [mapInstance, setMapInstance] = useState();

    // Once the map is initialized, save the map instance
    const handleMapCreate = (map) => {
        setMapInstance(map);
    };

    // Trigger earthquake effect directly inside the Map.js when data is updated
    useEffect(() => {
        if (earthquakeData && mapInstance) {
            SimulateEarthquake(mapInstance, earthquakeData);
        }
        else if(mapInstance){
            putEartquakeData(mapInstance);
        }
    }, [earthquakeData, mapInstance]);

    // Interval for fetching earthquake data every 10 seconds

    return (
        <div className="absolute" >
            <MapContainer
                dragging={false}
                zoomControl={false}
                center={position}
                zoom={6.5}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                className="h-screen w-screen fixed"
                whenCreated={handleMapCreate} // Ensure map instance is set
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                    className='ng12'
                />
                {/* Pass the earthquake data to the EarthquakeAlert component */}
                <AlertReceiver earthquakeData={earthquakeData} />
            </MapContainer>
        </div>
    );
}
