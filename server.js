//Declare dependencies
var express = require('express');
var path = require('path');
var parser = require('body-parser');
var app = express();

app.use(parser.urlencoded({extended : true}));
app.use(parser.json());

var port = 3000;

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, './public/views')); //set up path to page views
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public'))); //for css links default root is now public file

//Set up routes
require('./app/routes')(app);

app.listen(port, function(){
    console.log('Listening on port ' + port);
})