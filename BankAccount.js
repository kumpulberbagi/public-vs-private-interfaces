"use strict"

const ACCT_NUMBER = new WeakMap()
const number = Symbol('_acct_number')

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name
    this._type = type
    this[number] = acct_number//
  }

  get acct_number(){
    return this[number];
  }

  set acct_number(value){
    this[number] = value;
  }
  get account_number() {
    return this[number]//
  }

  to_s() {
    console.log(`${this._customer_name } : ${this._type} #  ${this[number]}`); //
  }

  cover_digits(value) {
      console.log(`${this._customer_name } : ${this._type} #  ${this[number].replace(/(\d{3}-)/g, "***-")}`);//
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
