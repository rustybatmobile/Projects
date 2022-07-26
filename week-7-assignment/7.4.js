class Stack {
    constructor(maxLength) {
        this.top = -1;
        this.data = [];
        this.maxLength = maxLength;
    }

    push(value) {
        if(this.top < this.maxLength) {
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
            throw "Stack underflow"
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

function paranthesisChecker(str) {
    let stack = new Stack(10);
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "{" || str[i] === "[" || str[i] === "(" ) {
            stack.push(str[i]);
        } else {
            if(stack.isEmpty()) {
                return false;
            } else if(stack.peek() === provideOpposite(str[i])){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.isEmpty() ? true : false
}

function provideOpposite(char) {
    switch(char) {
        case "}": return "{"
        case ")": return "("
        case "]": return "["
        default: return "none"
    }
}

console.log(paranthesisChecker("{{[]}}"))
