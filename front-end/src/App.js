import { useEffect, useState } from 'react';
import { MapContainer } from './components/map_container';
import { NotificationContainer } from 'react-notifications';
import FloatNotification from './components/float_notifications';
import { Header } from './components/header';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const notificationTypes = {
    "1": "error",
    "2": "warning",
    "3": "success",
    "4": "info"
  }

  useEffect(() => {
    const axios = require('axios').default;

    axios.get("/api/v1/notifications").then((response) => {
        setBackendData(response.data);
      }
    ).catch((error) => {console.log(error)})
  }, [])

  return (
    <div>
      
      {(typeof backendData === 'undefined') ? (
        console.log('Loading...')
      ) : (
        backendData.forEach((notification) => {          
          return FloatNotification.createNotification(notificationTypes[notification.kind], notification.content);
        })
      )}
      <NotificationContainer />

      <MapContainer />
      <Header />
    </div>
  );
}

export default App;
