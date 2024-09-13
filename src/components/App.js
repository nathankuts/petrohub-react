import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchButton from './SearchButton';
import Map from './Map';
import '../styles/styles.css';
<<<<<<< HEAD

=======
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
>>>>>>> e5e1e008169e1150a7e48be4dad3b27f1e249cf2

function App() {
  return (
    <Router>
      <div id="app">
        <Routes>
          <Route path="/" element={<SearchButton />} />
          <Route
            path="/map"
            element={<Map style={{ width: '100%', height: '641px' }} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
