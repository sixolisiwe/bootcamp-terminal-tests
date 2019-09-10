module.exports = function(regNumbers){
    //console.log(regNumbers)
    var Paarl= regNumbers.split(", ");
    //console.log(Paarl);
    var Paarl2 = []
    for(var i=0; i<Paarl.length; i++){
      if(Paarl[i].startsWith('CJ')){
        Paarl2.push(Paarl[i]);
      }   
    }
    console.log(Paarl2.length)
    return Paarl2.length;
}