let string = "AasiF123"
console.log(string.toLowerCase());

// Anagram : cinema = iceman   all the chars in 1st array is present in 2nd array.   

// convert first character of each word to upper case

// convert last character in upper case

// reverse each word in string

// reverse the statement

//  palindrom

// common strings from array of string   ["aasif", "aaseef", "aashif"]   op : "aas"
console.log("First duplicate in an array");
const firstDuplicate = () => {
    const array = ["aasif", "aasheef", "aasiif", "aasfak"];
    const first = array[0];
    var common = "";
    for(let i = 0; i<array.length; i++)
    {
        if (first.charAt(i) == (array[i]).charAt(i))
        {
            common = common+array[i].charAt(i);
        }
    }
    return common;
}
console.log(firstDuplicate());

console.log("Merge two string ulternatively")

function mergeAlternatively(str1, str2){


    }

console.log(mergeAlternatively("abc", "xyz"));
// reverse string using recursion


// longest subsctring without duplicate char    hellothere  : lother

// length of last string in word

// length of each string in array.

// remove adjscent duplicates from string    "aabccdeeefffff"  op: "abcdef"