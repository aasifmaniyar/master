// sort an array

const array = [10, 2, 1, 5, 4, 7 ];

const newSet = new Set([1,2,3,4]);
console.log("set with spread operator:", ...newSet);
console.log("array with spread operator:", ...array);
const newArray=[...array, ...newSet];   //add array with set.
console.log("array+set combined:", newArray);
console.log("set.values():", newSet.values());
console.log("set.entries()", newSet.entries());
console.log("type of set:", typeof(newSet));
// sort string array based on 3rd alphabet of each string


// binary to decimal    
//  num = num * 2 + a[i]
function binaryToDecimal(n){
    let num = n;
    let decimal = 0;
    // Initializing base value to 1, i.e 2^0
    let base = 1;
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        decimal += last_digit * base;
        base = base * 2;
    }
    return decimal;
}

console.log("binary to decimal :", binaryToDecimal(111));
// decimal to bianry
const decimalToBinary = (decimal) => {
    let binary = '';
    let array = [];
    while(decimal > 0)
    {
        remainder = decimal%2;
        array.unshift(remainder);     // we are using unshift because we need to add new bit at start as binaries bits calculated from right as 1 2 4 8 16....
        decimal = Math.floor(decimal/2);
    }
    return array;
}

console.log("decimal to binary :", decimalToBinary(16));
// find first duplicate in array

// array of index  a = 5 o/p : [0, 1,2,3,4]

// max in array

// get count of each word in array ['a', 'b', 'a', 'c', 'c', 'c']  op: a:2, b: 1, c: 3

// write programme to check array has numbers and array2 has square of all members of array regardless of sequence a1= [2, 3, 4]  => [9, 4, 16] return true if yes else false.

// count unique values in array

// take sorted array of intergers find 1st pair where sume is 0. if pair not exist then return undefined.

