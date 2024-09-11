// src/MapComponent.js
import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = ({ position }) => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Map
        initialViewState={{
          longitude: position[1],
          latitude: position[0],
          zoom: 12,
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle="https://demotiles.maplibre.org/style.json" // MapLibre public style
        mapLib={import('maplibre-gl')}
      >
        <Marker longitude={position[1]} latitude={position[0]} />
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

export default MapComponent;
