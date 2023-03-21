//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.balances=0;
  }

  open() {
  
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit(amount) {
    this.balances+=amount;
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    return this.balances;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}