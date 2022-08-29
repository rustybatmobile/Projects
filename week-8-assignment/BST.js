class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
class BST {
    constructor() {
      this.root = null;
    }
  
    get isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      if (!Number.isInteger(value)) {
        throw 'invalid value';
      }
      let newNode = new Node(value);
      if (this.isEmpty) {
        this.root = newNode;
      } else {
        this.insertAt(newNode, this.root);
      }
      return this.root;
    }
  
    insertAt(newNode, currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this.insertAt(newNode, currentNode.left);
        }
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this.insertAt(newNode, currentNode.right);
        }
      } else {
        throw 'Number present already';
      }
    }
  
    find(value) {
  
      if(!Number.isInteger(value)) {
        throw "Invalid number to find"
      }
  
      if(!this.root) {
        return false;
      }
  
      let current = this.root;
  
      while(current) {
        if(value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
  
      return false;
    }

    inOrder(node) {
      if(!node) {
        return
      }

      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

module.exports = {
  Node, 
  BST
}
  
  
  // try {
  //   const bst = new BST();
  //   console.log(bst.insert(5));
  //   console.log(bst.insert(6));
  //   const root = bst.insert(4);
  //   console.log(bst.find(6));
  //   bst.inOrder(root);
  // } catch (err) {
  //   console.warn(err);
  // }
  