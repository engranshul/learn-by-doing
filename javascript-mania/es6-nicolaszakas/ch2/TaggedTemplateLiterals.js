let name="john",itemName="vaccum cleaner",companyName="leonardo";

const welcomeStr = tagged`hello ${name}
Thanks for buying item ${itemName}
Kindly give us the feedback so that we can improve our service
Thanks & Regards
${companyName}`;

function tagged(strArr,...vals) {  // vals is used as spread operator
console.log("first argument is",strArr);
console.log("second argument is",vals);
}
