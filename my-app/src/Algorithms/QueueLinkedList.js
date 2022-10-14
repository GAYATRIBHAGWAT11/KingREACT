// (last)2<--5<---7<--20(first)
class node{
    constructor(data) {
        this.value=data;
        this.next=null;
    }
}


class Queue{
    constructor(){
        this.first=null;
        // node->initialise by null
        this.last=null;
        this.length=0;

    }
    enqueue(data){

        const newNode=new node(data)
        if(this.length==0){
            this.first=newNode;
            this.last=newNode;
            this.length++
        }
        else{
            this.last.next=newNode
            this.last=newNode
            this,this.length++
            // last ab new node ko point krega
        }
    }
    display(){
        console.log(this.first,this.last);
    }
    dequeue(){
        this.first=this.first.next
        this.length--
    }
}


let myQueue=new Queue()
myQueue.enqueue(1);
myQueue.enqueue(67)
myQueue.enqueue(45)
myQueue.enqueue(80)
// myQueue.display()
myQueue.dequeue()
myQueue.display()
