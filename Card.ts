import { Client } from "./Client";
import { RandomNumber } from "./RandomNumber";

class Card {
  constructor(
    private owner: Client,
    private number: CardNumber,
    private cvc: CvcNumber,
    private balance: number,
    private expiryDate: ExpiryDate
  ) {}
}

class ExpiryDate {
  constructor(
    private date: Date = new Date(
      new Date().setFullYear(new Date().getFullYear() + 5)
    )
  ) {}
}

class CardNumber {
  constructor(private number: string = RandomNumber.generate(16)) {}
}

class CvcNumber {
  constructor(private number: string = RandomNumber.generate(3)) {}
}
