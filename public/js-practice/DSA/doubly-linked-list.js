class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) { 
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) { 
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    reverse(){
        if(this.head === null) return empty;
        if(this.head == this.tail) return this.head;

        let temp = this.head;
        let before = null;

        while (current) {
            before = temp.prev;
            temp.prev = temp.next;
            temp.next = before;
            temp = current.prev;
        }

        if (before !== null) {
            this.head = before.prev;
        }
        return this;
    }

    swapFirstLast() {
        // If the list has less than two nodes, do nothing
        if (this.length < 2) return;
        // Store the head value in a temporary variable
        const temp = this.head.value;
        // Set head value to the value of the tail node
        this.head.value = this.tail.value;
        // Set tail value to the stored value of the head node
        this.tail.value = temp;
    }

    isPalindrome() {
        // If the list has 0 or 1 nodes, it's a palindrome
        if (this.length <= 1) return true;
     
        // Initialize forwardNode at the head and backwardNode at the tail
        let forwardNode = this.head;
        let backwardNode = this.tail;
     
        // Iterate through half of the list
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            // If forwardNode value is not equal to backwardNode value, 
            // it's not a palindrome
            if (forwardNode.value !== backwardNode.value) return false;
     
            // Move forwardNode to the next node and backwardNode to the previous node
            forwardNode = forwardNode.next;
            backwardNode = backwardNode.prev;
        }
     
        // If all pairs match, it's a palindrome
        return true;
    }


    swapPairs() {
        // Create a dummy node with value 0
        const dummy = new Node(0);
        // Set dummy's next to head of list
        dummy.next = this.head;
        // Set prev as dummy
        let prev = dummy;
     
        // Iterate while head and head's next exist
        while (this.head !== null && this.head.next !== null) {
            // Assign first and second nodes
            const firstNode = this.head;
            const secondNode = this.head.next;
     
            // Update next pointers for swapping
            prev.next = secondNode;
            firstNode.next = secondNode.next;
            secondNode.next = firstNode;
     
            // Update prev pointers for swapping
            secondNode.prev = prev;
            firstNode.prev = secondNode;
            // Update prev pointer of next node if exists
            if (firstNode.next !== null) {
                firstNode.next.prev = firstNode;
            }
     
            // Move head and prev pointers forward
            this.head = firstNode.next;
            prev = firstNode;
        }
     
        // Update head of the list
        this.head = dummy.next;
        // Set prev of new head to null
        if (this.head) this.head.prev = null;
    }
 }

 
 function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);
    myDLL.push(3);
    myDLL.push(4);
    myDLL.push(5);

    console.log("DLL before remove():");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() in middle:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(0).value);
    console.log("DLL after remove() of first node:");
    myDLL.printList();

    console.log("\nRemoved node:");
    console.log(myDLL.remove(2).value);
    console.log("DLL after remove() of last node:");
    myDLL.printList();
}