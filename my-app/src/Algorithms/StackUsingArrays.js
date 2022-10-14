class Stack{
    constructor(){
        this.array=[]
    }
    append(data){
        this.array.push(data)
    }
    display(){
      console.log(this.array);  
    }
    peek(){
        // top element
        console.log(this.array[this.array.length-1])
    }
    remove(){
        console.log(this.array.pop());
    }

}
const myStack=new Stack()
myStack.append(5)
myStack.append(3)
myStack.append(10)
myStack.append(45)
myStack.display();
myStack.peek();
myStack.remove()