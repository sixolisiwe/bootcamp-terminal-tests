module.exports = function(isWeekday){
    return isWeekday.startsWith ('Mon') || isWeekday.startsWith ('Tue') || isWeekday.startsWith ('Wed') ||
     isWeekday.startsWith ('Thu') || isWeekday.startsWith ('Fri')
}