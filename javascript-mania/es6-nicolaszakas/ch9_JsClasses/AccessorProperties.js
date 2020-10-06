class Country {
  constructor(conti) {
    this.continent = conti;
  }
  get continentName() {
    return this.continent;
  }
  set continentName(value) {
    this.continent = value;
  }
}

let county = new Country('asia')
console.log('continent is', county)
county.continentName = 'africa'
console.log('continent is', county)

