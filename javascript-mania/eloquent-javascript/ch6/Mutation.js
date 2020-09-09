function primitiveMutator(val) {
    val = val + 1;
  }
  let x = 1;
  primitiveMutator(x);
  /* will print 1.concept of changes not reflecting in calling
  function for primitive value */
  console.log(x);  
  
  
  function objectMutator(val) {
    val.prop = val.prop + 1;
  }
  let obj = { prop: 1 };
  objectMutator(obj);
  /* concept of changes reflecting in calling function for 
  objects */
  console.log(obj.prop); 