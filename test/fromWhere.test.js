let assert = require("assert");
let fromWhere = require("../fromWhere");
describe('fromWhere' , function(){
    it('should take a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal(fromWhere(''), 'Some other place!');
});
it('should take a car registration number as a parameter and returns the town the car is from', function(){
    assert.equal(fromWhere('CA'), 'Cape Town');
});
it('should take a car registration number as a parameter and returns the town the car is from', function(){
    assert.equal(fromWhere('CJ'), 'Paarl');
});
});