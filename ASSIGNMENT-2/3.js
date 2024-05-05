function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function partition(arr, start, end) {
  const pivotIndex = start;
  let left = start;
  let right = end;
  while (left < right) {
      while (left < end && arr[left] <= arr[pivotIndex]) {
          left++;
      }
      while (right > start && arr[right] > arr[pivotIndex]) {
          right--;
      }
      if (left < right) {
          swap(arr, left, right);
      }
  }
  swap(arr, pivotIndex, right);
  return right;
}

function quickSort(arr, start, end) {
  if (start < end) {
      const pivotIndex = partition(arr, start, end);
      quickSort(arr, start, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, end);
  }
}

const numbers = [10,9,7,6,5,2,1];
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);