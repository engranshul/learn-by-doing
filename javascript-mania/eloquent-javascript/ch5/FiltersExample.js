// custom filter function example
let arr =["rose","is the","best","billionaire by 35","the world is small"];
let finalArr=[]
for(let ele of arr) {
    if(ele.includes("the")) {
        finalArr.push(ele);
    }
}
console.log("final arr is",finalArr);

// filter function

let bigCities=[]   // adding objects in array concept
for(let start=0;start <5;start++) {
    bigCities.push({"cityname":Math.random(),"population":start});
}
console.log("bigCities are",bigCities);

let filteredResultUpdated = bigCities.filter(bigCity => bigCity.population >2)
                               .sort((c1,c2)=> c1.population - c2.population)
                               .map(bigCity=> { return {[ bigCity.cityname] : bigCity.population}; });
console.log("filtered result updated output is",filteredResultUpdated);

/* 
map function can be used to print to console as well as return elements/objects
*/