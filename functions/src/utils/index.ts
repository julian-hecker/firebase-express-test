export const adder = (...numbers: number[]) =>
  numbers.reduce((prev, curr) => prev + curr);

export * from './firestoreConverter';
