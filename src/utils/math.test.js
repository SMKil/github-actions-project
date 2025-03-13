const { add } = require('./math');

describe('math.js', () => {
  test('Adds numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
