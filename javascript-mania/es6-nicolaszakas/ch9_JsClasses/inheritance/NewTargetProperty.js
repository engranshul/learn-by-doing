class Rectangle {
  constructor(length, breadth) {
    console.log(`is new.target equal to square`, new.target == Square);
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
    console.log(`hello world`);
  }
}

class Square extends Rectangle {
  constructor(side) {
    console.log(`is new.target equal to square`, new.target == Square);
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
Square.sayHello();
sq.welcomeString();
sq.area();


/* 
Because classes can’t be called without new, the new.target property is never
undefined inside a class constructor.

Square is calling the Rectangle constructor, so new.target is equal to Square
when the Rectangle constructor is called. This is important because it gives
each constructor the ability to alter its behavior based on how it’s being
called.
*/