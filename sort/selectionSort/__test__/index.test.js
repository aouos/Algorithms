import { selectionSort } from '../index';

describe('selectionSort', () => {
  it('Is it sorted', () => {
    expect(selectionSort([2, 7, 0, 4])).toEqual([0, 2, 4, 7]);
  });
});
