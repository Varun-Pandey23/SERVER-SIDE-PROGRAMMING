class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

function main() {
  const rectangle = new Rectangle(5, 4);
  console.log('Area : ' + rectangle.area());
  console.log('Perimeter: ' + rectangle.perimeter());
}

main();