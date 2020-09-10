/* chaining but not regular */
var momspromise = new Promise(function (resolve, reject) {
  let momSavings = 20000;
  let priceOfPhone = 60000;

  if (momSavings > priceOfPhone) {
    resolve({ brand: "iphone", model: "6s" });
  } else reject("we dont have enough money..lets save more money");
});

momspromise
  .then((value) => {
    console.log("hurray i got this phone", JSON.stringify(value));
  })
  .catch((reason) => {
    console.log("mom could nt buy me phone", reason);
  })
  .finally(() => {
    console.log("anyway i love my mom..");
  });
