function findPair(arr, size, n) {
    let i = 0;
    let j = 1;

    bubbleSort(arr, size);

    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            return true;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }
    return false;
}
let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;

console.log(findPair(arr, size, n));


//utility functions

function swap(arr, a, b)
{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
  
function bubbleSort(arr, n) {
    let i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
            swap(arr,j,j+1);
            
            }
        }
    
    }
}


//Bubble sort = O(n^2) +
//While loop = O(n) 

//Time complexity: O(n^2) --> Although sorting can be brought down to O(nlogn)
//Space complexity: O(1) --> Mutating the array a lot and only holding i and j values, so O(1)
