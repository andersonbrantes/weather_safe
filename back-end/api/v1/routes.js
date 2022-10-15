const express = require('express');
const router = express.Router();

const eventsService = require('../../services/eventsService');
const notificationsService = require('../../services/notificationsService');


router.get('/events', async function(req, res) {
  const events = await eventsService.getAll();
  res.json(events);
});

router.post('/events', async function(req, res) {
  const event = req.body;
  const newEvent = await eventsService.save(event);
  res.json(newEvent);
});

router.delete('/events/:id', async function(req, res) {
  await eventsService.delete(req.params.id);
  res.end();
});



router.get('/notifications', async function(req, res) {
  const notifications = await notificationsService.getAll();
  res.json(notifications);
});

router.post('/notifications', async function(req, res) {
  const notification = req.body;
  const newNotification = await notificationsService.save(notification);
  res.json(newNotification);
});

router.delete('/notifications/:id', async function(req, res) {
  await notificationsService.delete(req.params.id);
  res.end();
});

module.exports = router;
