import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchButton from './SearchButton';
import Map from './Map';
import '../styles/styles.css';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <div id="app">
        <Routes>
          <Route path="/" element={<SearchButton />} />
          <Route
            path="/map"
            element={<Map style={{ width: '100%', height: '100vh' }} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
