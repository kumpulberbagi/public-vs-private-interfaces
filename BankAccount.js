"use strict"

const ACCT_NUMBER = new WeakMap()
let priv = Symbol('acct_number');

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //
    this._customer_name = customer_name;
    this._type = type;
    this[priv] = acct_number;
  }

  get account_number() {
    //
    return this[priv];
  }

  set account_number(value) {
    this[priv] = value;
  }

  to_s() {
    //
    return this[priv];
  }

  cover_digits() {
    //
    return this[priv].replace(/(\d{3}-)/g, "***-");
  }
}


// Testing
let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

// Checking the log
console.log(my_acct);
console.log("ACCOUNT NUMBER: " + my_acct.account_number);
console.log("Private Number: " + my_acct.cover_digits());


// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"
// release 1
my_acct.cover_digits(); // "Hacktivate: Checking# ***-***-888"
