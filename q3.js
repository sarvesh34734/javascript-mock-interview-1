/* question 3 --> Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” is present on a string (optimize it as much as possible)
*/

// add function strContains in string prototype which will return true or false
String.prototype.strContains = function (c) {
    // there is already a method in string prototype includes that returns true/false depending on whether the input is present in string ot not
    return this.includes(c);
}


//test case
console.log("I am a string".strContains('@')); // should return false
console.log("I am a string".strContains('a')); // should return true
