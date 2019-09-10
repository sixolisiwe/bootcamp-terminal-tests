module.exports = function(shiftType){
    if (shiftType === 'morning'){
        return 'R20'
      }
      else if(shiftType === 'afternoon'){
        return 'R10'
      }
      if (shiftType === 'nightshift'){
        return 'free'
      }
    }