function findOccurrences(text, target) {
  const indices = [];
  let index = -1;
  while ((index = text.indexOf(target, index + 1)) !== -1) {
      indices.push(index);
  }
  return indices;
}

const sentence = 'Today is a good day to go out and play cricket, and it is a good day for a picnic.';
const targetWord = 'is';
console.log(findOccurrences(sentence, targetWord));
