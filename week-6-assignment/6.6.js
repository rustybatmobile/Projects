function threeSum(arr, x) {
     //setting it as max value because max-target gives the worst difference (highest)
    let closestSum = Number.MAX_VALUE;
 
    for(let i = 0; i < arr.length ; i++)
    {
        for(let j =i + 1; j < arr.length; j++)
        {
            for(let k =j + 1; k < arr.length; k++)
            {
                //if the difference btw target and the default sum 
                // is higher than the sum of the 3 items, then update, and keep updating till all combinations are covered. 
                if (Math.abs(x - closestSum) >
                    Math.abs(x - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            }
        }
    }
    return closestSum;
}

let arr = [ -1, 2, 1, -4 ];
let x = 1;
console.log(threeSum(arr, x));

//Time complexity: O(n^3) // Three loops present, rest are O(1) so ignored

//Space complexity: O(1) //Because closestSum stores one value at a time and nothing more


