import { findAllPositiveEvenSubArr } from './array-subarr-04';

describe('findAllPositiveEvenSubArr(numberList)', () => {
   it('should return empty if empty', () => {
      expect(findAllPositiveEvenSubArr([])).toEqual([]);
      expect(findAllPositiveEvenSubArr({})).toEqual([]);
      expect(findAllPositiveEvenSubArr('')).toEqual([]);
      expect(findAllPositiveEvenSubArr(123)).toEqual([]);
      expect(findAllPositiveEvenSubArr(true)).toEqual([]);
   });

   it('should return empty if no continuous even sub array ', () => {
      expect(findAllPositiveEvenSubArr([1, 3, 5, 7, 9, 11, 13, 1])).toEqual([]);
   });

   it('should return correct sub array list if has even sub array', () => {
      expect(findAllPositiveEvenSubArr([1, 2, 4, 5, 8, 4, 2])).toEqual([
         [2, 4],
         [8, 4, 2],
      ]);
   });
});
