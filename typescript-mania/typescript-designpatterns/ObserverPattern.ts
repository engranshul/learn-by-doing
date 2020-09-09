interface Subject {
    registerObserver(o:Observer) : void;
    removeObserver(o:Observer) : void;
    notifyObservers(temperature:number) : void;
  
}

class WeatherStation implements Subject {

    private temperature : number;  // whatever is accessible within class only shd remain private
    
    private arrOfObservers:Observer[] = [];

    public registerObserver(o: Observer) {
        this.arrOfObservers.push(o);        
    }
    public removeObserver(o: Observer) {
        let itemIndex:number=this.arrOfObservers.indexOf(o);
        this.arrOfObservers.splice(itemIndex,1); 
    }

    public setTemperature(temperature : number) {
        this.temperature=temperature;
        this.notifyObservers(temperature);
    }
    public notifyObservers(temperature:number) {
        for(let i=0;i<this.arrOfObservers.length;i++) {
            this.arrOfObservers[i].update(temperature);
        }     
    }
}

interface Observer {
    update(temperature : number) : void;

}

class LcdDisplay implements Observer{
    constructor(station : Subject) {
        station.registerObserver(this);
    }
    update(temperature : number) {
        console.log("lcd display has been updated")
    }
}

class RetinaDisplay implements Observer {
    constructor(station : Subject) {
        station.registerObserver(this);
    }
    update(temperature : number) {
        console.log("retina display has been updated")
    }
}

// at this time no observers will be updated as there are no observers exist in observers array
let weatherStation =new WeatherStation(); 

// now two observers have been registered with weather station
new LcdDisplay(weatherStation);
new RetinaDisplay(weatherStation);

weatherStation.setTemperature(10);

/* 
learnt how we created two separate interfaces for both subject and observers..
seems like wd type operator var let or const not required..not sure though..
*/