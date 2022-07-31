class Stack {
    constructor(maxLength) {
        this.top = -1;
        this.data = [];
        this.maxLength = maxLength;
    }

    push(value) {
        if(this.top <= this.maxLength) {
            this.data.push(value);
            this.top++;
        } else {
            throw "Stack overflow"
        }
    }

    pop() {
        if(this.top >= 0) {
            this.data.pop();
            this.top--;
        } else {
            return "Stack underflow"
        }
    }

    peek() {
        if(this.top === -1) {
            return "Stack is empty"
        } 
        return this.data[this.top];
    }

    isEmpty() {
        if(this.data.length === 0) {
            return true;
        }
        return false;
    }

    print() {
        console.log(this.data);
    }
}

module.exports = {
    Stack
}
