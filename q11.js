/* question 11 -->  Implement stack class in JS.*/
class Stack {
    constructor() {
        // the _arr and _size are declared in this manner to keep it private variable
        // the scope of these variables remain within constructor
        // we cannot access the arr and size property outside
        //therefore all functions are implemented in cunstructor
        let _arr = [];
        let _size = 0;
        // push an element at the end of the array
        this.push = function (data) {
            _arr.push(data);
            _size++;
        }
        // pops an element out of the array from the end
        this.pop = function () {
            if (_size != 0) {
                _size--;
                return _arr.pop();
            } else {
                throw "Stack Empty Exception";
            }
        }
        // peek the top element of the array
        this.peek = function () {
            if (_size != 0) {
                return _arr[_arr.length - 1];
            } else {
                throw "Stack Empty Exception";
            }
        }
        // check if the stack is empty or not
        this.isEmpty = function () {
            return _size == 0;
        }

        // check the size of stack
        this.size = function () {
            return _size;
        }
    }
}

//  test 
let st = new Stack();
let i = 10;
while (i < 50) {
    st.push(i);
    i += 10;
}
while (!st.isEmpty()) {
    console.log(st.pop());
}
st.push(1);
console.log(st.size())

