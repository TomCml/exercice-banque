import { Client } from "./Client";
import { RandomNumber } from "./RandomNumber";

export class Card {
  constructor(
    private owner: Client,
    private number: CardNumber,
    private cvc: CvcNumber,
    private expiryDate: ExpiryDate
  ) {}
}

export class ExpiryDate {
  constructor(
    private date: Date = new Date(
      new Date().setFullYear(new Date().getFullYear() + 5)
    )
  ) {}
}

export class CardNumber {
  constructor(private number: string = RandomNumber.generate(16)) {}
}

export class CvcNumber {
  constructor(private number: string = RandomNumber.generate(3)) {}
}
