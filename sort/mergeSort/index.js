function merge(array, start, mid, end) {
  let i = start;
  let j = mid + 1;
  const aux = [...array];

  for (let k = start; k <= end; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > end) {
      array[k] = aux[i++];
    } else if (aux[i] > aux[j]) {
      array[k] = aux[j++];
    } else {
      array[k] = aux[i++];
    }
  }
}

function devide(array, start, end) {
  if (end <= start) {
    return;
  }

  const mid = start + Math.floor((end - start) >> 1);
  devide(array, start, mid);
  devide(array, mid + 1, end);

  merge(array, start, mid, end);
}

/**
 *
 * @param {array} originalArray
 * @return {array} sorted array
 */
export function mergeSort(originalArray) {
  const _array = [...originalArray];
  const len = _array.length;

  devide(_array, 0, len - 1);

  return _array;
}
