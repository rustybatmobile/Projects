function sort012(a,arr_size) {
      
    let lo = 0; 
    let hi = arr_size - 1; 
    let mid = 0;
    let temp = 0; 
    while (mid <= hi)
    {
        if(a[mid] == 0)
        {
            temp = a[lo]; 
            a[lo] = a[mid]; 
            a[mid] = temp; 
            lo++; 
            mid++; 
        }
        else if(a[mid] == 1)
        {
            mid++; 
        }
        else
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
