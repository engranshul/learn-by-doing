function setCookie(name, value, options) {
  options = options || {};
  let secure = options.secure,
    path = options.path,
    domain = options.domain,
    expires = options.expires;
  console.log(
    `name is ${name} and value is ${value} and timeout is ${options.timeout}`
  );
}

// third argument maps to options
setCookie('type', 'js', {
  secure: true,
  expires: 60000,
  timeout: 1000,
});


/* 
Many JavaScript libraries contain setCookie() functions that look similar
to this one. In this function, the name and value arguments are required,
but secure, path, domain, and expires are not. And because there is no priority
order for the other data, it’s efficient to just have an options object with
named properties rather than list extra named parameters. This approach
works, but now you can’t tell what input the function expects just by looking
at the function definition: you need to read the function body.
*/