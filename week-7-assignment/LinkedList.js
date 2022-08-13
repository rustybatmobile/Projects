const Node = require("./Node")

class LinkedList {
    constructor() {
        this.head = null;
    }

    unshift(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this.head;
        }
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    
    insert(value, pos) {
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

    getTail() {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current
    }

    print(head) {
        const arr = [];
        let current = head;
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        arr.push("null");
        return arr.join(" -> ")
    }

    getNode(pos) {
        let count = 0;
        let current = this.head;
        while(count < pos) {
            current = current.next;
            count++;
        }

        return current

        console.log(current, "currnet")
    }

    push(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            return this.head;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
        return this.head;
    }

    getHead() {
       return this.head
    }
}

module.exports = LinkedList