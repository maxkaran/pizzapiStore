var express = require('express');
var dominos = require('dominos');

var app = express();
var router = express.Router();

var closestStore = new dominos.Store({ID : '10310'})

var friendlyMenu;
closestStore.getFriendlyNames(
     function(storeData){
        friendlyMenu = storeData.result;
        console.log(friendlyMenu);
     }
 );

module.exports = function(app){
    app.get('/', function(req, res){ //index or home page
        res.render('index');
        console.log('Index page req');
    })

    app.get('/menu', function(req, res){ //link to menu page, will parse menu through API to see what is available
        res.render('menu.ejs', {friendlyMenu : friendlyMenu});
        console.log('Menu page req');
    })

    app.get('/checkout', function(req, res){ //link to checkout page, which will allow people to alter their cart of orders
        res.render('checkout.ejs');
        console.log('Checkout page req');
    })
}