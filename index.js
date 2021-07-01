const express = require('express');
const app = express();
const port = 3001;
//console.log(app);

app.use((req, res) => {
  //res.send('Hello, we got your request, This is your response');
  //res.send('<h1>Hello, this is a response</h1>');
  res.send({color: 'red'})
});

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})