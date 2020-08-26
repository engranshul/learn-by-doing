class Shape {
    area() {
        return 0;
    }
    toString() {
                         // take a note of below line
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();         // super is present within constructor
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius * 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
        if (shape instanceof Shape) { 
            // concept of how toString() is only defined in base class
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            return sum + shape.area()
        }
        throw Error('Bad argument shape.');
    }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];

console.log(cumulateShapes(shapes)); 