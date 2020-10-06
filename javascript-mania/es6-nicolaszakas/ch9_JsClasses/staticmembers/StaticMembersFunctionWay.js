function PersonType(name) {
this.name = name;
}

// static method
PersonType.create = function(name) {
return new PersonType(name);
};

// instance method
PersonType.prototype.sayName = function() {
console.log(this.name);
};

var person = PersonType.create("Nicholas");