function checkSorted(arr) {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) return false;
    i++;
  }
  return true;
}