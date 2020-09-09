interface Shape {
  readonly type : string;
  volume : number;
}


function multiply(input:Shape) {
    input.volume=123;  // will work fine as its NOT a read only property
    //input.type="updated value";   // will throw error
console.log("done!!!");
}

multiply({"type":"circle",volume:123});