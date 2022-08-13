const LinkedList = require("./LinkedList")
const Node = require("./Node")

const linkedList = new LinkedList();
linkedList.push("a");
linkedList.push("b");
linkedList.push("c");
linkedList.push("d");
linkedList.push("e");
const head = linkedList.getHead();
console.log(linkedList.print(head));


function reverseLinkedList(head) {
    let current = head;
    let prevNode = null;

    //we traverse through it one by one, switching the direction
    //eg: e -> d -> c -> b -> a (start)
    //step 1: null <- e  | d -> c -> b -> a  (while a reference of "d" is stored as nextNode so its not lost and continue till the end )

    while(current) {
        let nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    let newHead = prevNode;
    return newHead
}


const result = reverseLinkedList(head);
console.log(linkedList.print(result))

//Time Complexity: O(n) -> length of the linked list
//Space Complexity: O(1) 

