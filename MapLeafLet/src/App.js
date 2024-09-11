// App.js
// In src/index.js or src/App.js
import 'leaflet/dist/leaflet.css';

import React from 'react';
import MapComponent from './Map';
const App = () => {
  return (
    <div>
      <h1>OpenStreetMap with React</h1>
      <MapComponent />
    </div>
  );
};

export default App;
