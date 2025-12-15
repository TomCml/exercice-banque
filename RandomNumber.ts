export class RandomNumber {
  static generate(length: number): string {
    let result = "";
    const characters = "0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
