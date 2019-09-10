module.exports = function(items, threshold){
    
var itemlist= [];
for(var j= 0; j<items.length; j++){
 if(items[j].qty>threshold){
 itemlist.push(items[j]);
}
}


// console.log(result)
return itemlist
}


