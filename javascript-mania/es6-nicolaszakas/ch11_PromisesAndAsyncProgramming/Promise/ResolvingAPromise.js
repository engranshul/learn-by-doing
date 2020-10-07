let promise = new Promise(function(resolve,reject) {
  console.log('promise')
  resolve()
})

promise.then(function() {
  console.log('resolved')
})

console.log('hiiii')