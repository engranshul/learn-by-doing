add(3,4) // this will work fine..function declaration this way are not a part of regular top to bottom flow of control 
mul(3,4) // will give error ReferenceError: Cannot access 'mul' before initialization


function add(input1,input2) {
 console.log("res is",input1+input2)
}

const mul = (input1,input2) => console.log("res is",input1*input2)
