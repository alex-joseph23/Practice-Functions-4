function reverseString(string) {
    if (string.length <= 1) {
        return string;
    }
    
let lastLetter = string[string.length-1];
let stringMinusLastLetter = string.slice(0, string.length-1);
return lastLetter + reverseString(stringMinusLastLetter);
}
console.log( reverseString("hello"));
console.log( reverseString("recursion"));
console.log( reverseString("a"));
console.log( reverseString(""));