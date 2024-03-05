class Node {
    constructor(value){
        this.value = value;
        this.top = null;
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.top = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length --;
        return temp;
    }
}

function sortStack(stack) {
    const additionalStack = new Stack();
 
    while (!stack.isEmpty()) {
        const temp = stack.pop();   // keep top of stack1
 
        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            stack.push(additionalStack.pop());  // if temp is less than stack2 top then pop values from stack1 and push it to stack1. and push temp.
            //here all the values less than temp will get pushed back to stack1.
        }
 
        additionalStack.push(temp);  // after pushing values smaller than temp to stack1, push temp to stack2 as stack
    }
 
    while (!additionalStack.isEmpty()) {
        stack.push(additionalStack.pop());   //push sorted elements back to original stack stack1.
    }
}


const ns = new Stack(1);
ns.push(2);