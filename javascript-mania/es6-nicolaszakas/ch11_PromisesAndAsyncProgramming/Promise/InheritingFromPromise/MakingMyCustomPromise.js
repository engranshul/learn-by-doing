/* 
Just like other built-in types, you can use a promise as the base for a derived
class. This allows you to define your own variation of promises to extend what
built-in promises can do. For instance, suppose you want to create a promise
that can use methods named success() and failure() in addition to the usual
then() and catch() methods. You could create that promise type as follows:
*/

class MyPromise extends Promise {
  // use default constructor
  success(resolve, reject) {
    return this.then(resolve, reject);
  }
  failure(reject) {
    return this.catch(reject);
  }
}
let promise = new MyPromise(function (resolve, reject) {
  resolve(42);
});

promise
  .success(function (value) {
    console.log(value); // 42
  })
  .failure(function (value) {
    console.log(value);
  });

/* 
In this example, MyPromise is derived from Promise and has two additional
methods. The success() method mimics resolve() and failure() mimics the
reject() method.

Each added method uses this to call the method it mimics. The derived
promise functions the same as a built-in promise except now you can call
success() and failure() if you want.

Because static methods are inherited, the MyPromise.resolve() method, the
MyPromise.reject() method, the MyPromise.race() method, and the MyPromise.all()
method are also present on derived promises. The last two methods behave
the same as the built-in methods, but the first two are slightly different.

Both MyPromise.resolve() and MyPromise.reject() will return an instance
of MyPromise regardless of the value passed because those methods use the
Symbol.species property (see page 185) to determine the type of promise
to return. If a built-in promise is passed to either method, the promise will
be resolved or rejected, and the method will return a new MyPromise so you
can assign fulfillment and rejection handlers. For example:

let p1 = new Promise(function(resolve, reject) {
resolve(42);
});
let p2 = MyPromise.resolve(p1);
p2.success(function(value) {
console.log(value); // 42
});
console.log(p2 instanceof MyPromise); // true

Here, p1 is a built-in promise that is passed to the MyPromise.resolve()
method. The result, p2, is an instance of MyPromise where the resolved value
from p1 is passed into the fulfillment handler.

If an instance of MyPromise is passed to the MyPromise.resolve() or
MyPromise.reject() methods, it will just be returned directly without being
resolved. In all other ways, these two methods behave like Promise.resolve()
and Promise.reject().
*/  