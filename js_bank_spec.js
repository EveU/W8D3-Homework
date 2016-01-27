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
    assert.equal(1, jsBank.accounts.length)
  });
  // Find account by name owner name.
  // Find the largest account.
  // Find the total account value.
  // Find the average value.
  // Find the total value for an account type.
});

