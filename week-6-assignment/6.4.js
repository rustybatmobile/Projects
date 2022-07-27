function maxProfit(arr) {

    if(!Array.isArray(arr)) {
        throw "Invalid array"
    }

    if(arr.length === 1) {
        return 0;
    }

    let max_profit = 0;

    //for each item in the traversal, we check it against every item after
    //  it to see if there's a max-value in the difference and the right side value should be greater

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

//Time complexity: O(n^2) // Two loops are present, rest are O(1) operations so ignored

//Space complexity: O(1) //Because max_profit stores one value at a time and nothing more


