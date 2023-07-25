const capitalize = require('./capitalize');

describe('capitalize()', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  // Add more tests for capitalize() function
  // ...

  test('should throw an error for empty input', () => {
    expect(() => capitalize('')).toThrow('Input must be a non-empty string');
  });

  test('should throw an error for non-string input', () => {
    expect(() => capitalize(42)).toThrow('Input must be a non-empty string');
  });
});
