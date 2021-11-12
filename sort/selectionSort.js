/**
 * Selection sort
 *
 * @param {array} array
 * @return {array} Sorted array
 */

export const selectionSort = (array) => {
  const N = array.length;

  for (let i = 0; i < N; i++) {
    let min = i;

    for (let j = i + 1; j < N; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
};

/**
 * example array
 */
const example = [1, 15, 3, 12, 6, 4, 24, 7];

/**
 * test selectionSort
 */
console.log(selectionSort(example));
