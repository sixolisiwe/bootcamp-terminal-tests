let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill' , function(){
    it('should calculate the total bill for calls made', function(){
        assert.equal(totalPhoneBill('call, call'), "R5.50");
    });
    it('should calculate the total bill for sms sent', function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), "R1.95");
});
it('should calculate the total bill for calls made and sms sent', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
});
});