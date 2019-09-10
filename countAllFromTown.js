module.exports = function(regNumbers, town){
     //console.log(regNumbers);
   // console.log(Town);
   var Stellies= regNumbers.split(",");
   // console.log(Stellies)
    var Stellies2= [];
    //console.log(Stellies2)
    for(var i =0; i<Stellies.length;i++){
      if(Stellies[i].startsWith('CL')){
         Stellies2.push(Stellies[i]);                      
      }
    }
    //console.log(Stellies.length)
     return Stellies2.length; 
  
  }