module.exports = function(callsMade){
    console.log(callsMade);
    var phoneBill= callsMade.split(", ");
    console.log(phoneBill);
    var calls =[];
    var sms = [];
    for(var i = 0; i<phoneBill.length;i++){
      if(phoneBill[i].startsWith('c')){
       calls.push(phoneBill[i]);
    }
      else {
      sms.push(phoneBill[i]);  
      }
    }
    var callAmount= calls.length *2.75;
    var smsAmount= sms.length *0.65;
    var totalAmount = callAmount + smsAmount;
    var totalAmounts = totalAmount.toFixed(2);
    var total= "R"+ totalAmounts;
    return (total);
  }