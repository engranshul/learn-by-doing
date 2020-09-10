let promise1 = Promise.resolve("hello i got resolved");

let promise2 = Promise.resolve("hello i got resolved");

let promise3 = new Promise(function (resolve, reject) {
  let flag = true;
  if (flag) resolve("life is good..");
  else reject("life is boring..");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log("values are", values))
  .catch((err) => console.log(err));
