//memoized function

const memoize = func => {
    const cache = {};
    return (...args) => {
       let strKey = args.join(',');
        if(!cache[strKey]){
          cache[strKey] = func.apply(this, args);
        } 
         return cache[strKey];
     }
  }
  
  const add = (...args) => {
    return args.reduce((s, e) => {
      return s += e;
    }, 0);
  }
  
  const memoizedAddFunction = memoize(add);
  
  memoizedAddFunction(1, 2);
  memoizedAddFunction(2, 1);
  memoizedAddFunction(4, 2);
  memoizedAddFunction(4, 2);
  memoizedAddFunction(8, 2);
  memoizedAddFunction(1, 2);
  memoizedAddFunction(4, 2);
  memoizedAddFunction(8, 2);