
let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville' , function(){
    it('should only return true if a registration number starts with CY', function(){
        assert.equal(isFromBellville('CY'), true);
    });
    it('should return false if a registration number is a lowercase ca', function(){
        assert.equal(isFromBellville('ca'), false);
});
it('should return false if a registration number is a mixedcase Cj', function(){
    assert.equal(isFromBellville('Cj'), false);
});
it('should return false if a registration number is a mixedcase cJ', function(){
 assert.equal(isFromBellville('cJ'), false);
});
it('should return false if a registration number is an empty string ', function(){
    assert.equal(isFromBellville(''), false);
});
});