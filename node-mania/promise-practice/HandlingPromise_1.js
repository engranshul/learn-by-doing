var keepsHisWord = true;
promise1 = new Promise(function (resolve, reject) {
  if (keepsHisWord) resolve("the man likes to keep his word");
  else reject("the man doesnt want to keep his word");
});

promise1.then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() =>console.log("i always execute"))



/* output : 
the man likes to keep his word
i always execute

Learning :
then executes if promise is resolved
catch executes if promise is rejected
finally always executes
*/