/* catch..then and again catch */
let promise = new Promise(function (resolve, reject) {
  reject(new Error('fucked up..'));
});

// storing
let promise1 = promise.catch((result) =>
  console.log('**error caught**', result)
);
promise1
  .then(() => {
    throw new Error('again no luck..');
  })
  .catch((value) => console.log('burrrr..', value));


/* 
Always have a rejection handler at the end of a promise chain to ensure 
that you can properly handle any errors that may occur.
*/