"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
      ACCT_NUMBER.set(this, {acct_number: acct_number});
  }

  set customer_name(value){
    this._customer_name = value;
  }

  set type(value){
    this._type = value;
  }

  getNumber() {
      return ACCT_NUMBER.get(this).acct_number;
  }
  // set acct_number(value){
  //   this.ACCT_NUMBER = value;
  // }
  //
  // get account_number() {
  //   return this.ACCT_NUMBER;
  // }


  to_s() {
    console.log(this._customer_name + ": " + this._type +"# " + this.getNumber());
  }

  cover_digits() {
    var tampil = "***-***-" + ACCT_NUMBER.get(this).acct_number.match(/\d{3,3}$/)
    console.log(this._customer_name + ": " + this._type +"# " + tampil);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-777")

console.log(my_acct)
console.log(my_acct.getNumber())

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
