const {Node, BST} = require("./BST");
const {Queue} = require("./Queue");
const myBst = new BST();

myBst.insert(8)
myBst.insert(3)
myBst.insert(10)
myBst.insert(14)
myBst.insert(13)
myBst.insert(1)
myBst.insert(6)
myBst.insert(4)
const root = myBst.insert(7)



function levelOrderTraversal(root) {

    const queue = new Queue();
    //we push the first node into the queue
    queue.enqueue(root);
    while(!queue.isEmpty()) {

        //with each dequeue, both its possible children are added from left to right to the queue
        //the only way to remove them is by adding _their_ children to the end of the queue. 
        const node = queue.dequeue();
        if(node.left) {
            queue.enqueue(node.left)
        }
        if(node.right) {
            queue.enqueue(node.right);
        }

        //result is it's consoled in level order. 
    }
    return
}

levelOrderTraversal(root);