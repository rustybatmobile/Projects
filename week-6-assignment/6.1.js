function maxSumSubarray(arr) {
    //If no other sum is bigger than max_sum, we return the first element
    let max_sum = arr[0];
    let sum = 0;

    //Kadane's algo. Looping through each element
    for(let i =0 ; i < arr.length; i++) {
      //adding it to the sum so far
      sum = sum + arr[i];
      //checking if the sum is greater than the max_sum
      if(sum > max_sum) {
        max_sum = sum;
      }

      //if sum is less than 0, in the -ve, but there's got to 
      // be atleast one +ve in the list, we discard the -ves collected in the sum
  
      if(sum < 0) {
        sum = 0
      }
    }
  
    return max_sum;
  }
  
const arr = [-1, 3, 2, -6, 6, 7];

console.log(maxSumSubarray(arr));


//Time complexity: O(n) // One loop present, rest are O(1) so ignored

//Space complexity: O(1) //Because both max_sum and sum store one value at a time and nothing more



