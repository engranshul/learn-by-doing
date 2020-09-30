function getValue(input) {  
    if(input > 5) {
        let value = "blue";
        return value;
    }
    else {
        console.log("value in else block is ",value)
    }
    console.log("value here is ",value)
    }
    
    getValue(4);
    
    /* 
    Hoisting wont happen..both lines(7 & 9) will throw below error :
    ReferenceError: value is not defined
    
    "If condition" evaluates to false,then value is never declared or 
    initialized

    Const like let declarations,are block level declarations
    */  