const express = require('express');
const app = express();
const port = 3001;
//console.log(app);

app.use((req, res) => {
  console.log("We got a new request");
  console.log(req)
});

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})