class Stack {
  constructor() {
      this.array = [];
      this.size = 0;
  }
  push(val) {
      this.array.push(val);
      this.size++;
  }
  pop() {
      if (this.size === 0) return -1;
      const temp = this.array.pop();
      this.size--;
      return temp;
  }
  isEmpty() {
      return this.size === 0;
  }
}
function main() {
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(1);
  console.log(stack.isEmpty());
}
main();
