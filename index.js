var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}));
// assuming you put views folder in the same directory as app.js
app.set('views', __dirname + '/views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
// router - wherever you put it, could be in app.js
var router = express.Router();
router.get('/', function (req,res) {
  res.render('/index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})