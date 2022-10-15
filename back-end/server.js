const express = require('express');
const app = express();

app.use(express.static('dist'));

app.use(express.json());

app.use('/api/v1', require('./api/v1/routes'));

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Express started on port ', port)
})