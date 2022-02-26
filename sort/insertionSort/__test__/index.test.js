import { insertionSort } from '../index.js';

describe('insertionSort', () => {
  it('Is it sorted', () => {
    expect(insertionSort([4, 1, 7, 9, 2])).toEqual([1, 2, 4, 7, 9]);
    expect(insertionSort([5, -2, 4, 12, 0, 3])).toEqual([-2, 0, 3, 4, 5, 12]);
    expect(insertionSort([13, 0, 34])).toEqual([0, 13, 34]);
    expect(insertionSort([1])).toEqual([1]);
  });
});
