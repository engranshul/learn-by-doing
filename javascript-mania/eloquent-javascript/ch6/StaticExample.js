class Animal {
    static run() {
      console.log("animal is running")
      // relax(); wont work directly
      this.relax();
      this.nonStaticFunc();
    }
    static relax() {
      console.log("enough running..time to relax")  
    }

    nonStaticFunc() {
      console.log("animal is eating")
    }
}

let animal = new Animal();
animal.nonStaticFunc(); // will print animal is eating

/*  animal.run(); 
TypeError: animal.run is not a function
See how above line will give a type error
*/

Animal.run();  


/* 
In order to call a static method within another static method 
of the same class, you can use the this keyword.


Static methods are not directly accessible using the this keyword 
from non-static methods. You need to call them using the class
name: CLASSNAME.STATIC_METHOD_NAME() or by calling the method 
as a property of the constructor: this.constructor.STATIC_METHOD_NAME().
*/

