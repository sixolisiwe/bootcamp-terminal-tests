let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    
    it('should return products that have a quantity higher than the threshold', function(){
    assert.deepEqual(findItemsOver([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
        ],20), [
           
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
          
            ])
    });
    it('should return false if the data is invalid', function(){
        assert.equal(findItemsOver('1356gutf'), false)
    });
    });