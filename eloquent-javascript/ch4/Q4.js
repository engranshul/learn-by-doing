// deep comparison..consider objects equal if there values are equal

function deepEqual(input1,input2) {
    console.log("input 1 is",input1,"and its type is",typeof(input1));
    console.log("input 2 is",input2,"and its type is",typeof(input2));

    if(input1 == null && input2==null) return true;

    if(typeof(input1) == 'object' && typeof(input2) == 'object'){
        if(input1 ==null || input2 ==null) return false;

        console.log("in both inputs are object block")
        let arr1=Object.keys(input1);
        let arr2=Object.keys(input2);
        console.log("arr1 is",arr1,"and arr2 is",arr2);
        if(JSON.stringify(arr1) !=JSON.stringify(arr2)) {
           return false;
        }

        if(arr1.length != arr2.length) return false;
        for(let start=0;start<arr1.length;start++) {
            return deepEqual(input1[arr1[start]],input2[arr2[start]]);
        }
    }
    else if(typeof input1 != Object && typeof input2 != Object) {
        console.log("in both inputs NOT object block")
        if(input1== input2) return true;
        else return false;
    }
    else  {
        console.log("reached here")
    }
}

console.log("result is",deepEqual({a:{b:2}},{a:{b:4}}));
console.log("result is",deepEqual(1,1));
console.log("result is",deepEqual({a:{b:2}},3));

/* 
Book solution learning :
u can make comparison order insensitive by using array includes

for (let key of keysA) {
    // see how below line comparing keys and than comparing values
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
*/
