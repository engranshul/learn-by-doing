var keepsHisWord = true;
promise1 = new Promise(function (resolve, reject) {
  if (keepsHisWord) resolve({ name: "tiger", speed: "70kmperhr" });
  else reject("the man doesnt want to keep his word");
});

promise1
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("i always execute"));


  /* 
  see how we provided a json to resolve function
  */