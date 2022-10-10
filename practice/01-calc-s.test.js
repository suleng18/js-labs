// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// function calculateS(n) {}
// n <= 0 --> 0
// n > 0 --> sum
// n = 1 --> 1
// n = 2 --> 3
// n = 3 --> 6

import { calcuLatesSum, calcuLatesSumV2 } from './01-calc-s';
describe('s(n) =1 + 2 + 3 + … + n', () => {
   test('should return 0 when n <=0 ', () => {
      expect(calcuLatesSum(0)).toBe(0);
      expect(calcuLatesSum(-1)).toBe(0);
   });

   test('should return sum when N > 0', () => {
      expect(calcuLatesSum(1)).toBe(1);
      expect(calcuLatesSum(2)).toBe(3);
      expect(calcuLatesSum(10)).toBe(55);
   });
});

describe('s(n) =1 + 2 + 3 + … + n', () => {
   test('should return 0 when n <=0 ', () => {
      expect(calcuLatesSumV2(0)).toBe(0);
      expect(calcuLatesSumV2(-1)).toBe(0);
   });

   test('should return sum when N > 0', () => {
      expect(calcuLatesSumV2(1)).toBe(1);
      expect(calcuLatesSumV2(2)).toBe(3);
      expect(calcuLatesSumV2(10)).toBe(55);
   });
});
