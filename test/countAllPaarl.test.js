let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl' , function(){
    it('should return the number of registration numbers in the string for Paarl', function(){
           assert.equal(countAllPaarl('CJ'), true);
       });
       it('should return the number of registration numbers in the string for Paarl', function(){
          assert.equal(countAllPaarl('CA'), false);
   });
   })