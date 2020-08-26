//console log n times

const predefinedFunc=(timesToRepeat,wholeMethod) => {
    for(let start=0;start < timesToRepeat;start++) {
        wholeMethod();  // see how we are using method name defined in param
    }
}

function add() {
    let a=3,b=4;
    console.log("result is",a+b)
}

predefinedFunc(4,add)