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
    while(k > 1) {
        current = current.next;
        k--;
    }

    let previousNodeToNewHead = current;
    let newHead = previousNodeToNewHead.next;
    previousNodeToNewHead.next = null;
    current = newHead;
    

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