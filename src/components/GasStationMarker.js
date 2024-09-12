import React, { useState } from 'react';
import { Marker, Popup } from "react-leaflet";


const GasStationMarker = ({ station, map }) => {
  useEffect(() => {
    if (!map) return; // Prevent executing if the map object is not available yet

    let popupContent = `<div class="popup-content"><b>${station.name}</b><br>`;
    station.fuel.forEach(fuel => {
      popupContent += `Fuel Type: <span class="fuel-type">${fuel.type}</span><br>Price: KES <span class="price">${fuel.price}</span><br>`;
    });
    popupContent += `<a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a></div>`;

    let marker = L.marker([station.latitude, station.longitude])
      .addTo(map)
      .bindPopup(popupContent);
    marker._icon.classList.add('blink');

    // Cleanup on unmount
    return () => {
      map.removeLayer(marker);
    };
  }, [station, map]); // Trigger when station or map changes

  return null;
};

export default GasStationMarker;
