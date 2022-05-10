const lowerAlphaRange = [97, 122]; // char codes for a-z

const generateRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export const generateRandomLowerAlpha = (): string =>
  String.fromCharCode(generateRandomInt(lowerAlphaRange[0], lowerAlphaRange[1]));