var pizzapi = require('dominos'); 
var myStore = new pizzapi.Store({ID: 0});

//myStore.ID = 10310;

pizzapi.Util.findNearbyStores(
    '399 Barrie St, Kingston, ON, k7k3t8',
    'Delivery',
    function(storeData){
        console.log(storeData.result.Stores);
        myStore.ID = storeData.result.Stores[0].StoreID;

        myStore.getFriendlyNames(
            function(storeData){
                console.log(storeData);
            }
        );
    }
);



