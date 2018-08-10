var express = require('express');

var app = express();
var router = express.Router();

module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index');
        console.log('Index page req');
    })

    app.get('/test', function(req, res){
        res.send('This is a test');
        console.log('test page req');
    })

    app.get('/menu', function(req, res){
        res.render('menu.ejs');
        console.log('Menu page req');
    })
}