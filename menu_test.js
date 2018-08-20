//This file is soley for me to play with the API and learn it's functionality, has no purpose in terms of the website

var dominos = require('dominos'); 
var myStore = new dominos.Store({ID: 0});

//myStore.ID = 10310;

dominos.Util.findNearbyStores(
    '399 Barrie St, Kingston, ON, k7k3t8',
    'Delivery',
    function(storeData){
        //console.log(storeData.result.Stores);
        myStore.ID = storeData.result.Stores[0].StoreID;

        myStore.getMenu(
            function(storeData){
                var menu = storeData.menuByCode;
                var priceMenuCount = 0;
                //console.log(menu);
                var keysObj = Object.keys(storeData.menuByCode)
                for(var key in keysObj){
                    console.log(keysObj[key]);
                    if(menu[keysObj[key]].menuData.Price){
                        console.log(menu[keysObj[key]].menuData.Price)                    
                        priceMenuCount++;
                    }
                }
                console.log("Menu items with a price: ", priceMenuCount);

            }
        );
    }
);

var order = new dominos.Order();

order.addItem({
    code: 'F_HOTDCUP',
    options: [],
    quantity: 1
})

order.price(      
    function(result) {
        console.log("Price: ", result);
})