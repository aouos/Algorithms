/**
 * Shell Sort
 *
 * @param {array} originalArray
 * @return {array} sorted array
 */

const shellSort = (originalArray) => {
  const array = [...originalArray];
  const N = array.length;

  let h = 1;

  while (h < N / 3) {
    h = h * 3 + 1;
  }

  while (h >= 1) {
    for (let i = h; i < N; i++) {
      let j = i;

      while (j >= h && array[j] < array[j - h]) {
        [array[j], array[j - h]] = [array[j - h], array[j]];
        j -= h;
      }
    }

    h = Math.floor(h / 3);
  }

  return array;
};
