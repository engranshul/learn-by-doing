
const notPredefinedFunc=(timesToRepeat,methodDefinition) => {
    for(let start=0;start < timesToRepeat;start++) {
        methodDefinition(start);     
    }
}

// creating function while calling  
notPredefinedFunc(5,start => console.log("value is",start));



