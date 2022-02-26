/**
 * Bubble Sort
 *
 * @param {array} originalArray
 * @return {array} sorted array
 */
export function bubbleSort(originalArray) {
  const _array = [...originalArray];
  let len = _array.length;

  while (--len) {
    for (let i = 0; i < len; i++) {
      if (_array[i] > _array[i + 1]) {
        const temp = _array[i];
        _array[i] = _array[i + 1];
        _array[i + 1] = temp;
      }
    }
  }

  return _array;
}
