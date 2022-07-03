//bind

//Bind function binds a function to an object and returns a new function. This can be used 
//in areas where we don't have to call the function right away. Instead, have the bounded function ready
//to be called later. 

//Examples

const obj = {
    name: "harish", 
    printName() {
        return this.name;
    }
}

setTimeout(obj.printName.bind(obj), 300);

// *****************************************************************************************************

// Call 

// This is similar to bind, in that, this also lets you bind a function to an object but this doens't return the 
// bounded function but rather, calls the bounded function instantaneously. 


const obj2 = {
    result: "The result is: ",
    print(value) {
        //CPU intensive task
        return this.result + " " +  value;
    }
}

//Example 1 (memoizing a function)

function memoize(callback) {
    let cache = {};

    return function(val) {
        if(cache in val) {
            return cache[val];
        } else {
            const result = callback.apply(call, val);
            cache[val] = result;
            return cache[val];
        }
    }
}

const memoizedPrint = memoize(obj2.print);

memoizedPrint(5);


// Example 2:  Simple

const obj3 = {
    name: "Harish"
}

function printTheName() {
    console.log(this.name)
}

printTheName.call(obj3)


// *****************************************************************************************************

//Apply 

// Apply is no different from call, in that, the arguments in call are provided as positional parameteres while
// in apply, they're passed as an array. 

// Example: Math.max()

let result = Math.max(4, 6, 7, 3, 7, 23 )

console.log(result); //23 

// But if we have an indefinite amount of parameters, we have no option but to pass it as an Array. In those cases 

Math.max([4, 5, 2, 5, 6]) //causes an error

// Fix: 


Math.max.apply(null, [5, 7, 4, 3, 6, 3]) //returns 7 

 



