// clean room promise
let cleanRoomPromise = function () {
  return new Promise(function (resolve, reject) {
    resolve('room cleaned..');
  });
};

// take the garbage out
let takeGarbageOut = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + 'take garbage out..');
  });
};

// get an ice cream
let getIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + 'won icecream..');
  });
};

cleanRoomPromise()
  .then((result) => {
    return takeGarbageOut(result);
  })
  .then((result) => getIcecream(result))
  .then((result) => {
    console.log('finished..' + result);
  });

  /* 
  See how in this example we did things serially room cleaned..took 
  garbage out..won icecream..
  
  Also see how we wrapped Promise inside function 
  */