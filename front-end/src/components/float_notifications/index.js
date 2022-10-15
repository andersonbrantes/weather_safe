import { Component } from 'react';
import { NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';

class FloatNotification extends Component {
  static createNotification(type, message) {
      switch (type) {
        case 'info':
          NotificationManager.info(message);
          break;
        case 'success':
          NotificationManager.success(message, 'Title here');
          break;
        case 'warning':
          NotificationManager.warning(message, 'Close after 3000ms', 300000);
          break;
        case 'error':
          NotificationManager.error(message, 'Click me!', 500000, () => {
            alert('callback');
          });
          break;
      }
  };
}

export default FloatNotification;
