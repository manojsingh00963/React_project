// src/App.js
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import { getLocationByIP } from './IpService';

const App = () => {
  const [position, setPosition] = useState([28.5687, 77.2111]); // Default to South Extension, Delhi
  const [ip, setIP] = useState('');

  // Fetch user's own geolocation on component mount
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const locationData = await getLocationByIP(); // No IP means fetch current user's IP location
        if (locationData && locationData.lat && locationData.lon) {
          setPosition([locationData.lat, locationData.lon]); // Update the map position with fetched location
        }
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchUserLocation();
  }, []); // Empty dependency array means this effect runs once on mount

  // Manually fetch location for entered IP
  useEffect(() => {
    const fetchLocationByIP = async () => {
      if (ip) {
        try {
          const locationData = await getLocationByIP(ip);
          if (locationData && locationData.lat && locationData.lon) {
            setPosition([locationData.lat, locationData.lon]);
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      }
    };

    fetchLocationByIP();
  }, [ip]); // This effect runs every time the `ip` changes

  return (
    <div>
      <h1>IP Address Finder with MapLibre</h1>
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
