class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  welcomeString() {
    console.log(`welcome to our website of rectangle..`);
  }
  area() {
    console.log('area is', this.length * this.breadth);
  }
  static sayHello() {
    console.log(`hello world`)
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    /* 
    Without super keyword we will get error : 
    ReferenceError: Must call super constructor in derived class 
    before accessing 'this' or returning from derived constructor 
    */
    this.side = side;
  }

  welcomeString() {
    console.log(`welcome to our website of square..`);
  }
  area() {
    super.area();
  }
}

let sq = new Square(10);
Square.sayHello()
sq.welcomeString();
sq.area();
