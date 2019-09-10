let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
    it('should  return all the products that have a quantity higher than 20', function(){
    assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37}]), [{"name":"pears","qty":37}]);
        });
    it('should  return all the products that have a quantity higher than 20', function(){
    assert.deepEqual(findItemsOver20([{"name":"bananas","qty":23},{"name":"apples","qty":37}]), [{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });
    it('should  return false if the data is invalid', function(){
        assert.equal(findItemsOver20('jo8dfcie'), false);
    });
    });