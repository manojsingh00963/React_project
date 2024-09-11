// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ position }) => {
  const mapTilerKey = 'caTX7XaqIpkb2dui644q'; // Replace with your MapTiler API Key

  return (
    <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
      />
      <Marker position={position}>
        <Popup>IP Address Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
