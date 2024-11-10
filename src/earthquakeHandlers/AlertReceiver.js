// components/map/EarthquakeAlert.js
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { SimulateEarthquake } from './SimulateEarthquake';

export default function AlertReceiver({ earthquakeData }) {
    const map = useMap();

    useEffect(() => {
        if (earthquakeData) {
            SimulateEarthquake(map, earthquakeData);
        }
    }, [earthquakeData, map]);

    return null;
}
