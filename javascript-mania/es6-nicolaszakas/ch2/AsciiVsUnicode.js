/* 
we already know how to convert decimal no to binary
But HOW TO DO SAME THING FOR LETTERS..HOW TO TURN LETTERS TO BINARY NOS ??

Answer : we know that numbers can become numbers(decimal to binary)..
Every single key on ur keyboard has a number associated with it
Example : A 65, a 97 (see same from ascii table)

Ascii uses 7 bits...corresponds to 128 characters..respresents all
uppercase & lowercase letters..0 to 9 digits...and wide range of 
symbols...delete on keyboard is represent by 127..all commands on 
keyboard are represented similarly..

Extended Ascii uses 8 bits..corresponds to 256 characters

Problem : above ascii characterset cant represent all characters of languages
like Greek,arabic etc..also how to represent emojis


Solution : Unicode is same as ascii for (0-127) but unicode can use
more bits..so can represent wide range of symbols,characters and 
emojis..

Unicode can use 8,16 or 32 bits..so support for around 2Billion(so
thats a lot of emojis symbols & characters)..

In UTF-8, a character may occupy a minimum of 8 bits. 
UTF-8 uses the ASCII set for the first 128 characters.

In UTF-16, a character length starts with 16 bits. 

UTF-32 is a fixed length encoding of 32 bits. 
*/

// Number to binary conversion 
let input = 9;
console.log(input.toString(2)); // will print 1001


/* 
Tutorial :
https://www.youtube.com/watch?v=5aJKKgSEUnY
*/




