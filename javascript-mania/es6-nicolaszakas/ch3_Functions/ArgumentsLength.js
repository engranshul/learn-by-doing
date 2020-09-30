function getValue() {
  return 5;
}
function add(first, second = getValue) {
  console.log('arguments length is',arguments.length);

  for(let i = 0;i < arguments.length;i++) {
    console.log('argument is',arguments[i])
  }
}

add(4)
console.log('***************')
add(4, function myFunction() { return 10 })

/* 
concept of how argument length doesnt consider default value..
*/