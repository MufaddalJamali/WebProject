const express = require('express');
let app = express();
let ejs = require('ejs');
let path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var products = require('./routes/product');
  var categories = require('./routes/category');
  var  user = require('./routes/user');
  var cart = require('./routes/cart');


  app.use(express.static(path.join(__dirname, "../public")));

  app.use('/products', products);
  app.use('/categories', categories);
  app.use('/user', user);
  app.use('/cart', cart);

  app.listen(3000, () => {
    console.log('Listening on port 3000..');
  });