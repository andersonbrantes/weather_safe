import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import "./MapPage.css";

const MapPage = ({ onClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  });

  // TODO, utilizar a posicao atual do usuario
  const initialPosition = {
    lat: -27.590824,
    lng: -48.551262
  };

  // Teste para criar alguns marcadores no mapa
  const mapEvents = [
    { "name": "evento1", position: { lat: -22.25914437401084, lng: -42.53474483538907 } },
    { "name": "evento2", position: { lat: -22.260355048434356, lng: -42.53451025253795 } },
    { "name": "evento3", position: { lat: -22.259144381829227, lng: -42.53598082210057 } },
    { "name": "evento4", position: { lat: -22.25933641611573, lng: -42.53515983689661 } }
  ];

  return (
    <div className="map">
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%"}}
            center={mapEvents[0].position}
            zoom={18}
            options={{
              zoomControl: true,
              mapTypeControl: true,
              scaleControl: true,
              streetViewControl: true,
              rotateControl: true,
              fullscreenControl: false
            }}
            onLoad={() => {}}
            onUnmount={() => {}}
            onClick={ev => {
              console.log("latitide = ", ev.latLng.lat());
              console.log("longitude = ", ev.latLng.lng());

              let position = {
                latitude: ev.latLng.lat(),
                longitude: ev.latLng.lng()
              }

              onClick(position);
            }}
          >
            {
              mapEvents.map((event) => {
                return <Marker position={event.position} options={{
                  label: {
                    text: "Position test",
                    className: "map-marker"
                  }
                }} >
                </Marker>              
              })
            }

          </GoogleMap>
      ) : <></>
      }
    </div>
  );
}

export default MapPage;
