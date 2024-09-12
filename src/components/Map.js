import React, { useEffect } from 'react';
import L from 'leaflet';
import GasStationMarker from './GasStationMarker';
import '../styles/map.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map('map').setView([1.0151, 35.0077], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    setMap(mapInstance); // Set the map instance in state

    // Optional: Handle URL query parameters (for focusing the map)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('focus') === 'kitale') {
      mapInstance.setView([1.0151, 35.0077], 12);
    }

    // Clean up on unmount
    return () => {
      mapInstance.remove();
    };
  }, []);

  const gasStations = [
    {
      id: 1,
      name: 'Gas Station 1',
      latitude: 1.0201,
      longitude: 35.0101,
      fuel: [
        { type: 'Diesel', price: 105.50 },
        { type: 'Petrol', price: 120.00 },
      ],
    },
    {
      id: 2,
      name: 'Gas Station 2',
      latitude: 1.0301,
      longitude: 35.0201,
      fuel: [
        { type: 'Diesel', price: 110.00 },
        { type: 'Petrol', price: 125.00 },
      ],
    },
    // Add more stations as needed
  ];

  return (
    <div id="map" style={{ height: '600px' }}>
      {map && gasStations.map((station) => (
        <GasStationMarker key={station.id} station={station} map={map} />
      ))}
    </div>
  );
};

export default Map;
