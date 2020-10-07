// resolving promise
let promise1 = Promise.resolve('i finally passed exams with good marks');
promise1.then((contents) => console.log('result is', contents));

// rejecting promise
let promise2 = Promise.reject('i failed by 2 marks');
promise2.catch((err) => console.log('err is', err));
