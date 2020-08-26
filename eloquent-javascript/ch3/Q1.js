const findMin = (input1, input2) => {

 /*    see how from the same method u can return integer as 
    well as string */
    if (typeof (input1) == "number" && typeof (input2) == "number") {

        if (input1 > input2)
            return input2;
        else
            return input1;
    }
    else
        return"incorrect data"; // here we can do this "return;" 
}

console.log("output is",findMin("dummy",6))
console.log("output is",findMin(4,6))