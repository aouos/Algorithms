/**
 * Shell Sort
 *
 * @param {array} originalArray
 * @return {array} sorted array
 */
export function shellSort(originalArray) {
  const _array = [...originalArray];
  const len = _array.length;

  let h = 1;

  while (h < len / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {
    for (let i = h; i < len; i++) {
      let j = i;

      while (j > 0 && _array[j] < _array[j - h]) {
        const temp = _array[j];
        _array[j] = _array[j - h];
        _array[j - h] = temp;
        j -= h;
      }
    }

    h = Math.floor(h / 3);
  }

  return _array;
}
