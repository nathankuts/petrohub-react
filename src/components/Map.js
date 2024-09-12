import React, { useEffect } from 'react';
import L from 'leaflet';
import '../styles/map.css';

const Map = () => {
  useEffect(() => {
    // Create a new map instance if it doesn't exist
    if (window.map) {
      window.map.remove(); // Remove the existing map instance
    }

    // Initialize the map
    const map = L.map('map').setView([1.0151, 35.0077], 10);
    window.map = map; // Store the map instance globally

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const gasStations = [
      {
        name: "Station 1",
        latitude: 1.0151,
        longitude: 35.0077,
        fuel: [
          { type: "Petrol", price: 130 },
          { type: "Diesel", price: 115 }
        ]
      },
      // Add more stations here...
    ];

    gasStations.forEach(station => {
      let popupContent = `
        <div class="popup-content">
          <b>${station.name}</b><br>
          ${station.fuel.map(fuel => `
            Fuel Type: <span class="fuel-type">${fuel.type}</span><br>
            Price: KES <span class="price">${fuel.price}</span><br>
          `).join('')}
          <a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a>
        </div>`;
      
      let marker = L.marker([station.latitude, station.longitude]).addTo(map).bindPopup(popupContent);
      marker._icon.classList.add('blink');
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus') === 'kitale') {
      map.setView([1.0151, 35.0077], 12);
    }

    // Cleanup function to remove the map when the component unmounts
    return () => {
      if (window.map) {
        window.map.remove();
        window.map = null; // Clear the global map reference
      }
    };
  }, []);

  return <div id="map"></div>;
};

export default Map;
