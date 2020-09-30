function addAll(input, ...keys) {
  console.log('input is', input);
  console.log('keys are', keys);
  console.log('argument length is', arguments.length);

  for (let i = 0; i < arguments.length; i++) {
    console.log('argument is', arguments[i]);
  }
}

addAll(5, 1, 2, 3, 4);


/* 
concept that arguments object do consider rest parameters while calculating
length or while iterating over arguments
*/