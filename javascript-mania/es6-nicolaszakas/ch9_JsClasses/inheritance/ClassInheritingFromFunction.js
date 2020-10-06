function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;
}

Rectangle.prototype.calculateArea = function () {
  console.log('area is', this.length * this.breadth);
};

function getBase() {
  return Rectangle;
}
class Square extends getBase() { // dynamically determining what to inherit from.
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  findArea() {
    super.calculateArea();
  }
}

let sq = new Square(9);
sq.findArea();


/* 
Rectangle is defined as an ECMAScript 5–style constructor, and Square is
a class. Because Rectangle has [[Construct]] and a prototype, the Square class
can still inherit directly from it.
*/