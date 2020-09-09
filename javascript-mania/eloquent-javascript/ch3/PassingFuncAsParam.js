function foo(param) {
param("a function")
}

function test(input) {
    console.log("input is",input)
}

// a function can be passed as a parameter but wdout parenthesis
foo(test);