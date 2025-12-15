import { Client } from "./Client";
import { Account, AccountNumber } from "./Account";

class Banque {
  constructor(private name: string, private clients: Client[]) {}

  addClient(name: string, surname: string, city: string, salary: number): void {
    const accountNumber = new AccountNumber();
    const account = new Account(accountNumber);
    const client = new Client(name, surname, city, salary, account);
    this.clients.push(client);
  }
}
