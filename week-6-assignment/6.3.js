function sort012(a,arr_size) {
      
    let lo = 0; 
    let hi = arr_size - 1; 
    let mid = 0;
    let temp = 0; 
    //there's two pointers lo and hi that will point to the last 1 on the 
    // left and the other, last 1 on the right. Anything before lo will be 0 and after hi will be 2
    while (mid <= hi)
    {
        //if the mid pointers to zero, we replace it with lo and increment it and mid also, so all 0s are pushed before lo. 
        if(a[mid] == 0)
        {
            temp = a[lo]; 
            a[lo] = a[mid]; 
            a[mid] = temp; 
            lo++; 
            mid++; 
        }
        //if mid is 1, we leave it as it is and move on to the next
        else if(a[mid] == 1)
        {
            mid++; 
        }
        else //if mid is 2, we push it over the hi, Basically, replace hi with 2 and decrement it
        {
            temp = a[mid]; 
            a[mid] = a[hi]; 
            a[hi] = temp; 
            hi--;
        }
          
    }
    return arr;
}

const arr = [0, 2, 1, 1, 2, 1, 0]

console.log(sort012(arr, arr.length))

//Time complexity: O(n) // One while loop present, rest are individual O(1) operations so ignored

//Space complexity: O(1) //Variables like lo, hi, mid, temp store one value at a time and nothing more



