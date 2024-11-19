import L from 'leaflet';
import Amplifier from '../functions/Amplifier';

export function SimulateEarthquake(map, { lat, lng, magnitude, depth }) {
    // Store original map center and zoom level
    const originalCenter = map.getCenter();
    const originalZoom = map.getZoom();

    // Set a fixed zoom level (no longer dependent on magnitude)
    const zoomLevel = 8 ; // Fixed zoom level
    map.setView([lat, lng], zoomLevel);

    // Audio setup
    const audio = new Audio('/sound1.ogg');
    audio.volume = 1;
    Amplifier(audio, 10);
    audio.play();

    const intervalTime = 30; // Short interval for smooth expansion
    const circleLayer = L.layerGroup().addTo(map);

    // Wave speeds and max radius based on magnitude and depth
    const pWaveSpeed = 6000;
    const sWaveSpeed = 3500;
    const maxRadius = magnitude * 15000;

    let pWaveRadius = 0;
    let sWaveRadius = 0;

    const duration = 10000; // Animation duration for real-time effect
    const postAnimationDelay = 2000; // 2-second delay after animation

    // Add the "X" symbol as a marker at the epicenter
    const xIcon = L.divIcon({
        className: 'custom-x-icon',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        iconSize: [20, 20],
        iconAnchor: [10, 10], // Center the X
    });

    // Add the "X" marker to the map
    L.marker([lat, lng], { icon: xIcon }).addTo(map);

    // Interval to animate waves
    const intervalId = setInterval(() => {
        // Stop if both waves have reached their max radius
        if (pWaveRadius >= maxRadius && sWaveRadius >= maxRadius) {
            clearInterval(intervalId); // Stop the animation
            audio.pause();
            audio.currentTime = 0;

            // Create stationary rings at final radius without fading
            circleLayer.clearLayers();

            // Delay before resetting map view
            setTimeout(() => {
                map.setView(originalCenter, originalZoom); // Reset map view
                circleLayer.clearLayers(); // Clear final rings after delay
            }, postAnimationDelay);

            return;
        }

        // Clear previous frames
        circleLayer.clearLayers();

        // P-wave ring
        const pWaveRing = L.circle([lat, lng], {
            radius: pWaveRadius,
            color: 'blue',
            weight: 1,
            opacity: 0.6, // Increased transparency
            fillOpacity: 0.01, // Increased transparency
        });

        // S-wave ring
        const sWaveRing = L.circle([lat, lng], {
            radius: sWaveRadius,
            color: 'orange',
            weight: 1.5,
            opacity: 0.6, // Increased transparency
            fillOpacity: 0.01, // Increased transparency
        });

        // Add current rings to the map
        circleLayer.addLayer(pWaveRing);
        circleLayer.addLayer(sWaveRing);

        // Increment radius for next frame
        pWaveRadius += (pWaveSpeed * intervalTime) / 1500;
        sWaveRadius += (sWaveSpeed * intervalTime) / 1500;
    }, intervalTime);
}
