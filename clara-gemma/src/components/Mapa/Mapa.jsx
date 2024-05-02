import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Mapa = () => {
  const containerStyle = {
    width: '100%',
    height: '200px' // Altura adequada ao seu layout de footer
  };

  const center = {
    lat: -24.0215037,
    lng: -46.4924292
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCQEgmVR3Ch0C2anoHktagfw-Z5hHL7b-E">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Conteúdo adicional do mapa, como marcadores, pode ser adicionado aqui */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
