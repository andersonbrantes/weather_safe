import { MapContainer } from './components/map_container';
import { NotificationContainer } from 'react-notifications';
import FloatNotification from './components/float_notifications';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  let weatherNotifications = [
    { "type": "warning", "message": "Mensagem de teste" },
    { "type": "error", "message": "Mensagem de teste" }
  ]

  // Teste para criar notificacoes
  {
    weatherNotifications.forEach((notification) => {
      return FloatNotification.createNotification(notification.type);
    })
  }

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.latitude.value);
    console.log(event.target.longitude.value);
  };

  return (
    <div>
      <NotificationContainer />
            
      <MapContainer onSubmit={onSubmit} />      
    </div>
  );
}

export default App;
