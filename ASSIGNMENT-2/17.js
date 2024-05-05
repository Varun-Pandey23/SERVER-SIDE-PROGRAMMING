function splitString(str) {
  return str.split(/\s+/);
}

function main() {
  const str = 'This is a test string';
  console.log(splitString(str));
}
main();
