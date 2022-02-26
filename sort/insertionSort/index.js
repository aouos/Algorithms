/**
 * Insertion Sort
 *
 * @param {array} originalArray
 * @return {array} sorted array
 */
export function insertionSort(originalArray) {
  const _array = [...originalArray];
  const len = _array.length;

  for (let i = 1; i < len; i++) {
    let j = i;

    while (j > 0 && _array[j] < _array[j - 1]) {
      const temp = _array[j];
      _array[j] = _array[j - 1];
      _array[j - 1] = temp;
      j--;
    }
  }

  return _array;
}
