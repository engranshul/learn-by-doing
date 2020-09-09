// Bean counting

const countChar = (inputStr, eleToSearch) => {
    let count = 0;
    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] == eleToSearch) {
            count += 1;
        }
    }
    return count;
}

let inputStr = "india is great";
console.log("result is",countChar(inputStr, "a"));