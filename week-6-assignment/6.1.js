function maxSumSubarray(arr) {
    let max_sum = arr[0];
    let sum = 0;
    for(let i =0 ; i < arr.length; i++) {
      sum = sum + arr[i];
      if(sum > max_sum) {
        max_sum = sum;
      }
  
      if(sum < 0) {
        sum = 0
      }
    }
  
    return max_sum;
  }
  
const arr = [-1, 3, 2, -6, 6, 7];

console.log(maxSumSubarray(arr));

