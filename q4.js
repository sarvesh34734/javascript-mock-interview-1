/* question 4 --> Implement a function sum() in the following way such that it gives the sum of two numbers
*/

// in order to do so a function should return another funtion which eventually returns sum
function sum(a) {
    return function (b) { return a + b; }
}


console.log(sum(1)(2)); // should output 3
console.log(sum(10)(2)); // should output 12
console.log(sum(12)(23)); // should return 35

