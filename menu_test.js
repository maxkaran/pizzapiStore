//This file is soley for me to play with the API and learn it's functionality, has no purpose in terms of the website

var dominos = require('pizzapi'); 
var myStore = new dominos.Store({ID: 0});

myStore.ID = 10310;

dominos.Util.findNearbyStores(
    '399 Barrie St, Kingston, Ontario, k7k3t8',
    'Delivery',
    function(storeData){
        //console.log(storeData.result.Stores[0]);
        //myStore.ID = storeData.result.Stores[0].StoreID;

        myStore.getMenu(
            function(storeData){
                var menu = storeData.menuByCode;
                var priceMenuCount = 0;
                //console.log(storeData);

                //console.log("Menu items with a price: ", priceMenuCount);

                myStore.getFriendlyNames(
                    function(result){
                        console.log(result.result[0]);
                    }
                );
            }
        );
    }
);

/*var Max = new dominos.Customer(
    {
        firstName: 'Max',
        lastName: 'Karan',
        address: '399 Barrie St, Kingston, ON, k7k3t8',
        email: 'barack@whitehouse.gov'
    }
);

var order = new dominos.Order(
    {
        customer: Max,

        //optional set the store ID right away
        storeID: 10310,

        deliveryMethod: 'Delivery' //(or 'Carryout')
    }
);

order.addItem({
    code: 'F_HOTDCUP',
    options: [],
    quantity: 1
})

order.price(      
    function(result) {
        //console.log("Price: ", result.result.Order);
})*/