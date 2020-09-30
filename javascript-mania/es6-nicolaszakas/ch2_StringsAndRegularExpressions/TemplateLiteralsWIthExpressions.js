// case 1 : using split and join in template strings

let animals =`cats
dogs
elephant`;

console.log(`animals are ${animals.split("\n").join(",")}`)

// case 2 : ternary operator and booleans in template strings

let flag = false;
let books =`
${flag? "normanLewis" : "rdsharma"},
eloquent,
oxford
`
console.log(books);

// case 3: creating html using template strings

let bears = ["polar","brown","grizzly"];
let htm = `<ul> 
${bears.map(bear =>
    {
    return `<li>${bear}</li>`
    }).join("")}
</ul>`
console.log("html is ",htm)
