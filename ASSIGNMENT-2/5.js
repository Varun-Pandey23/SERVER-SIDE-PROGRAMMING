function swapElements(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, i, n) {
  if (i >= n) return;
  const left = 2 * i + 1;
  const right = 2 * (i + 1);
  let largest = i;
  if (left < n && arr[largest] < arr[left]) largest = left;
  if (right < n && arr[largest] < arr[right]) largest = right;
  if (largest !== i) {
      swapElements(arr, i, largest);
      heapify(arr, largest, n);
  }
}

function buildMaxHeap(arr, n) {
  let i = Math.floor(n / 2) - 1;
  while (i >= 0) {
      heapify(arr, i, n);
      i--;
  }
}

function heapSort(arr) {
  const n = arr.length;
  buildMaxHeap(arr, n);
  let heapSize = n;
  while (heapSize !== 1) {
      heapSize--;
      swapElements(arr, 0, heapSize);
      heapify(arr, 0, heapSize);
  }
}

function main() {
  const array = [5, 4, 3, 2, 1, 8, 6, 2, 1, 5, 15];
  heapSort(array);
  console.log(array);
}

main();
