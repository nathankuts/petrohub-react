import React, { useEffect } from 'react';
import L from 'leaflet';
import GasStationMarker from './GasStationMarker';
import './styles/map.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([1.0151, 35.0077], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const gasStations = [
    { 
        name: "Total", 
        fuel: [
            { type: "Regular", price: 125 },
            { type: "Diesel", price: 130 }
        ], 
        latitude: 1.0123, 
        longitude: 35.0112 
    },
    { 
        name: "Rubys", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 1.0187, 
        longitude: 35.0056 
    },
    { 
        name: "Wilkins", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 1.0287, 
        longitude: 35.0057 
    },
    { 
        name: "Shell", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 1.0387, 
        longitude: 35.0055 
    },
    { 
        name: "Rubys", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 0.99814, 
        longitude: 35.00649
    },
    { 
        name: "Mogas", 
        fuel: [
            { type: "Regular", price: 131 },
            { type: "Premium", price: 145 }
        ], 
        latitude: 0.99813, 
        longitude: 35.00690
    },
    { 
        name: "Mogas", 
        fuel: [
            { type: "Regular", price: 131 },
            { type: "Premium", price: 145 }
        ], 
        latitude: 0.99813, 
        longitude: 35.00690
    },
    { 
        name: "Rubys", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 0.99634, 
        longitude: 35.00448
    },
    { 
        name: "Total", 
        fuel: [
            { type: "Regular", price: 125 },
            { type: "Diesel", price: 130 }
        ], 
        latitude: 1.00138, 
        longitude: 35.00839 
    },
    { 
        name: "Rubys", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 1.00269, 
        longitude: 35.00855
    },
    { 
        name: "Shell", 
        fuel: [
            { type: "Regular", price: 130 },
            { type: "Premium", price: 150 }
        ], 
        latitude: 1.00373, 
        longitude: 35.00866 
    },
    { 
        name: "Alx gas", 
        fuel: [
            { type: "Regular", price: 135 },
            { type: "Premium", price: 133 }
        ], 
        latitude: 1.00505, 
        longitude: 35.00870 
    },
    { 
        name: "National Oil", 
        fuel: [
            { type: "Regular", price: 135 },
            { type: "Premium", price: 133 }
        ], 
        latitude: 1.01358, 
        longitude: 35.00284 
    },
    { 
        name: "Kipetro Petrol Station", 
        fuel: [
            { type: "Regular", price: 132 },
            { type: "Premium", price: 132 }
        ], 
        latitude: 1.01687, 
        longitude: 35.00295 
    },
    { 
        name: "Kipetro Petrol Station", 
        fuel: [
            { type: "Regular", price: 132 },
            { type: "Premium", price: 132 }
        ], 
        latitude: 1.01687, 
        longitude: 35.00295 
    },
    { 
        name: "Kitale Filling Station", 
        fuel: [
            { type: "Regular", price: 132 },
            { type: "Premium", price: 132 }
        ], 
        latitude: 1.1234, 
        longitude: 35.00295 
    },
    { 
        name: "Kipetro Petrol Station", 
        fuel: [
            { type: "Regular", price: 136 },
            { type: "Premium", price: 131 }
        ], 
        latitude: 1.02294, 
        longitude: 35.00443 
    },
    { 
        name: "Total", 
        fuel: [
            { type: "Regular", price: 125 },
            { type: "Diesel", price: 130 }
        ], 
        latitude: 1.02029, 
        longitude: 35.00156 
    },
    // Add more gas station data as needed
];

    gasStations.forEach(station => {
      let popupContent = `<div class="popup-content"><b>${station.name}</b><br>`;
      station.fuel.forEach(fuel => {
        popupContent += `Fuel Type: <span class="fuel-type">${fuel.type}</span><br>Price: KES <span class="price">${fuel.price}</span><br>`;
      });
      popupContent += `<a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a></div>`;
      
      let marker = L.marker([station.latitude, station.longitude]).addTo(map).bindPopup(popupContent);
      marker._icon.classList.add('blink');
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus') === 'kitale') {
      map.setView([1.0151, 35.0077], 12);
    }
  }, []);

  return <div id="map"></div>;
};

export default Map;
