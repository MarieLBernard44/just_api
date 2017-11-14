/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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