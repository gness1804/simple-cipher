export class SimpleCipher {
  key: string;
  valueMapper: Map<string, number>;

  static lowerAlphaRange: number[] = [97, 122]; // char codes for a-z

  constructor(key?: string) {
    this.key = key || this.randomize();
    this.valueMapper = this.buildValueMapper();
  }

  private generateRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private generateRandomLowerAlpha(): string {
    return String.fromCharCode(this.generateRandomInt(SimpleCipher.lowerAlphaRange[0], SimpleCipher.lowerAlphaRange[1]));
  }

  private randomize(): string {
    let key = '';
    let maxCount = 100;
    while (key.length < maxCount) {
      key += this.generateRandomLowerAlpha();
    }
    return key;
  }

  private buildValueMapper(): Map<string, number> {
    // generates a map with key of lower case letter and value as corresponding shift value. a = 0, b = 1, etc
    const map = new Map<string, number>();
    let shiftIndex = 0;
    let char = SimpleCipher.lowerAlphaRange[0];
    while (shiftIndex < 26) {
      map.set(String.fromCharCode(char), shiftIndex);
      shiftIndex++;
      char++
    }
    return map;
  }

  public encode(term: string): string {
    let newKey = this.key;
    if (this.key.length < term.length) {
      // make the key repeat for the length of the input term
      newKey = this.key.padEnd(term.length, this.key)
    }
    return term.split('').map((letter, index) => {
      const howManyToBump = this.valueMapper.get(newKey[index]);
      let newCharCode = letter.charCodeAt(0) + (howManyToBump || 0);
      if (newCharCode > 122) newCharCode = newCharCode - 122 + 96;
      return String.fromCharCode(newCharCode);
    }).join('');
  }

  public decode(term: string): string {
    let newKey = this.key;
    if (this.key.length < term.length) {
      // make the key repeat for the length of the input term
      newKey = this.key.padEnd(term.length, this.key)
    }
    return term.split('').map((letter, index) => {
      const howManyToSubtract = this.valueMapper.get(newKey[index]);
      let newCharCode = letter.charCodeAt(0) - (howManyToSubtract || 0);
      if (newCharCode < 97) newCharCode = newCharCode + 122 - 96;
      return String.fromCharCode(newCharCode);
    }).join('');
  }
}
