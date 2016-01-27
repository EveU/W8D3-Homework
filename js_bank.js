var Bank = function(name){
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
}

Bank.prototype.findByOwner = function(owner){
  for(account in this.accounts){
    if(this.accounts[account]['owner'] === owner){
      return this.accounts[account];
    }
  }
}

var Account = function(owner, balance, type){
  this.owner = owner;
  this.balance = balance;
  this.type = type;
}

var account1 = new Account('Jay', 125.50, 'personal');
var account2 = new Account('Val', 55125.10, 'business');
var account3 = new Account('Marc', 400.00, 'personal');
var account4 = new Account('Keith', 200.25, 'business');
var account5 = new Account('Rick', 1.00, 'personal');

var accounts = [account1, account2, account3, account4, account5];

var jsBank = new Bank('JS Bank');

// OO JS Bank

// Create a tested OO version for our Bank

// Bank should be able to:

// Add an account
// Find account by name owner name.
// Find the largest account.
// Find the total account value.
// Find the average value.
// Find the total value for an account type.

module.exports = [jsBank, accounts];