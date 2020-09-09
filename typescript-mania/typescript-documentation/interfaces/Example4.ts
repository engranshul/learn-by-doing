// example of read only array
interface Demo {
    readonly type : string;
    dimensions? : ReadonlyArray<number>;
  }
  
  
function multiply(input:Demo) {
      console.log("done!!!");
}
  
multiply({"type":"circle"});
multiply({"type":"circle","dimensions":[1,2,3]});
//  If an object literal has any properties that the “target type” doesn’t have, you’ll get an error
// multiply({"type":"circle","dimensions":[1,2,3],"color":"white"});

// excess property can be made to work by using type assertion
multiply({"type":"circle","dimensions":[1,2,3],"color":"white"} as Demo);


// way to define any number of additional properties in SquareConfig
/* interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
} */