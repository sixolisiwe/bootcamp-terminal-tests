let assert = require("assert");
let isWeekday = require("../isWeekday");
describe('isWeekday' , function(){
    it('should check for a week day', function(){
           assert.equal(isWeekday('Saturday'), false);
       });
       it('should check for a week day', function(){
          assert.equal(isWeekday('Monday'), true);
   });
   })