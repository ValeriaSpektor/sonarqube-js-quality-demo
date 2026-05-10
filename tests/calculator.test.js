const {
  add,
  divide,
  calculateDiscount,
  isAdult
} = require('../src/calculator');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('divides two numbers correctly', () => {
  expect(divide(10, 2)).toBe(5);
});

test('calculates discount correctly', () => {
  expect(calculateDiscount(100, 20)).toBe(80);
});

test('checks adult age correctly', () => {
  expect(isAdult(18)).toBe(true);
});
