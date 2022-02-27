import { shellSort } from '../index';

describe('selectionSort', () => {
  it('Is it sorted', () => {
    expect(shellSort([2, 7, 0, 4])).toEqual([0, 2, 4, 7]);
    expect(shellSort([2, -3, 11, 4, -8])).toEqual([-8, -3, 2, 4, 11]);
  });
});
