import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import "./MapPage.css";

const MapPage = ({ onClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  });

  // TODO, utilizar a posicao atual do usuario
  const defaultPosition = {
    lat: -27.590824,
    lng: -48.551262
  };

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const axios = require('axios').default;

    axios.get("/api/v1/events").then((response) => {
        setBackendData(response.data);
      }
    ).catch((error) => {console.log('Erro da requisicao', error)})
  }, [])

  let initialPosition = (typeof backendData.events === 'undefined') ? defaultPosition : backendData.events[0].position;

  return (
    <div className="map">
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%"}}
            center={initialPosition}
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
              (typeof backendData.events === 'undefined') ? (
                console.log('Loading...')
              ) : ( 
                backendData.events.map((event, i) => {
                  return <Marker key={i} position={event.position} options={{
                    label: {
                      text: "Position test",
                      className: "map-marker"
                    }
                  }} >
                  </Marker>              
                })
              )
            }

          </GoogleMap>
      ) : <></>
      }
    </div>
  );
}

export default MapPage;
