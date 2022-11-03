import { findAllNumbers } from './array-filter-06';

describe('Name of the group', () => {
  it('should return empty array if list is empty ', () => {
    expect(findAllNumbers([])).toEqual([]);
    expect(findAllNumbers()).toEqual([]);
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers('')).toEqual([]);
    expect(findAllNumbers(true)).toEqual([]);
  });

  it('should return empty array if list has no number starts with odd digit', () => {
    expect(findAllNumbers([2, 423, 6234, -21232])).toEqual([]);
  });

  it('should return correct list of numbers starting with odd digit', () => {
    expect(findAllNumbers([2, 42, 123, -56, 723823])).toEqual([123, -56, 723823]);
  });
});
