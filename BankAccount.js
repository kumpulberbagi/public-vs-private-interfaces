"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    // property bank
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  // setter

  // set property acct_number
  set account_number(acc_num){
    this.__acct_number = acc_num;
  }

  // set property type
  set account_number(type){
    this._type = type;
  }

  // set property customer_name
  set account_number(name){
    this._customer_name = name
  }

  // getter
  get get_account_number() {
    //
    return this._acct_number;
  }

  get get_customer_name(){
    return this._customer_name;
  }

  get get_type(){
    return this._type
  }


  // Method class
  to_s() {
    //
    //console.log("Hacktivate: Checking# " + this.account_number();
    console.log("Hacktivate: Checking# " + this.get_account_number);
  }

  cover_digits() {
    //
    var acc = this.get_account_number
    var hideAcc = acc.replace(/\d+[-]\d+/g, "***-***");
    console.log("Hacktivate: "+ this.get_customer_name  + " | Account : " +  hideAcc);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log("===================================");
console.log("              Account              ");
console.log("===================================");
console.log(my_acct)
//console.log(my_acct.account_number)

// release 0
console.log("===================================");
console.log("           method to_s             ");
console.log("===================================");
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
console.log("===================================");
console.log("        method cover_digits        ");
console.log("===================================");
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"

// test
// console.log(my_acct.account_number);
