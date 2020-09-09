interface Shape {
    name? : string;
    volume : number;
}

// using interface as param concept

function addition(obj : Shape) {
    console.log("addition successful");
}
  
addition({name : "kong",volume :321});
addition({volume :321});  // in above we made name param optional using ?