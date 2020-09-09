function add(obj : {name? : string , street : number}) {
  console.log("addition successful");
}

add({name : "kong",street :321});
add({street :321});  // in above we made name param optional using ?
