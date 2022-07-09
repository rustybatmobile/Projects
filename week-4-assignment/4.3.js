const obj = {
    [Symbol.iterator]() {
        let prev1 = 0;
        let prev2 = 1;
        return {
            next() {
                if(prev1 === 0 && prev2 === 1) {
                    prev1 = 1;
                    return {
                        value: 0, 
                        done: false
                    }
                } 
               else if (prev1 === 1 && prev2 === 1) {
                    prev2 = 2;
                    return {
                        value: 1, 
                        done: false
                    }
                } else if(prev1 === 1 && prev2 === 2) {
                    prev1 = 2;
                    prev2 = 3;
                    return {
                        value: 1,
                        done: false
                    }
                } else {
                    let total = prev1 + prev2;
                    let temp = prev1;
                    prev1 = prev2;
                    prev2 = total;
                        return { 
                            value: temp, 
                            done: false
                        }
                    }
                      
            }
        }
    }
}

for(let el of obj) {
    console.log(el)
    if(el > 20) {
        break
    }
}

