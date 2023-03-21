//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    
  }

  open() {
    
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit() {
    throw new Error("Remove this statement and implement this function");
  }

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    return 0;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}