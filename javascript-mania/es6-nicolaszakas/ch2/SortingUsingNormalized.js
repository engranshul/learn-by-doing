const arr = ["ansh","ul","one","abc","xy"];
/* 
concept :earlier i gave integers in above array and tried to
normalize them and it threw normalized is not an function 
typeerror
*/

arr.sort(function(first,second) {
    /* below other normalized forms can also be applied :
    NFC,NFD,NFKC,NFKD */
    let firstNormalized = first.normalize('NFC');
    let secondNormalized = second.normalize('NFC');

    if(firstNormalized < secondNormalized) return -1;
    else if(firstNormalized > secondNormalized) return 1;
    else return 0;
})

console.log(arr);