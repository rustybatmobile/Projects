function vowelCount(str) {
    let map = new Map()
    for(let char of str) {
      if("aeiou".includes(char)){
        if(!map.has(char)) {
          map.set(char, 1);
        } else {
          map.set(char, map.get(char) + 1);
        }
      }
    }
    return map;
  }
  
  console.log(vowelCount("elephant horse"));
  