const {MyStack} = require("./Stack")

    class QueueFromStacks {
        constructor() {
            this.inbox = new MyStack(10)
            this.outbox = new MyStack(10);
        }

        enqueue(item) {
            if(this.inbox.maxSize + this.outbox.maxSize === this.size) {
                throw "queue overflow"
            }
            this.inbox.push(item);
        }

        get size() {
            return this.inbox.length + this.outbox.length;
        }

        dequeue() {

            if(this.outbox.isEmpty) {
                if(this.inbox.isEmpty) {
                    throw "Queue underflow"
                }
               else {
                    while(!this.inbox.isEmpty) {
                        let item = this.inbox.pop();
                        this.outbox.push(item);
                    }
                }
            }

            let outboxFrontItem = this.outbox.pop();
            return outboxFrontItem
        }

        log() {
            console.log("inbox" + this.inbox.items)
            console.log("outbox" + this.outbox.items)
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
