/* question 10 -->  Implement LinkedList class in JS.*/

// creating node
class Node {
    // creating constructor which takes data
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    // create constructor for linked list
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // inserting data at the end of linked list
    insert(data) {
        let node = new Node(data);
        node.next = null;
        if (this.head == null) {
            this.head = node;
        } else {
            let last = this.head;
            while (last.next != null) {
                last = last.next;
            }
            last.next = node;
        }
        this.size++;
        return this.head;
    }

    // print the linked list
    printLL() {
        // copy the head to a local variable temphead
        let tempHead = this.head;
        while (tempHead != null) {
            // console.log(head.data + "-->");
            if (tempHead.next != null) {
                // writing using stdout.write() as console.log() comes with a default enter at the end
                process.stdout.write(tempHead.data + "-->");
            } else {
                process.stdout.write(tempHead.data + " ");
                console.log();
            }

            tempHead = tempHead.next;
        }
    }

    // delete a node from the tail
    deleteNode() {
        if (this.head == null) {
            return null;
        } else if (this.head.next == null) { this.size--; this.head = null; return this.head; }
        else {
            let temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null;
            this.size--;
        }

        return this.head;
    }

    // get size of linkedlist
    getSize() {
        return this.size;
    }

    // check if the linked lis is empty or not
    isEmpty() {
        return this.size == 0;
    }
}


// test case
list = new LinkedList();
list.insert(5);
list.insert(10);
list.insert(15);
list.insert(20);
list.insert(25);
list.insert(30);
list.insert(35);
// list.printLL();
while (list.getSize() > 0) {
    list.printLL(list.deleteNode());
}


