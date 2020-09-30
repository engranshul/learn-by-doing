function getValue() {
  return 5;
}
function add(first ,second = getValue) {
  console.log(first+second());
}

add(4)
add(4,function myFunction()  { return 10})

