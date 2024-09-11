import React from 'react';
import '../styles/style.css';  // Import main styles
import SearchButton from './components/SearchButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <div id="app">
        <Routes>
          <Route path="/" element={<SearchButton />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
