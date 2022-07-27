class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this.head;
        }
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    
    insertAtPosition(value, pos) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            let count = 0;
            while(count < pos - 1) {
                current = current.next;
                count++;
            }
            let temp = current.next;
            current.next = node;
            node.next = temp;
        }

        return this.head;

    }

    insertAtEnd(value) {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = new Node(value);
        return this.head;
    }

    print() {
       return this.head
    }
}

const linkedList = new LinkedList();
linkedList.insertAtBeginning("a");
linkedList.insertAtBeginning("b");
linkedList.insertAtBeginning("c");
linkedList.insertAtBeginning("d");
linkedList.insertAtBeginning("e");
const head = linkedList.print();


function reverseLinkedList(head) {
    let current = head;
    let prevNode = null;

    while(current) {
        let nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    let newHead = prevNode;
    return newHead
}


console.log(reverseLinkedList(head));