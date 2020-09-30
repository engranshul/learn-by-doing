var obj = {
  a:1,
  0:1,
  c:1,
  2:1,
  b:1,
  1:1
}

console.log(Object.getOwnPropertyNames(obj).join(""));

/* 
ECMAScript 5 didn’t define the enumeration order of object properties; the
JavaScript engine vendors did. However, ECMAScript 6 strictly defines the
order in which own properties must be returned when they’re enumerated
*/