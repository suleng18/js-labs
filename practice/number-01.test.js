import { isIncreasingNumberV1, isIncreasingNumberV2 } from './number-01.js';

describe('isIncreasingNumberV1(n)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 4444, 55555, 666666, 21, 312, 7831, 76872, 121212].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(false);
    });
  });

  it('should return true when n is an increasing number', () => {
    [12, 123, 1234, 34568, 2346789].forEach((x) => {
      expect(isIncreasingNumberV1(x)).toBe(true);
    });
  });
});

describe('isIncreasingNumberV2(n)', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false);
    });
  });

  it('should return false when n is not an increasing number', () => {
    [11, 222, 333, 4444, 55555, 666666, 21, 312, 7831, 76872, 121212].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(false);
    });
  });

  it('should return true when n is an increasing number', () => {
    [12, 123, 1234, 34568, 2346789].forEach((x) => {
      expect(isIncreasingNumberV2(x)).toBe(true);
    });
  });
});
