/**
 * Selection sort
 *
 * @param {array} originalArray
 * @return {array} Sorted array
 */

const selectionSort = (originalArray) => {
  const array = [...originalArray];
  const N = array.length;

  for (let i = 0; i < N; i++) {
    let min = i;

    for (let j = i + 1; j < N; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
};
