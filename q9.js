/*question 9 --> Why do we need let and const in JS. Compare it with the problems in ES5 */

// problems that existed with var keyword:
// it has functional scope:
// it is available throughout the scope of the function
// if it is declared outside a function then it has a global scope

// problems associated with hoisting
// variables declared with var keyword gets hoisted to the top of the execution block.
// this makes the variable available even before it is declared thus producing no errors and  thus returning undefined

// example which demonstrates the unexpected results using var keyword
var a = [];
for (var i = 0; i < 5; i++) {
    a.push(i);
}
console.log(i);  // we should not be able to access i over here but when we declare it using var keyword it gets hoisted and has a global scope

// problems of having global scope
// it can overwrite the default global variables. for example we have a global variable in js which is regExp which we can overwrite using var as it has global scope
var RegExp = "Hello!"; // this expression changes value of already existing parameter RegExp

// so block scope/lexical scope was much needed in js. So finally ES6 lets us declare variables with const and let keywords which have lexical bindins as in other programming languages

// Benefits of let/const
// block level bindings
// the scope of variables declared with let/const remain within the scope of the block i.e within {}
// temporal Dead Zones (TDZ)
// let/const variables reamin in TDZ until they are declared and if anyone tries to access them within the scope of the keyword but before they are declared they produce error.

let b = [];
for (let j = 0; j < 5; j++) {
    b.push(j);
}
// console.log(j); // will produce error as scope of j is within for loop

// example demonstrating TDZ
console.log(typeof (x));   // returns undefined as it doesn't know about the existance of a
function demo() {
    // typeof (x);  // will produce error because we trying to acccess x before its declaration in the scope of x
    let x = 5; // x remian in TDZ until this point
}
demo();

// we can no longet change the global variable RegExp
let RegExp = "hi"; // a new let declaration for RegExp creates a binding that shadows the global RegExp so it remains unchanged