let user = {
  id: 9451,
  name: 'jack',
};

user.id = 123;

console.log(user);

/* 
problem is that we have overridden id property..how to guarantee that properties
are not conflicting..
*/