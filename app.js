/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var json2csv = require('json2csv');
const fs = require('fs');

/* Init server listening */
const port = process.argv[2] || 3000;
const path = process.argv[3] || '/api/v1';
app.listen(port, function () {
    console.log("Server listening on port : " + port + ' with path ' +path);
});

/* Body-parser init */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Authorize external access */
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

/* Router configuration */
app.use(allowCrossDomain);
app.use(require('./routes/routing'));

/* Rendering configuration */
app.set('views', './view');
app.set('view engine', 'pug');

module.exports = path;

/* configuration des vues*/
app.set('views', './view')
app.set('view engine', 'pug')

var fields = ['car', 'price', 'color'];
var myData = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];

try {
  var result = json2csv({ data: myData, fields: fields });
  fs.writeFile('file.csv', result, function(err) {
  	if (err) throw err;
  	console.log('file saved');
	});
  console.log(result);
} catch (err) {
  // Errors are thrown for bad options, or if the data is empty and no fields are provided.
  // Be sure to provide fields if it is possible that your data array will be empty.
  console.error(err);
}
console.log(fields);
