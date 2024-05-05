function checkIfRegExp(value) {
  return value instanceof RegExp;
}

// Example usage:
const regex = /\d+/;
console.log(checkIfRegExp(regex)); // Output: true

const notRegex = 'This is not a regex';
console.log(checkIfRegExp(notRegex)); // Output: false

