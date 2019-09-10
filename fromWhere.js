module.exports = function(RegNumber){
    if (RegNumber === 'CY'){
        return "Bellville"
    }
  if (RegNumber === 'CJ'){
        return "Paarl"
    }
    else if (RegNumber === 'CA'){
        return "Cape Town"
    }
    else{
        return "Some other place!";
    }
};