const eventsData = require('../data/eventsData');

exports.getAll = function() {
  return eventsData.getEvents();
};

exports.save = function(event) {
  return eventsData.saveEvent(event);
};

exports.delete = function(id) {
  return eventsData.deleteEvent(id);
};
