/* question 12 -->  Implement queue class in JS.*/

class Queue {
    // constructor
    constructor() {
        // the _arr and _size are declared in this manner to keep it private variable
        // the scope of these variables remain within constructor
        // we cannot access the arr and size property outside
        //therefore all functions are implemented in cunstructor
        let _arr = [];
        let _size = 0;
        // add element to queue
        this.add = function (data) {
            // unshift enetrs the data at the beginning of the array
            // so the last element coming in will be at 0th index
            _arr.unshift(data);
            _size++;
        }

        // pop element from the queue FIFO
        this.poll = function () {
            if (!_size == 0) {
                _size--;
                return _arr.pop();
            } else {
                throw "Queue Empty Exception";
            }
        }

        // peek the top of queue
        this.peek = function () {
            // check if size is 0 or not
            if (!_size == 0) {
                return _arr[_arr.length - 1];
            } else {
                throw "Queue Empty Exception";
            }
        }

        // check size of queue
        this.size = function () {
            return _size;
        }

        // check whether queue is empty or not
        this.isEmpty = function () {
            return _size == 0;
        }

    }
}

// test code to check queu implementation
let q = new Queue();
let i = 10;
while (i < 100) {
    q.add(i);
    console.log(`Size of q is ${q.size()}`);
    i += 10;
}
while (!q.isEmpty()) {
    console.log(q.poll());
    console.log(`Size of q is ${q.size()}`);
}

