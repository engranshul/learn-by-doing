/* The super keyword is used to access and call functions on an 
object's parent */

class fish {
  constructor(habitat, length) {
    this.habitat = habitat;
    this.length = length;
  }
}

class trout extends fish {
  constructor(habitat, length, variety) {
    super(habitat, length);
    this.variety = variety;
  }
}


let animal =new trout('land',20,'african');
console.log(animal);