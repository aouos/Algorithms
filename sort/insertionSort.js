/**
 * Insertion Sort
 *
 * @param {array} originalArray
 * @return {array} Sorted array
 */

const insertionSort = (originalArray) => {
  const array = [...originalArray];
  const N = array.length;

  for (let i = 0; i < N; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }

  return array;
};
