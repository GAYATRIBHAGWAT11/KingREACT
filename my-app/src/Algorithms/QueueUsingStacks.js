class queues {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(value) {
        if (this.stack1.length == 0) {
            this.stack1.push(value)
        }
        else {
            while (this.stack1.length != 0) {
                this.stack2.push(this.stack1[this.stack1.length - 1])
                this.stack1.pop()
                // grab end element
            }
            this.stack1.push(value)
            while (this.stack2.length != 0) {
                this.stack1.push(this.stack2[this.stack2.length - 1])
                this.stack2.pop()
            }
        }

    }
    // display() {
    //     return stack1
    // }
    dequeue(){
        this.stack1.pop()
    }

}

const myQueue = new queues()
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue();

// myQueue.display()
