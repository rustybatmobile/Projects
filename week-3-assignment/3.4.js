//Refactored code such that items is not accessible

function createStack() {
    let items = [];
  
    return {
      printItems() {
        console.log(items)
      },
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack=createStack(); 
  stack.push(10);
  stack.push(5);
  stack.push(5);
  stack.pop();
  
  stack.printItems();
  