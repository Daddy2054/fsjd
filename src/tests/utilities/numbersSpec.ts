import numbers from '../../utilities/numbers';
describe('numbers suite', () => {
  describe('sum suite', () => {
    it('should be a sum greater than 10', () => {
      expect(numbers.sum(3, 10)).toBeGreaterThan(10);
    });
    it('should be a sum less than 10', () => {
      expect(numbers.sum(-3, 10)).toBeLessThan(10);
    });
  });
  describe('multiply suite', () => {
    it('should multiply 3 by 5 and be 15', () => {
      expect(numbers.multiply(3, 5)).toBe(15);
    });
    it('should multiply 0 by 5 to be falsy', () => {
      expect(numbers.multiply(0, 5)).toBeFalsy();
    });
  });
});
