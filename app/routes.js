var express = require('express');

var app = express();
var router = express.Router();

module.exports = function(app){
    app.get('/', function(req, res){
        res.send('Hello World');
        console.log('Index page req');
    })

    app.get('/test', function(req, res){
        res.send('This is a test');
        console.log('test page req');
    })

    app.get('/ejs_page', function(req, res){
        res.render('test.ejs');
        console.log('ejs page req');
    })
}