// App.js
import React, { useState, useEffect } from 'react';
import MapComponent from './Map';
import { getLocationByIP } from './IpServices';

const App = () => {
  const [position, setPosition] = useState([28.5687, 77.2111]); // Default to South Extension, Delhi
  const [ip, setIP] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const locationData = await getLocationByIP(ip);
        if (locationData && locationData.lat && locationData.lon) {
          setPosition([locationData.lat, locationData.lon]);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocation();
  }, [ip]);

  return (
    <div>
      <h1>IP Address Finder</h1>
      <input
        type="text"
        placeholder="Enter IP address"
        value={ip}
        onChange={(e) => setIP(e.target.value)}
      />
      <MapComponent position={position} />
    </div>
  );
};

export default App;
