
/* question 5 -->How to call the function display() in the following code such that it logs the given object on the screen
*/

const obj = { a: 100 };

function display() {
    console.log(this);
}

// in this case this reference that is used in display() should be of object.
// so we need to bind the reference of the object to display function using bind()
// now this will point to obj
display.bind(obj)();
