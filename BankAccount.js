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
    return this._customer_name + ": " + this._type + "# " + this[priv];
  }

  cover_digits() {
    //
    let covered_number = this[priv].replace(/(\d{3}-)/g, "***-"); // covered number
    return this._customer_name + ": " + this._type + "# " + covered_number;
  }
}


// Testing
let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

// Checking the log
console.log(my_acct);


// release 0
console.log(my_acct.to_s()); // "Hacktivate: Checking# 333-555-888"
// release 1
console.log(my_acct.cover_digits()); // "Hacktivate: Checking# ***-***-888"
