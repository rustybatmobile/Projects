const LinkedList = require("./LinkedList")
const linkedList = new LinkedList();
linkedList.push("a");
linkedList.push("b");
linkedList.push("c");
linkedList.push("d");
linkedList.push("e");
linkedList.push("f");
linkedList.push("g");
linkedList.push("h");

const head = linkedList.getHead();
const fourthNode = linkedList.getNode(3)
const tail = linkedList.getTail();

//The tail node is now made to point to the 4th node;

tail.next = fourthNode;

//Now the linkedList has a loop in it. 


function detectingLoop(head, N) {


    //Now we have a slow and a fast pointer and the fast pointer takes two steps for every step
    //the slow pointer takes. At a certain point, as they continue, they will meet if there exists a loop. 
    
    let slow = head;
    let fast = head;

    //fast.next should also be there, because fast.next is null, then, when fast.next.next is encountered, there'd 
    //be an error

    while(slow && fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            return true
        }
    }

    return false;

}

console.log(detectingLoop(head))