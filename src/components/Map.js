import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import GasStationMarker from './GasStationMarker'; // Import marker component
import './styles/map.css';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map('map').setView([1.0151, 35.0077], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    setMap(mapInstance);

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus') === 'kitale') {
      mapInstance.setView([1.0151, 35.0077], 12);
    }
  }, []);

  const gasStations = [
    {
      name: "Total",
      fuel: [{ type: "Petrol", price: 150 }, { type: "Diesel", price: 125 }],
      latitude: 1.0123,
      longitude: 35.0112
    },
    // Add more stations here
  ];

  return (
    <div id="map" style={{ height: "100vh" }}>
      {map && gasStations.map(station => (
        <GasStationMarker key={station.name} station={station} map={map} />
      ))}
    </div>
  );
};

export default Map;
