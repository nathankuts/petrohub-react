import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/map.css';
import './styles/styles.css';

const gasStations = [
  {
    name: "Kipetro Gas Station",
    fuel: [{ type: "Petrol", price: 150 }],
    latitude: 1.0151,
    longitude: 35.0077,
  },
  // Add more gas stations here as needed
];

const Map = () => {
  return (
    <MapContainer
      center={[1.0151, 35.0077]}
      zoom={10}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {gasStations.map((station, index) => (
        <Marker key={index} position={[station.latitude, station.longitude]}>
          <Popup>
            <div className="popup-content">
              <b>{station.name}</b><br />
              {station.fuel.map((fuel, idx) => (
                <div key={idx}>
                  Fuel Type: <span className="fuel-type">{fuel.type}</span><br />
                  Price: KES <span className="price">{fuel.price}</span><br />
                </div>
              ))}
              <a href={`gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html`}>
                More Details
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
