var jsBank = require('./js_bank')[0];
var accounts = require('./js_bank')[1];
var assert = require('assert');

// OO JS Bank
// Create a tested OO version for our Bank
describe('JS Bank', function(){
// Bank should be able to:
  // Add an account
  it('should be able to add an account', function(){
    jsBank.addAccount(accounts[0]);
    assert.equal(1, jsBank.accounts.length);
  });
  // Find account by name owner name.
  it('should find account by owner name', function(){
    assert.equal(jsBank.accounts[0], jsBank.findByOwner('Jay'));
  });
  // Find the largest account.
  it('should find the largest account', function(){
    jsBank.addAccount(accounts[1]);
    jsBank.addAccount(accounts[2]);
    jsBank.addAccount(accounts[3]);
    jsBank.addAccount(accounts[4]);
    assert.equal(jsBank.accounts[1], jsBank.largestAccount());
  });
  // Find the total account value.
  it('should find the total account value', function(){
    assert.equal(55851.85, jsBank.totalValue());
  });
  // Find the average value.
  it('should find the average value', function(){
    assert.equal(11170.369999999999, jsBank.averageValue());
  });
  // Find the total value for an account type.
  it('should find the total value for an account type', function(){
    assert.equal(55325.35, jsBank.totalValue('business'))
    assert.equal(526.50, jsBank.totalValue('personal'))
  });
});

