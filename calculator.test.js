const Calculator = require('./calculator');

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add()', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    // Add more tests for add() method
    // ...
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    // Add more tests for subtract() method
    // ...
  });

  describe('divide()', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    // Add more tests for divide() method
    // ...
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });

    // Add more tests for multiply() method
    // ...
  });
});
