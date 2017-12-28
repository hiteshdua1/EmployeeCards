'use strict';

var express = require('express');
var path = require('path');

// Initiate Express App	
var app = express();

app.use(express.static(path.join(__dirname,'/public')));

// Start Express server
var port = process.env.PORT || config.app.port ;

var appserver = app.listen(port, function () {
    console.log("Running on PORT : " + port);
});
