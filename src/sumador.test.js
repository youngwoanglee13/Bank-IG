import { BankAccount, ValueError } from "./bank-account";

describe("Bank Account", () => {
  it("has zero balance when is a newly opened account", () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });

  it("can deposit money", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  it("can deposit money sequentially", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(50);
    expect(account.balance).toEqual(150);
  });

  it("can withdraw money", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });

  it("can withdraw money sequentially", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(20);
    account.withdraw(60);
    expect(account.balance).toEqual(20);
  });

  it("checking balance of closed account throws error", () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => account.balance).toThrow(ValueError);
  });

  it("deposit into closed account throws error", () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.deposit(50);
    }).toThrow(ValueError);
  });

  it("withdraw from closed account throws error", () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  it("close already closed account throws error", () => {
    const account = new BankAccount();
    account.close();
    expect(() => {
      account.close();
    }).toThrow(ValueError);
  });

  xit("open already opened account throws error", () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.open();
    }).toThrow(ValueError);
  });

  xit("reopened account does not retain balance", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(50);
    account.close();
    account.open();
    expect(account.balance).toEqual(0);
  });

  xit("cannot withdraw more than deposited", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(25);
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  xit("cannot withdraw negative amount", () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(() => {
      account.withdraw(-50);
    }).toThrow(ValueError);
  });

  xit("cannot deposit negative amount", () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.deposit(-50);
    }).toThrow(ValueError);
  });

  xit("changing balance directly throws error", () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.balance = 100;
    }).toThrow(Error);
  });
});