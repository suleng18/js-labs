import { checkIfAllEveryV1, checkIfAllEveryV2 } from './9-7';

describe('checkIfAllEveryV1', () => {
   test('should return false when not an array', () => {
      expect(checkIfAllEveryV1(1)).toBe(false);
      expect(checkIfAllEveryV1('')).toBe(false);
      expect(checkIfAllEveryV1({})).toBe(false);
      expect(checkIfAllEveryV1(null)).toBe(false);
      expect(checkIfAllEveryV1(undefined)).toBe(false);
   });

   test('should return false when array is empty', () => {
      expect(checkIfAllEveryV1([])).toBe(false);
   });

   test('should return false when array has no even number', () => {
      expect(checkIfAllEveryV1([1, 3, 5, 7])).toBe(false);
   });

   test('should return false when array has some even number', () => {
      expect(checkIfAllEveryV1([1, 2, 4, 7])).toBe(false);
   });

   test('should return true when array has all even number', () => {
      expect(checkIfAllEveryV1([2, 4, 6, 8])).toBe(true);
   });
});

describe('checkIfAllEveryV2', () => {
   test('should return false when not an array', () => {
      expect(checkIfAllEveryV2(1)).toBe(false);
      expect(checkIfAllEveryV2('')).toBe(false);
      expect(checkIfAllEveryV2({})).toBe(false);
      expect(checkIfAllEveryV2(null)).toBe(false);
      expect(checkIfAllEveryV2(undefined)).toBe(false);
   });

   test('should return false when array is empty', () => {
      expect(checkIfAllEveryV2([])).toBe(false);
   });

   test('should return false when array has no even number', () => {
      expect(checkIfAllEveryV2([1, 3, 5, 7])).toBe(false);
   });

   test('should return false when array has some even number', () => {
      expect(checkIfAllEveryV2([1, 2, 4, 7])).toBe(false);
   });

   test('should return true when array has all even number', () => {
      expect(checkIfAllEveryV2([2, 4, 6, 8])).toBe(true);
   });
});
