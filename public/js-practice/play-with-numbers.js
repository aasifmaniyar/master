// implicit conversion
console.log("number+string:", 10 +'10');
console.log('string+number:','10'+10);
console.log('string+boolean:', '10'+true, '10'+false);
console.log('number+boolean:', 10+true, 10+false, true-10);
console.log('null+undefined:', null+undefined);
console.log('other operators', 10&20, 10&10, 10^20, 10|20, 10>>20, 10<<20 );
// prime number
console.log("Math.floor(5/2):  ", Math.floor(5/2));
console.log("Math.floor(6/2):  ",Math.floor(6/2));

// faboncci series

// select random person to pay the bill

// calculate area of circle, ciscumference of circle and diameter of circle using high order functions

console.log("print fizz if divisible by 3 and buzz if devided by 5 and fizzBuzz if divided by both");
    function divisible(number) {
        let output = "";
        if(number%3 == 0) { output = output+"fizz";}
        if(number%5 == 0) { output = output+"Buzz";}
        return output;
    }

    console.log(divisible(5));
    
console.log("take array of input from array and give sum of elements between them");
    console.log("Solution 1: O(1)");
    function addArray1(n) {
        return n * (n+1) / 2;
    }
    console.log(addArray1(5));
    
    console.log("Solution 1: O(n)");
    function addArray2(n) {
        let sum = 0;
        for(let i=0; i<=n;i++)
        {
            sum = sum+i;
        }
        return sum;
    }
    console.log(addArray2(5));

console.log("Denomination needed for ammount");
    function getDenominationCount(amount) {
        const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        const count = {};

        for (let denomination of denominations) {
            if (amount >= denomination) {
                const numNotes = Math.floor(amount / denomination);
                count[denomination] = numNotes;
                amount -= numNotes * denomination;
            }
        }

        return count;
    }
    console.log(getDenominationCount(2700));

//palindrom


// faboncii

//pyramid 
// 1
// 1 2
// 1 2 3

// reverse pyramid

