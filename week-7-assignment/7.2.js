const LinkedList = require("./LinkedList")
const linkedList = new LinkedList();
linkedList.push("a");
linkedList.push("b");
linkedList.push("c");
linkedList.push("d");
linkedList.push("e");
const head = linkedList.getHead();
console.log("----Previous-----")
console.log(linkedList.print(head));

function rotateLinkedList(head, k) {
    let current = head;

    //We're traversing k counts and getting a reference of the k-1th node. 
    while(k > 1) {
        current = current.next;
        k--;
    }

    //The current is the previous node to the new head, because current is going to be the last node in the list
    // and the kth node will be the new head

    let previousNodeToNewHead = current;
    let newHead = previousNodeToNewHead.next;
    previousNodeToNewHead.next = null;
    current = newHead;

    //we go till the end of the list and set the next of the last node to the first node. 

    while(current.next) {
        current = current.next;
    }
    current.next = head;
    
    head = newHead;
    return head;
}

const result = rotateLinkedList(head, 2);
console.log("-----After-------")
console.log(linkedList.print(result))

//Time complexity: O(N) becasue we're doing a full 
//Space complexity: O(1) since we're mutating the linked list