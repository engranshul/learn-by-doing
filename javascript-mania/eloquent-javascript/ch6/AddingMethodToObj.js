let dummy = {}

dummy.add =function(input1,input2) {
    return input1 + input2;
}

console.log("output is",dummy.add(1,2));

/* 
Directly calling add method will throw below error
ReferenceError: add is not defined
add(1,2); 
*/

// another way
function speak(input) {
    console.log(`my voice is ${input}`)
    // see how this binding even though we are  not sending 
    // anything like that in param
    console.log(this.type) 
}

let whiteRabbit = {"type":"white",speak};
let blackRabbit = {"type":"black",speak};

whiteRabbit.speak("peace");


console.log("try same thing with arrow")
const speakLanguage= (input) => {
    console.log(`my voice is ${input}`)
    // below line wont work as arrow function dont bind their own
    // this but can see the this binding around them
    console.log(this.type) 
}

let whiteRabbit1 = {"type":"white",speakLanguage};
let blackRabbit1 = {"type":"black",speakLanguage};

whiteRabbit1.speakLanguage("peace");
