// components/map/earthquakeEffect.js
import L from 'leaflet';

export function SimulateEarthquake(map, { lat, lng, magnitude, depth }) {
    // Store the original map center and zoom level before starting the effect
    const originalCenter = map.getCenter();
    const originalZoom = map.getZoom();

    // Calculate new zoom level based on magnitude
    const zoomLevel = Math.min(15, 6.5 + magnitude / 2);
    map.setView([lat, lng], zoomLevel);

    const ringRadius = (magnitude * 1000) / (depth + 1);
    const maxRadius = ringRadius * 5;

    const circleLayer = L.layerGroup().addTo(map);

    // Create an audio element and play the earthquake sound once
    const audio = new Audio('/sound1.ogg'); // Assuming the file is in the public folder
    audio.play();

    const duration = 10000; // 10 seconds for the effect to run
    const intervalTime = 200; // Interval for the expanding circle effect

    let currentRadius = 0; // Start with a radius of 0
    let startTime = Date.now(); // Track the start time

    // Function to reset the circle animation
    function resetCircleAnimation() {
        // Clear the circle layer and start the animation over
        circleLayer.clearLayers();
        currentRadius = 0;
    }

    // Set interval to repeat the expanding circle until 10 seconds pass
    const intervalId = setInterval(() => {
        // Check if 10 seconds have passed
        if (Date.now() - startTime >= duration) {
            clearInterval(intervalId); // Stop the animation after 10 seconds
            circleLayer.clearLayers(); // Clear any remaining circles
            audio.pause(); // Stop the audio
            audio.currentTime = 0; // Reset the audio position
            map.setView(originalCenter, originalZoom); // Reset the map position and zoom
            return;
        }

        // Create the expanding circle and add it to the map
        const opacity = 1 - currentRadius / maxRadius;
        const ring = L.circle([lat, lng], {
            radius: currentRadius,
            color: 'red',
            weight: 1,
            opacity,
            fillOpacity: opacity * 0.3,
        });

        circleLayer.addLayer(ring);

        // Increase the radius for the next iteration
        currentRadius += 500;

        // If the current radius exceeds max radius, reset the animation
        if (currentRadius >= maxRadius) {
            resetCircleAnimation();
        }
    }, intervalTime);
}
