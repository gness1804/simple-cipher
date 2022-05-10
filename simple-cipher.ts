import { generateRandomLowerAlpha } from './utils/generateRandomInt';

export class SimpleCipher {
  key: string;
  valueMapper: Map<string, number>;

  constructor() {
    this.key = this.randomize();
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

  public encode(term: string) {
    throw new Error('Remove this statement and implement this function')
  }

  public decode(term: string) {
    throw new Error('Remove this statement and implement this function')
  }
}
