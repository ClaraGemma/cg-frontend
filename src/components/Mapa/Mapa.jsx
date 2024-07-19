import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Mapa = () => {
  const mapStyles = {
    height: '339px',
    width: '484px'
  };

  const defaultCenter = {
    lat: -22.9035,
    lng: -43.2096
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCQEgmVR3Ch0C2anoHktagfw-Z5hHL7b-E"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
