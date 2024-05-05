function toCharArray(word) {
  const charArray = [];
  for (let i = 0; i < word.length; i++) {
      charArray.push(word[i]);
  }
  return charArray;
}

function swapElements(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  let i = 0;
  while (i < array.length) {
      let flag = false;
      let j = 0;
      while (j < array.length - 1) {
          if (array[j] > array[j + 1]) {
              flag = true;
              swapElements(array, j, j + 1);
          }
          j++;
      }
      if (!flag) break;
      i++;
  }
}

function main() {
  const str = 'asdanfjksdbzxcabnksjba';
  const charArray = toCharArray(str);
  bubbleSort(charArray);
  console.log(charArray.join(''));
}

main();
