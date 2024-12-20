import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { SimulateEarthquake } from "@/earthquakeHandlers/SimulateEarthquake";
import axios from "axios";


const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const position = [39.2, 35]; // Default center of the map

export default function Map({}) {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [mapInstance, setMapInstance] = useState();

  const handleMapCreate = (map) => {
    setMapInstance(map);
  };

  // Fetch earthquake data periodically
  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        const response = await axios.get(
          "https://plain-wave-3e59.kaankarg08.workers.dev/api/earthquakes"
        );

        // Ensure data is valid before setting it
        if (response.data && response.data.result) {
          setEarthquakeData(response.data.result);
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching earthquake data:", error.message);
        console.error(error.response);
      }
    };

    const interval = setInterval(fetchEarthquakeData, 2000); // Fetch every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Function to determine circle color based on magnitude
  const getColor = (magnitude) => {
    if (magnitude >= 7) return "darkred";
    if (magnitude >= 6) return "red";
    if (magnitude >= 5) return "orange";
    if (magnitude >= 4) return "gold";
    if (magnitude >= 3) return "yellowgreen";
    if (magnitude >= 2) return "green";
    return "lightblue"; // For magnitudes < 2
  };

  // Function to determine circle size based on magnitude
  const getSize = (magnitude) => magnitude * 20000;

  return (
    <div className="absolute">
        <MapContainer
         
         center={position}
         zoom={6.5}
         
         scrollWheelZoom={false}
         dragging={false}
         doubleClickZoom={false}
         touchZoom={false}
         zoomControl={false}
         
         className="h-screen w-screen fixed"
         whenCreated={handleMapCreate}
       >
         <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
         />
         {/* Plot earthquake markers */}
         {earthquakeData.map((quake) => {
           const { coordinates } = quake.geojson;
           const { mag: magnitude, title, depth, date } = quake;
           const [lng, lat] = coordinates;
 
           return (
             <CircleMarker
               key={quake._id}
               center={[lat, lng]}
               radius={getSize(magnitude) / 10000} // Adjust size multiplier for larger circles
               fillColor={getColor(magnitude)}
               fillOpacity={0.8}
               stroke={true} // Enable stroke
               color="black" // Stroke color
               weight={1} // Stroke width
             >
               <Tooltip>
                 <div className="backdrop-blur-md bg-white/80 p-2 rounded-md">
                   <strong>{title}</strong>
                   <br />
                   Büyüklük: {magnitude}
                   <br />
                   Derinlik: {depth} km
                   <br />
                   Tarih: {date}
                 </div>
               </Tooltip>
             </CircleMarker>
           );
         })}
       </MapContainer>
    </div>
  );
}