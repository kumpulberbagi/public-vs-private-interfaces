"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name
    this.type = type
    this._acct_number = acct_number
  }
  set account_number(account_number) {
    this._acct_number = account_number
  }
  get account_number() {
    return this._acct_number
  }
  to_s() {
    console.log(this.customer_name + ":" + this.type + "#" + this.account_number);
  }

  cover_digits() {
    console.log(this.account_number.replace(/\d+[-]\d+/, "***-***"))
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

// console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
