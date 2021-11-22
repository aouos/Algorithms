/**
 * Merge Sort
 *
 * @param {array} originalArray
 * @return {array} Sorted array
 *
 * @todo Repeating element
 */

const aux = [];

const mergeSort = (originalArray) => {
  const array = [...originalArray];
  const N = array.length;

  sort(array, 0, N - 1);

  return array;
};

function sort(array, lo, hi) {
  if (hi <= lo) {
    return;
  }

  const mid = lo + Math.floor((hi - lo) / 2);
  sort(array, lo, mid);
  sort(array, mid + 1, hi);

  merge(array, lo, mid, hi);
}

function merge(array, lo, mid, hi) {
  let i = lo,
    j = mid + 1;

  for (let k = lo; k <= hi; k++) {
    aux[k] = array[k];
  }

  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > hi) {
      array[k] = aux[i++];
    } else if (aux[i] > aux[j]) {
      array[k] = aux[j++];
    } else {
      array[k] = aux[i++];
    }
  }
}
