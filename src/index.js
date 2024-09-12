import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './components/App';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
