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
    for(let i = arr.length - 1; i >= 0; i--) {
        if(!stack.peek()) {
            res[i] = -1;
            stack.push(arr[i]);
        } else if(stack.peek() <= arr[i]) {
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
            res[i] = stack.peek();
            stack.push(arr[i]);
        } 
    }

    return res;
}

console.log(nextGreaterElement([3, 10, 4, 2, 1, 2, 6, 1, 7]))