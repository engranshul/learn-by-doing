function setCookie(name, value, { secure, path, domain, expires }) {
  console.log(name);     // type
  console.log(value);    // js
  console.log(secure);   // true
  console.log(path);     // undefined
  console.log(domain);   // undefined
  console.log(expires);  // 60000
}
setCookie('type', 'js', {
  secure: true,
  expires: 60000,
});


/* 
This function behaves similarly to the previous example, but the third
argument now uses destructuring to pull out the necessary data. The parameters
outside the destructured parameter are clearly expected, and it’s also
clear to someone using setCookie() what options are available in terms of
extra arguments. And of course, if the third argument is required, the values
it should contain are crystal clear. The destructured parameters also act like
regular parameters in that they are set to undefined if they’re not passed.


One quirk of using destructured parameters is that, by default, an error is
thrown when they’re not provided in a function call.

// error!
setCookie("type", "js");


The missing third argument evaluates to undefined as expected, causing
an error because destructured parameters are just a shorthand for destructured
declaration. When the setCookie() function is called, the JavaScript
engine actually does this:

function setCookie(name, value, options) {
let { secure, path, domain, expires } = options;
// code to set the cookie
}


If you want the destructured parameter to be required, this behavior
isn’t all that troubling. But if you want the destructured parameter to be
optional, you can work around this behavior by providing a default value
for the destructured parameter, like this:

function setCookie(name, value, { secure, path, domain, expires } = {}) {

}

*/