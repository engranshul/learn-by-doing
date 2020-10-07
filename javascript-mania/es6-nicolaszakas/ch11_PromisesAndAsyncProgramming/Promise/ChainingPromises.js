let promise = new Promise(function (resolve, reject) {
  resolve(4234424);
});

promise
  .then((value) => console.log(value))
  .then(() => console.log('finished..'));
