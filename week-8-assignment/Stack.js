class MyStack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.maxSize = 5;
    }

    get size() {
        return this.items.length;
    }

    push(value) {
        if(this.size < this.maxSize) {
            this.items.push(value);
            this.top = value;
            return value;
        } else {
            throw "Stack overflow"
        }
    }

    logItems() {
        console.log(this.items)
    }

    get isEmpty() {
        return this.items.length === 0;
    }

    pop() {

        let currentSize = this.size;
        if(currentSize === 0) {
            throw "Stack underflow"
        } else {

            if(currentSize == 1) {
                this.top = -1;
            } else {
                this.top = this.items[currentSize - 2];
            }
            this.items.pop();
            return this.top;
        }
    }

    peek() {
        let currentSize = this.size;
        if(currentSize == 0) {
            throw "Stack is empty"
        } else {
            return this.top;
        }
    }
}


module.exports = {
    MyStack
}

try{
    let myStack = new MyStack();
    myStack.push(5);
    myStack.push(3);
    myStack.push(4);
    myStack.push(6);
    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.pop();
  

  

    myStack.logItems();
} catch(err) {
    console.log(err)
}


