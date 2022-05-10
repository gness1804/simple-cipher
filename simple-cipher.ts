import { generateRandomLowerAlpha } from './utils/generateRandomInt';

export class SimpleCipher {
  key: string;
  valueMapper: Map<string, number>;

  constructor(key?: string) {
    this.key = key || this.randomize();
    this.valueMapper = this.buildValueMapper();
  }

  private randomize(): string {
    let key = '';
    let maxCount = 100;
    while (key.length < maxCount) {
      key += generateRandomLowerAlpha();
    }
    return key;
  }

  private buildValueMapper(): Map<string, number> {
    // generates a map with key of lower case letter and value as corresponding shift value. a = 0, b = 1, etc
    const lowerAlphaRange = [97, 122]; // char codes for a-z
    const map = new Map<string, number>();
    let shiftIndex = 0;
    let char = lowerAlphaRange[0];
    while (shiftIndex < 26) {
      map.set(String.fromCharCode(char), shiftIndex);
      shiftIndex++;
      char++
    }
    return map;
  }

  public encode(term: string): string {
    return term.split('').map((letter, index) => {
      const howManyToBump = this.valueMapper.get(this.key[index]);
      let newCharCode = letter.charCodeAt(0) + (howManyToBump || 0);
      if (newCharCode > 122) newCharCode = newCharCode - 122 + 97;
      return String.fromCharCode(newCharCode);
    }).join('');
  }

  public decode(term: string): string {
    return term.split('').map((letter, index) => {
      const howManyToSubtract = this.valueMapper.get(this.key[index]);
      let newCharCode = letter.charCodeAt(0) - (howManyToSubtract || 0);
      // if (newCharCode < 98) newCharCode = newCharCode + 122 - 97;
      return String.fromCharCode(newCharCode);
    }).join('');
  }
}
