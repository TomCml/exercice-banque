import { Client } from "./Client";
import { Account, AccountNumber } from "./Account";
import { Card } from "./Card";

class Banque {
  constructor(private name: string, private clients: Client[]) {}

  addClient(
    name: string,
    surname: string,
    city: string,
    salary: number,
    card: Card | undefined
  ): void {
    const accountNumber = new AccountNumber();
    const account = new Account(accountNumber);
    const client = new Client(name, surname, city, salary, account, card);
    this.clients.push(client);
  }
}
