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
        console.log(`in parent class`);
        this.speed =0;
        console.log(`${this.name} is standstill`)
    }
}

let animal = new Animal("tiger").run(72);

// new class 
class Rabbit extends Animal {

    stop() {                  // overrided stop method
        console.log(`in child class`);
        this.speed =0;
        console.log(`${this.name} is standstill`)
    }

    magic() {
        this.stop();
        super.stop(); // calling parent  class stop
    }
}

let newAnimal = new Rabbit("lion").magic(); // see how constructor also got inherited in Rabbit class