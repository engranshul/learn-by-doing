/* 
case 1: Below will print true for based,abased,base etc in input str
doesnt check for exact match...case sensitive
*/
const str="all your base are belong to us";
const regex= /base/;   // quotes are not required 
const isExisting = regex.test(str);

console.log("does regex exist ",isExisting)

/* 
case 2: checks for exact match...it test for exact match..it will only pass for str1="base"
*/
//const str1="all your base are belong to us"; // wont pass for it
const str1 ="base";
const regex1= /^base$/; 
const isExisting1 = regex1.test(str1);

console.log("does regex exist ",isExisting1)

/* 
case 3 : just use carot sign..carot check starting character..
similarly dollar checks end character
*/
const str2 ="baseddd";
const regex2 =/^base/;
const isExisting2 = regex2.test(str2);
console.log("does regex exist ",isExisting2)

/* 
case 4 : OR operator in regex
*/
const str3 ="this is a cat";
const regex3 =/cat|dog/;
console.log("does regex exist ",regex3.test(str3));

/* 
case 5 : case matching..i flag ignores case
*/
const str4 ="this is a DOG";
const regex4 =/cat|dog/i;
console.log("does regex exist ",regex4.test(str4));

/* 
case 6 : extract words that match regex
*/
const str5 ="this is a DOG";
const regex5 =/DOG/;
console.log("result is ",str5.match(regex5));

/* 
case 7 : find every single occurence instead of 
just one occurence..using g flag
*/

const str6 ="this is dOG a DOG";
const regex6 =/DOG/gi;  // two flags together concept
console.log("result is ",str6.match(regex6));

/* 
case 8 : dot operator..dot operator can be used both at start and end
*/

const str7 ="this is dOGi a DOGiee";
const regex7 =/DOG./ig;  // two flags together concept
console.log("result is ",str7.match(regex7));

/* 
case 9 : match specific letters in []
*/

const str8 ="this is daG a DOG";
const regex8 =/D[olm]G/ig;  // two flags together concept
console.log("result is ",str8.match(regex8));

/* 
case 10 : match range in []..similarly range of numbers can be matched
*/

const str9 ="this is daG a DOG";
const regex9 =/D[a-z]G/ig;  // two flags together concept
console.log("result is ",str9.match(regex9));

/* 
case 11 : combination of range of numbers and letters []
*/

const str10 ="this is d1G a DOG";
const regex10 =/D[a-z1-9]G/ig;  // two flags together concept
console.log("result is ",str10.match(regex10));

/* 
case 12 : not match using ^
*/
const str11 ="this is daG a DOG";
const regex11 =/[^0-9]/ig;  // two flags together concept
console.log("result is ",str11.match(regex11));

/* 
case 13 : match that occurs one or more time
*/
const str12 ="Mississippsi";
const regex12 =/s+/ig;  // two flags together concept
console.log("result is ",str12.match(regex12));


/* 
Tutorial : https://www.youtube.com/watch?v=ZfQFUJhPqMM&t=908s
*/

