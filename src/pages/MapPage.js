import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })

  return (
    <div className="map">
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%"}}
            center={{
              lat: -27.590824,
              lng: -48.551262
            }}
            zoom={18}
            onLoad={() => {}}
            onUnmount={() => {}}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker position={{
              lat: -27.590824,
              lng: -48.551262
            }} options={{
              label: {
                text: "Position test",
                className: "map-marker"
              }
            }} />
          </GoogleMap>
      ) : <></>
      }
    </div>
  );
}

export default MapPage;

