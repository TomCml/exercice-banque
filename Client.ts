import { Account } from "./Account";
import { Card } from "./Card";

export class Client {
  constructor(
    public name: string,
    public surname: string,
    public city: string,
    public salary: number,
    public account: Account,
    public card : Card | undefined
  ) {}

  setCard(card: Card): void {
    this.card = card;
  }

  withdraw(withdraw: number): void {
    this.account.withdraw(withdraw);
  }

  deposit(deposit: number): void {
    this.account.deposit(deposit);
  }

  readAccount(): void {
    console.log(this.account.getBalance());
  }
}
