const { add, subtract, multiply, divide } = require('./arithmetic');

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
    '%i + %i equals %i', (a, b, expected) => {
      expect(add(a, b)).toBe(expected);
    },
);

test('4 - 1 = 3', () => {
    expect(subtract(4, 1)).toBe(3);
});

test('2 * 3 = 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('4 / 1 = 4', () => {
    expect(divide(4, 1)).toBe(4);
});

