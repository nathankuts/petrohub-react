import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/map.css';

const GasStationMarker = ({ station }) => {
  useEffect(() => {
    const popupContent = `<div class="popup-content"><b>${station.name}</b><br>`;
    station.fuel.forEach(fuel => {
      popupContent += `Fuel Type: <span class="fuel-type">${fuel.type}</span><br>Price: KES <span class="price">${fuel.price}</span><br>`;
    });
    popupContent += `<a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a></div>`;
    
    const marker = L.marker([station.latitude, station.longitude]).addTo(map).bindPopup(popupContent);
    marker._icon.classList.add('blink');
  }, [station]);

  return null;
};

// Fix for default marker icon not showing
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default GasStationMarker;
