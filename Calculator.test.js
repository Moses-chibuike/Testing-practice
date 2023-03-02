const Calculator = require('./Calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should return the difference between two numbers', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
      expect(calculator.subtract(-1, -3)).toBe(2);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    it('should throw an error if the second number is zero', () => {
      expect(() => calculator.divide(4, 0)).toThrowError('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 5)).toBe(-10);
    });
  });
});
