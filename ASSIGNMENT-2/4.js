function merge(arr, start, middle, end) {
  const leftArray = arr.slice(start, middle + 1);
  const rightArray = arr.slice(middle + 1, end + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let currentIndex = start;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
          arr[currentIndex] = leftArray[leftIndex];
          leftIndex++;
      } else {
          arr[currentIndex] = rightArray[rightIndex];
          rightIndex++;
      }
      currentIndex++;
  }
  while (leftIndex < leftArray.length) {
      arr[currentIndex] = leftArray[leftIndex];
      leftIndex++;
      currentIndex++;
  }
  while (rightIndex < rightArray.length) {
      arr[currentIndex] = rightArray[rightIndex];
      rightIndex++;
      currentIndex++;
  }
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
      const middle = Math.floor((start + end) / 2);
      mergeSort(arr, start, middle);
      mergeSort(arr, middle + 1, end);
      merge(arr, start, middle, end);
  }
}

const sampleArray = [10, 9, 6, 8, 1, 2];
mergeSort(sampleArray);
console.log(sampleArray);
