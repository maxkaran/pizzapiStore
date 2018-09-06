var parser = require('body-parser'); //this is to parse inputs through the form
var express = require('express');
var pizzapi = require('pizzapi');

var app = express();
//var router = express.Router();

app.use(parser.urlencoded({extended : true}));
app.use(parser.json());

var closestStoreJSON;
var closestStore = new pizzapi.Store({ID : 0});
var menu;

module.exports = function(app){
    app.get('/', function(req, res){ //index or home page
        res.render('index', {
            closestStore : closestStore, 
            closestStoreJSON : closestStoreJSON
        });

        console.log('Index page req');
    })

    app.get('/menu', function(req, res){ //link to menu page, will parse menu through API to see what is available
        closestStore.getFriendlyNames(
            function(menuResult){
                menu = menuResult.result;
                //console.log(menu);

                closestStore.getMenu(
                    function(descriptMenu){
                        //console.log(descriptMenu.result.Products)
                        res.render('menu.ejs', {
                            menu : menu, 
                            descriptionMenu : descriptMenu.result.Products,
                        });

                        console.log('Menu page req');
                    }
                )
            }
        )
    })

    app.get('/checkout', function(req, res){ //link to checkout page, which will allow people to alter their cart of orders
        res.render('checkout.ejs');
        console.log('Checkout page req');
    })

    app.post('/', function(req, res){
        var addressString = "";
        var storeID;

        if(req.body.street_field)
            addressString += req.body.street_field;

        if(req.body.city_name_field)
            addressString += ", "+req.body.city_name_field;

        if(req.body.province_name_field)
            addressString += ", "+req.body.province_name_field;

        if(req.body.postal_code_field)
            addressString += ", "+req.body.postal_code_field;

            pizzapi.Util.findNearbyStores(
                addressString,
                'Delivery',
                function(restaurant){
                    closestStoreJSON = restaurant.result.Stores[0]; //JSON of the closest store
                    console.log(closestStoreJSON);
                    closestStore.ID = closestStoreJSON.StoreID;
                    console.log(closestStore);

                    res.render('index', {closestStore : closestStore, deliveryAddress : addressString, closestStoreJSON : closestStoreJSON});
                }
            );        
    });
}