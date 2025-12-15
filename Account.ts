import { RandomNumber } from "./RandomNumber";

export class Account {
  constructor(private string: AccountNumber, private balance: number = 0) {}

  getBalance(): number {
    return this.balance;
  }

  setBalance(balance: number): void {
    this.balance = balance;
  }
}

export class AccountNumber {
  constructor(private number: string = RandomNumber.generate(7)) {}
}
