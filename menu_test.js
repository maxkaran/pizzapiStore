var pizzapi = require('dominos'); 
var myStore = new pizzapi.Store({ID: 0});

myStore.ID = 10310;

myStore.getFriendlyNames(
    function(storeData){
        console.log(storeData);
    }
);