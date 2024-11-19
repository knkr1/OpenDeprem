'use client'

import Map from "@/components/Map";
import AboveMap from "@/components/AboveMap"
import { useState } from "react";

export default function Home() {
  const [earthquakeData, setEarthquakeData] = useState(null);

  // Function to trigger earthquake
  const triggerEarthquake = () => {
      const data = {
          lat: 38.715,       // Latitude of the earthquake's epicenter
          lng: 37.255,       // Longitude of the earthquake's epicenter
          magnitude: 4,    // Magnitude of the earthquake (e.g., 6.3)
          depth: 50          // Depth of the earthquake in kilometers (e.g., 10 km)
      };
      setEarthquakeData(data);  // Set the earthquake data to trigger the effect
  };

  return (
      <div className="relative w-full h-screen">
          <Map earthquakeData={earthquakeData} />
          <AboveMap triggerEarthquake={triggerEarthquake} />
      </div>


  )
}
