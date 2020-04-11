/* question 1 --> Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function. Function customMap() should return a new array and not change the array on which we are mapping*/

// to create a function customMap() that is accessible by every array we need to define it in array prototype

// declaring our function customMap() in array.prototype

Array.prototype.customMap = function (callbackFunction) {

    // resulting array
    const result = [];
    // iteration over each element of array and calling callbackFunction
    for (let i = 0; i < this.length; i++) {
        //pushing result to result array
        // this here refers to the array on which callback function is called.
        // callback function takes 3 value currentvalue , current index and array itself

        result.push(callbackFunction(this[i], i, this));
    }

    // return the result
    return result;

}

// testing the above code

const arr = [1, 2, 3];
const squaredNums = arr.customMap((item, index) => {
    return item * item;
});

console.log(squaredNums);