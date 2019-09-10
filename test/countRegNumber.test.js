let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber' , function(){
    it('should return three as the totalnumber of registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return six as the total number of registration numbers', function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328'), 6);
});
})