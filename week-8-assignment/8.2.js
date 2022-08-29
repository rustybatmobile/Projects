const {BST} = require("./BST");
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

function validateBST(node) {

    //we are recursively checking each node and the condition that the left node if exists is lesser 
    // and the right node if exists is greater. If not, return false. 

    //If one result ends up to be false, then since we've used && operation, the entire program will result to a false. 
    if(!node) {
        return true;
    }

    if(node.left && node.left.value > node.value) {
        return false;
    }

    if(node.right && node.right.value < node.value) {
        return false;
    }

    return validateBST(node.left) && validateBST(node.right);
}

console.log(validateBST(root))