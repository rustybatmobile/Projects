const {MyStack} = require("./Stack")

    class QueueFromStacks {
        constructor() {
            this.stack1 = new MyStack(10)
            this.stack2 = new MyStack(10);
        }

        enqueue(item) {

            //for enqueing, we push it to the stack1 and when dequeing comes, we transfer all the items 
            //to stack2 thereby flipping it upside down so a stack2 pop() operation's result is similar to dequeing from a queue. 
            if(this.stack1.maxSize + this.stack2.maxSize === this.size) {
                throw "queue overflow"
            }
            this.stack1.push(item);
        }

        get size() {
            return this.stack1.length + this.stack2.length;
        }

        dequeue() {
            //when dequing, if stack2 is empty, all the elements from stack1 is transferred to stack2, provided it is not 
            //empty thereby flipping it, giving the required result.
            if(this.stack2.isEmpty) {
                if(this.stack1.isEmpty) {
                    throw "Queue underflow"
                }
               else {
                    while(!this.stack1.isEmpty) {
                        let item = this.stack1.pop();
                        this.stack2.push(item);
                    }
                }
            }

            let stack2FrontItem = this.stack2.pop();
            return stack2FrontItem
        }

        log() {
            console.log("stack1" + this.stack1.items)
            console.log("stack2" + this.stack2.items)
        }
    }

try {
    let q = new QueueFromStacks();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue()
    q.dequeue()
    q.dequeue()
    q.dequeue()
    q.log();
} catch(err) {
    console.warn(err)
}


//Time complexity: O(1)
