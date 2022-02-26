import { bubbleSort } from '../index.js';

describe('bubbleSort', () => {
  it('Is it sorted', () => {
    expect(bubbleSort([3, 6, 4, 1])).toEqual([1, 3, 4, 6]);
    expect(bubbleSort([2, -1, 8, -9, 12, 5, -3])).toEqual([
      -9, -3, -1, 2, 5, 8, 12,
    ]);
    expect(bubbleSort([0, 12, 6, 34, 7])).toEqual([0, 6, 7, 12, 34]);
  });
});
