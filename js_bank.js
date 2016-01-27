var Bank = function(name){
  this.name = name;
  var accounts = [];
}

var Account = function(owner, balance, type){
  this.owner = owner;
  this.balance = balance;
  this.type = type;
}

// OO JS Bank

// Create a tested OO version for our Bank

// Bank should be able to:

// Add an account
// Find account by name owner name.
// Find the largest account.
// Find the total account value.
// Find the average value.
// Find the total value for an account type.