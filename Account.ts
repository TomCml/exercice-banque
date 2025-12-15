import { RandomNumber } from "./RandomNumber";

export class Account {
  constructor(private string: AccountNumber, private balance: number = 0) {}

  getBalance(): number {
    return this.balance;
  }

  withdraw(withdraw: number): number {
    const balance = this.balance;
    if (balance < withdraw) {
      console.log("Not enough money");
      return balance;
    }
    const newBalance = balance - withdraw;
    this.balance = newBalance;
    console.log("New balance: " + this.balance);
    return this.balance;

  }

  deposit(deposit: number): number {
    const balance = this.balance;
    console.log("Old balance: " + balance);
    const newBalance = balance + deposit;
    this.balance = newBalance;
    console.log("New balance: " + this.balance);
    return this.balance;
  }
}

export class AccountNumber {
  constructor(private number: string = RandomNumber.generate(7)) {}
}
