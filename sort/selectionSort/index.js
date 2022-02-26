/**
 * Selection Sort
 *
 * @param {array} originalArray
 * @returns {array} sorted array
 */
export function selectionSort(originalArray) {
  const _array = [...originalArray];
  const len = _array.length;

  for (let i = 0; i < len; i++) {
    let mixIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (_array[j] < _array[mixIndex]) {
        mixIndex = j;
      }
    }

    if (i !== mixIndex) {
      const temp = _array[i];
      _array[i] = _array[mixIndex];
      _array[mixIndex] = temp;
    }
  }

  return _array;
}
