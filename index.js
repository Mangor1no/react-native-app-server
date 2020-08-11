var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/musicapp', (err, db) => {
    if (err) throw err;
    console.log('connected to db');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
const {connect} = require('puppeteer');
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);
