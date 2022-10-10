const express = require('express');
const app = express();

app.use(express.static('dist'))

app.get("/api/v1/notifications", (req, res) => {
  let weatherNotifications = [
    { "type": "warning", "message": "Mensagem de teste" },
    { "type": "error", "message": "Mensagem de teste" }
  ];

  res.json({"notifications": weatherNotifications});
})

app.get("/api/v1/events", (req, res) => {
  let events = [
    { "name": "evento1", position: { lat: -22.25914437401084, lng: -42.53474483538907 } },
    { "name": "evento2", position: { lat: -22.260355048434356, lng: -42.53451025253795 } },
    { "name": "evento3", position: { lat: -22.259144381829227, lng: -42.53598082210057 } },
    { "name": "evento4", position: { lat: -22.25933641611573, lng: -42.53515983689661 } }
  ];

  res.json({"events": events});
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Express started on port 5000')
})