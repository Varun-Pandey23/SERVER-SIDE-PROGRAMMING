function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    i++;
  }
}

const arr = [10, 8, 6, 4, 2];
insertionSort(arr);
console.log(arr);