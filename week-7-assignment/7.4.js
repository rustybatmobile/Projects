const Stack = require("./Stack");

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
