import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchButton from './SearchButton';
import Map from './Map';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Routes>
          <Route path="/" element={<SearchButton />} />
<<<<<<< HEAD
          <Route path="/map" element={<div style={{ width: '100%', height: '100vh' }} center={center} zoom={13}><Map /></div>} />
=======
          <Route 
            path="/map" 
            element={<div style={{ width: '100%', height: '100vh' }}><Map /></div>} 
          />
>>>>>>> 22344352a61b31e937cc4a3f5897c96df783240f
        </Routes>
      </div>
    </Router>
  );
}

export default App;
