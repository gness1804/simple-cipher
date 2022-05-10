import { generateRandomLowerAlpha } from './utils/generateRandomInt';

export class SimpleCipher {
  key: string;

  constructor() {
    this.key = this.randomize();
  }

  private randomize(): string {
    let key = '';
    let maxCount = 100;
    while (key.length < maxCount) {
      key += generateRandomLowerAlpha();
    }
    return key;
  }

  public encode(term: string) {
    throw new Error('Remove this statement and implement this function')
  }

  public decode(term: string) {
    throw new Error('Remove this statement and implement this function')
  }
}
