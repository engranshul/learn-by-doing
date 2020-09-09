// nested callback example...see how it is making a pyramid side ways
// also check order in which console log is printed..callback is also
// a way to handle temporal dependency..means one will be executed before
// two..

setTimeout(() => {
     console.log("one");
    setTimeout(() => {
        console.log("two");
        setTimeout(() => { 
            console.log("three")
         },2000)
    },2000)
}, 1000);
