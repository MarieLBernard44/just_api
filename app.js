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

/* Router configuration */
app.use(require('./routes/routing'));

module.exports = path;

/* configuration des vues*/
app.set('views', './view')
app.set('view engine', 'pug')
