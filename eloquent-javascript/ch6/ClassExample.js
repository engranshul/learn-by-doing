class Rabbit {
    constructor(type){
      this.type = type;
    }
    speak(line) {
        console.log(`rabbit of type ${this.type} speaks ${line}`)
    }
}

let whiteRabbit=new Rabbit("whiteRabbit");
let greyRabbit=new Rabbit("greyRabbit");

whiteRabbit.speak("peace");
greyRabbit.speak("fury")

