module.exports = function(salesData){
    var mostdept = [];
    var mostD = "";
    for (var i = 0; i < salesData.length; i++) {
        var sale = salesData[i].sales;
        var most = salesData[i].department;
        if (mostdept < sale) {
            mostdept = sale;
            mostD = most
        }
    }
    return mostD
}


// module.exports= mostProfitableDepartment(salesData);