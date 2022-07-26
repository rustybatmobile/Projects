function maxProfit(arr) {

    if(!Array.isArray(arr)) {
        throw "Invalid array"
    }

    if(arr.length === 1) {
        return 0;
    }

    let max_profit = 0;

    for(let i = 0; i <arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if((arr[j] - arr[i]) > max_profit) {
                max_profit = arr[j] - arr[i];
            }
        }
    }

    return max_profit;

}

console.log(maxProfit([7,6,4,3,1]))