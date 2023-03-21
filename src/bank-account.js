//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.balances=0;
    Boolean(this.opened);
  }

  open() {
    if(this.opened==true){
      throw new ValueError();
    }
    this.opened=true;
  }

  close() {
    if(this.opened==false){
      throw new ValueError();
    }
    this.balances=0;
    this.opened=false;
  }

  deposit(amount) {
    if(this.opened==false){
      throw new ValueError();
    }
    this.balances+=amount;
  }

  withdraw(amount) {
    if(this.opened==false || amount>this.balances || amount<0){
      throw new ValueError();
    }
    this.balances-=amount;  }

  get balance() {
    if(this.opened==false){
      throw new ValueError();
    }
    return this.balances;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}