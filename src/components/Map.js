import React, { useEffect } from 'react';
import L from 'leaflet';
import './styles/map.css';
import './styles/styles.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([1.0151, 35.0077], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const gasStations = [
      {
        name: "Kipetro Gas Station",
        fuel: [{ type: "Petrol", price: 150 }],
        latitude: 1.0151,
        longitude: 35.0077,
      },
      
      // Add your gas stations here, as in map.js
    ];

    gasStations.forEach(station => {
      let popupContent = `<div class="popup-content"><b>${station.name}</b><br>`;
      station.fuel.forEach(fuel => {
        popupContent += `Fuel Type: <span class="fuel-type">${fuel.type}</span><br>Price: KES <span class="price">${fuel.price}</span><br>`;
      });
      popupContent += `<a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a></div>`;
      
      const marker = L.marker([station.latitude, station.longitude]).addTo(map).bindPopup(popupContent);
      marker._icon.classList.add('blink');
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus') === 'kitale') {
      map.setView([1.0151, 35.0077], 12);
    }
    map.invalidateSize();
  }, []);

  return <div id="map"></div>;
};

export default Map;
