
let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck', function () {
    it('should return true if a registration number ends with GP', function () {
      assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('should return false if a registration number ends with MP', function () {
      assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    });
    it('should return true if a registration number starts with CY', function () {
      assert.equal(regCheck('CY189-012', 'CY'), true);
    });
    it('should return false if a registration number ends with ND', function () {
      assert.equal(regCheck('CY189-012', 'ND'), false)
    });
    it('should return false if a registration number is an empty string', function () {
      assert.equal(regCheck("" ), false);
    });
  });