abstract class Car {
    public abstract description : string;
    public abstract cost() : number;
}

class SilverModel extends Car {
    public description: string ="silver model";

    public cost(): number {
        return 700000;
    }
}

class GoldModel extends Car {
    public description: string ="gold model";

    public cost(): number {
        return 800000;
    }
}

 abstract class CarOptions extends Car {
    public abstract carToDecorate : Car;
    public abstract description : string;
    public abstract cost() : number;
    
}

class AntiRustCoating extends CarOptions {
    public description: string = "added antirust coating";
    carToDecorate : Car;
     constructor(car : Car) {  
        super();
        this.carToDecorate = car;
    }
    public cost(): number {
        return this.carToDecorate.cost() +5000;
    }
    
}

class CngSupport extends CarOptions {
    public description: string = "added cng support";
    carToDecorate : Car;
     constructor(car : Car) {
        super();
        this.carToDecorate = car;
    }
    public cost(): number {
        return this.carToDecorate.cost() +25000;;
    }   
}

let myTesla:Car = new SilverModel();
let myTeslaCost=myTesla.cost();
console.log("mytesla cost is",myTeslaCost);

let carWdAntiRust:AntiRustCoating = new AntiRustCoating(myTesla);
let carCostWdAntiRust = carWdAntiRust.cost();
console.log("carCostWdAntiRust is",carCostWdAntiRust);

let carWdCngSupport : CngSupport = new CngSupport(carWdAntiRust);
let carCostWdCngSupport = carWdCngSupport.cost();
console.log("carCostWdCngSupport is",carCostWdCngSupport);

/* 
learnt how constructor is created wd constructor keyword and doesnt require class name
constructor requires call to super()
extending in typescript
abstract works same way as in java
*/
