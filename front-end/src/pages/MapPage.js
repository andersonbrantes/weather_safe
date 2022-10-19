import React, { useEffect, useState, useReducer } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import LandSlideMarker from '../assets/images/deslizamento.png';
import FloodMarker from '../assets/images/alagamento.png';
import DangerMarker from '../assets/images/perigo.png';

import "./MapPage.css";

const MapPage = ({ onClick, refresh }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  });

  // TODO, utilizar a posicao atual do usuario
  const defaultPosition = {
    lat: -27.590824,
    lng: -48.551262
  };

  const markerTypes = {
    1: "Deslizamento",
    2: "Alagamento",
    3: "Pessoa ferida"
  }

  const markerIcons = {
    1: LandSlideMarker,
    2: FloodMarker,
    3: DangerMarker
  }

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const axios = require('axios').default;

    axios.get("/api/v1/events").then((response) => {
        setBackendData(response.data);
      }
    ).catch((error) => {console.log('Erro da requisicao', error)})
  }, [refresh])

  let initialPosition = (typeof backendData === 'undefined') || !backendData.length ? defaultPosition : { lat: backendData[0].latitude, lng: backendData[0].longitude };

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
              let position = {
                latitude: ev.latLng.lat(),
                longitude: ev.latLng.lng()
              }

              onClick(position);
            }}
          >
            { 
              (typeof backendData === 'undefined') ? (
                console.log('Loading...')
              ) : ( 
                backendData.map((event, i) => {
                  console.log(event);
                  return <Marker key={i} position={{ lat: event.latitude, lng: event.longitude }} options={{
                    label: {
                      text: markerTypes[event.type],
                      className: "map-marker"
                    },
                    icon: markerIcons[event.type]
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
