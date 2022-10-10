import { useEffect, useState } from 'react';
import { MapContainer } from './components/map_container';
import { NotificationContainer } from 'react-notifications';
import FloatNotification from './components/float_notifications';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const axios = require('axios').default;

    axios.get("/api/v1/notifications").then((response) => {
        setBackendData(response.data);
      }
    ).catch((error) => {console.log(error)})
  }, [])

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.latitude.value);
    console.log(event.target.longitude.value);
  };

  return (
    <div>
      {(typeof backendData.notifications === 'undefined') ? (
        console.log('Loading...')
      ) : (
        
        backendData.notifications.forEach((notification) => {
          return FloatNotification.createNotification(notification.type);
        })
      )}
      <NotificationContainer />
            
      <MapContainer onSubmit={onSubmit} />
    </div>
  );
}

export default App;
