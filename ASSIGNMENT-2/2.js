function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const searchValue = 5;
console.log(findIndex(numbers, searchValue));