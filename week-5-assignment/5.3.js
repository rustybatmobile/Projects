function hasDuplicate(arr) {
    const set = new Set();
    for(let el of arr) {
      set.add(el);
    }
    if(set.size < arr.length) {
      return true
    } 
    return false;
  }
  
  const result = hasDuplicate([3, 4, 4, 5, 6])
  console.log(result)
  