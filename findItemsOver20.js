module.exports = function(items){
    console.log(items);
    var listitems= [];
   for(var i= 0; i<items.length; i++){
     if(items[i].qty>20) {
     listitems.push(items[i]);
     }
   } 
    return listitems
  }
  