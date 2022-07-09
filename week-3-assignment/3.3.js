function createIncrement() {
    let count=0;
    function increment()  {
      count++;
   
    }
    let message=`Count is${count}`;
    function log() {
      console.log(message);
    }
    return[increment,log];
}

const[increment,log] = createIncrement();
increment();
increment();
increment();
log()

//the output of the problem is 0

//Explanation:

// When increment methods are called, the count value does actually increment, so when the count value is logged, 
// you can actually see it to have become 3. But since we're only logging "message" whose value we do not change and
// remains fixed from the time increment and log functions are returned. Hence, we do not see it get updated. 