import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useEffect } from 'react';
//import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import '../styles/map.css';

const gasStations = [
  // Gas station data from the provided map.js
  { name: "Total", fuel: [{ type: "Regular", price: 125 }, { type: "Diesel", price: 130 }], latitude: 1.0123, longitude: 35.0112 },
  { name: "Rubys", fuel: [{ type: "Regular", price: 130 }, { type: "Premium", price: 150 }], latitude: 1.0187, longitude: 35.0056 },
  // ... (more stations from map.js)
];

const Map = () => {
  useEffect(() => {
    const checkNearbyGasStation = (userLatitude, userLongitude) => {
      gasStations.forEach((station) => {
        const stationDistance = calculateDistance(userLatitude, userLongitude, station.latitude, station.longitude);
        if (stationDistance < 0.5) {
          alert(`A gas station (${station.name}) is nearby!`);
        }
      });
    };

    navigator.geolocation.getCurrentPosition((position) => {
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      checkNearbyGasStation(userLatitude, userLongitude);
    });
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <MapContainer center={[1.0151, 35.0077]} zoom={10} id="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {gasStations.map((station, idx) => (
        <Marker key={idx} position={[station.latitude, station.longitude]}>
          <Popup>
            <div className="popup-content">
              <b>{station.name}</b><br />
              {station.fuel.map((fuel, i) => (
                <div key={i}>
                  Fuel Type: <span className="fuel-type">{fuel.type}</span><br />
                  Price: KES <span className="price">{fuel.price}</span><br />
                </div>
              ))}
              <a href={`gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html`}>More Details</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
