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

function height(node) {
    if(!node) {
        return 0;
    }

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
}

console.log(height(root))
