import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import default leaflet marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const GasStationMarker = ({ station, map }) => {
    const popupContent = `
      <div class="popup-content"><b>${station.name}</b><br>
      ${station.fuel.map(fuel => `
        Fuel Type: <span class="fuel-type">${fuel.type}</span><br>
        Price: KES <span class="price">${fuel.price}</span><br>
      `).join('')}
      <a href="gas_station_details_${station.name.replace(/\s+/g, '_').toLowerCase()}.html">More Details</a>
      </div>`;

    // Create a custom icon
    const icon = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIconRetina,
      shadowUrl: markerShadow,
      iconSize: [25, 41], // Default size
      iconAnchor: [12, 41], // Anchor point of the icon
      popupAnchor: [1, -34], // Point from which the popup should open
      shadowSize: [41, 41], // Default shadow size
    });

    // Add the marker to the map
    const marker = L.marker([station.latitude, station.longitude], { icon })
      .addTo(map)
      .bindPopup(popupContent);
    
    marker._icon.classList.add('blink');
  }, [station, map]);

  return null;
};

export default GasStationMarker;
