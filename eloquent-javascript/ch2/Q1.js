// make 7 console log calls to print a pattern

// my solution
let output ="";
for(i=0;i<7;i++) {
    output = output.concat("#"); // learnt how to use concat in js
    console.log(output);
}


/* book solution learning : how for 
loop can start wd non numeric val.Also plus operator 
can be used instead of concat */

/* for (let line = "#"; line.length < 8; line += "#")
  console.log(line); */