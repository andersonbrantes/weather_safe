const notificationsData = require('../data/notificationsData');

exports.getAll = function() {
  return notificationsData.getNotifications();
};

exports.save = function(notification) {
  return notificationsData.saveNotification(notification);
};

exports.delete = function(id) {
  return notificationsData.deleteNotification(id);
};
