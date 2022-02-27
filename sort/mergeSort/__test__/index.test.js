import { mergeSort } from '../index';

describe('selectionSort', () => {
  it('Is it sorted', () => {
    expect(mergeSort([2, 7, 0, 4])).toEqual([0, 2, 4, 7]);
    expect(mergeSort([2, -3, 11, 4, -8])).toEqual([-8, -3, 2, 4, 11]);
    expect(mergeSort([2, -3])).toEqual([-3, 2]);
    expect(mergeSort([2, -3, 7])).toEqual([-3, 2, 7]);
  });
});
