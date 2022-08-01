const Stack = require("./Stack");

function paranthesisChecker(str) {
    let stack = new Stack(10);

    //if the value is an opening bracket, we put it in the stack. If we encounter a closing bracket, it has to be the 
    //opposite of the top most value in the stack. If not, it's not balanced. 

    //If empty, not balanced either because there can't be a closing without an opening bracket. 
    //If it matches with the opposite, we pop the stack and move on to the next value. 
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

//Time complexity: O(N); where N is the number of characters in the string
//Space complexity: O(1) 



