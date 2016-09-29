"use strict"
var x = ""
const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name
    this.type = type
    this.acct_number = acct_number
    //
  }

  set account_number(x){
    this.acct_number =  x

  }
  get account_number(){
    return this.acct_number
  }

  to_s() {
    //
    console.log(this.customer_name + ": " + this.type + "# " + this.acct_number)
  }

  cover_digits() {
    var pattern = /\d{3}-\d{3}/
    this.acct_number = this.acct_number.replace(pattern, "***-***")
    console.log(this.acct_number)
    //
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)


// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
 // "Hacktivate: Checking# ***-***-888"
my_acct.cover_digits();
