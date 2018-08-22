//ok I'm dumb and just realized that dominos is not supported, so when i switched from pizzapi, I did a bad thing
//this file is for testing pizzapi and seeing how it compares to dominos

var pizzapi = require('pizzapi'); 

var store = new pizzapi.Store({ID:10310});

//store.ID = 10310;


store.getFriendlyNames(
    function(result){
        store.getMenu(
            function(returned){
                //console.log(returned.result.Products);
                var menu = returned.result.Products;
                for(var key in result.result){
                    console.log(menu[result.result[key][Object.keys(result.result[key])].ProductCode].Description);          
                }
            }
        )
        
    }
);

