class Animal {

    constructor(name) {
        this.speed =0;
        this.name =name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} has started running with speed ${this.speed}`)
    }
    stop() {
        this.speed =0;
        console.log(`${this.name} is standstill`)
    }
}

let animal = new Animal("tiger").run(72);

// new class 
class Rabbit extends Animal {

}

let newAnimal = new Rabbit("lion").run(72); // see how constructor also got inherited in Rabbit class


// overriding constructor
class Squirrel extends Animal {
   
    constructor(name,tailLength)  {
        super(name);
        // this.name =name;       // without super this error :ReferenceError: Must call super constructor in derived class before accessing
        this.tailLength=tailLength;
    }
    run(name,tailLength) {
        console.log(`${this.name} of tail length ${this.tailLength} has started running`)
    }
}

let squirrel = new Squirrel("africanSquirrel",11);
squirrel.run();


// check prototype of child classes
console.log("prototype of child class is",Object.getPrototypeOf(new Rabbit("asian rabbit")));

