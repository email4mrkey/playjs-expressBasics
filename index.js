const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/cats', (req, res) => {
  res.send('meeow')
});

app.get('/dogs', (req, res) => {
  res.send('Woof')
});

app.get('*', (req, res) => {
  res.send('I don\'t know that path');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})