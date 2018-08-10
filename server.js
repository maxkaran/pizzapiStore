//Declare dependencies
var express = require('express');
var path = require('path');

var app = express();

var port = 3000;

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, './public/views')); //set up path to page views
app.engine('html', require('ejs').renderFile);

//Set up routes
require('./app/routes')(app);

app.listen(port, function(){
    console.log('Listening on port ' + port);
})