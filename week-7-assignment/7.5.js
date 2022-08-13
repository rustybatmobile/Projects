const {Stack} = require("./Stack");

function findNextGreaterElement(arr) { //brute force
    const resultArr = [];

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                resultArr.push(arr[j]);
                break;
            }
        }

        if(!resultArr[i]) {
            resultArr.push(-1);
        }
    }
    resultArr.push(-1)
    return resultArr;
}

const result = findNextGreaterElement([6, 8, 0, 1, 3])

//optimized using stack

function nextGreaterElement(arr) {
    
    let stack = new Stack(30);
    let res = [];

    //we traverse from the end
    for(let i = arr.length - 1; i >= 0; i--) {

        //if the stack is empty, the last element in the array doesn't have a next greater element, so -1 is pushed. 
        if(!stack.peek()) {
            res[i] = -1;
            stack.push(arr[i]);
        } 
        //if the top value is less than the array item, then we dig the stack up by removing all smaller items until a greater one is found. 
        //if found, that value is removed because the current element becomes the greater one, and we push the item to the stack as well. 
        else if(stack.peek() <= arr[i]) {
            while(stack.peek() <= arr[i]) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                res[i] = -1;
                stack.push(arr[i])
            } else {
                res[i] = stack.peek();
                stack.push(arr[i]);
            }
        } else {
            //if the stack top value is greater, then, we just push the value to the result and push teh current item to the stack as the recent greater value. 
            res[i] = stack.peek();
            stack.push(arr[i]);
        } 
    }

    return res;
}

console.log(nextGreaterElement([3, 10, 4, 2, 1, 2, 6, 1, 7]))