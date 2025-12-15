import { Account } from "./Account";

export class Client {
  constructor(
    private name: string,
    private surname: string,
    private city: string,
    private salary: number,
    private account: Account
  ) {}

  withdraw(withdraw: number): void {
    const balance = this.account.getBalance();
    if (balance < withdraw) {
      console.log("Not enough money");
      return;
    }
    const newBalance = balance - withdraw;
    console.log("New balance: " + newBalance);
    return this.account.setBalance(newBalance);
  }

  deposit(deposit: number): void {
    const balance = this.account.getBalance();
    console.log("Old balance: " + balance);
    const newBalance = balance + deposit;
    console.log("New balance: " + newBalance);
    return this.account.setBalance(newBalance);
  }

  readAccount(): void {
    console.log(this.account.getBalance());
  }
}
