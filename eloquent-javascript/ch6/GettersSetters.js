class Temperature {

    // Temperature class interally stores only celsious 
    constructor(celsius) {
        this.celsius=celsius;
    }

    get fahrenheit() {
        return this.celsius *1.8 + 32;
    }

    set fahrenheit(value) {
        return this.celsius= ((value -32) / 1.8);
    }

    static fromFahrenheit(value) {
        return new Temperature((value-32) / 1.8);
    }
}

let temp = new Temperature(22);
// no brackets required while getter call..and no get is prefixed in call
console.log(temp.fahrenheit); 

// below using setter 
temp.fahrenheit = 86;
console.log(temp.celsius);
