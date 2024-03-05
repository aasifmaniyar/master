class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        //first check for empty LL.
        if(this.length === 0) return undefined;
        // pop from multiple items in LL
            let prev = this.head;
            let temp = this.head;
            while(temp.next)
                {
                    prev = temp;
                    temp = temp.next;
                }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
        if(this.length === 0)
        { 
            this.head = null;
            this.tail = null;
        }
        return temp;  //to return popped item
        // return this;  // to return LL after popping last item.
    }

    unshift(value){  //add node at start
        const newNode = new Node(value);
         if (!this.head) {
             this.head = newNode;
             this.tail = newNode;
         } else {
             newNode.next = this.head;
             this.head = newNode;
         }
         this.length++;
         return this;
     }

     shift(){
        if(this.length === 0) return false;
        let temp = this.head;
        this.head = this.head.next;   //if next has null them head will be null.
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    get(index){
        if(index >= this.length || index < 0) return false;
        let temp = this.head;
        for(let i=0; i<index; i++){
            temp = temp.next;
        }
        return temp;
    }

    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true
        }
        return false
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }


    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;
        for(let i = 0; i< this.length; i++)
            {
                next = temp.next;
                temp.next = prev // pointing to previous node
                prev = temp;
                temp = next;
            }
        return this;
    }

    // find middle node without length

        findMiddleNode() {
            // Initialize slow and fast pointers at head
            let slow = this.head;
            let fast = this.head;
            // Iterate through the list
            while (fast !== null && fast.next !== null) {
                // Move slow pointer one step
                slow = slow.next;
                // Move fast pointer two steps
                fast = fast.next.next;
            }
            // Return middle node when fast reaches end
            return slow;
        }

        findMiddleNode1(){
            if(this.head === null) return null
            if(this.head === this.tail) return this.head;
            let length = 1;
            let temp = this.head;
            while(temp.next == null){
                temp = temp.next;
                length ++;
            }
            length = Math.floor(length/2 +1);
            for(let i=0; i<= length; i++)
            {
                temp = temp.next;
            }
            return temp;
        }

        hasLoop(){
            if(this.head === null ) return false;
            if(this.head === this.tail) return false;
            
            let slow = this.head;
            let fast = this.head;
            while(fast !== null && fast.next !== null)
            {
                slow = slow.next;
                fast = fast.next.next;
                if(slow === fast)
                {
                    return true;
                }
            }
            return false;
        }
    
        findKthFromEnd(k) {
            // Initialize slow and fast pointers at head
            let slow = this.head;
            let fast = this.head;
         
            // Move fast pointer k steps ahead
            for (let i = 0; i < k; ++i) {
                // If fast reaches null, k is out of range
                if (fast === null) {
                    return null;
                }
                fast = fast.next;
            }
         
            // Iterate until fast reaches the end
            while (fast !== null) {
                // Move slow and fast pointers one step
                slow = slow.next;
                fast = fast.next;
            }
         
            // When fast reaches end, slow is at kth from end
            return slow;
        }

        partitionList(x) {
            // If the list is empty, do nothing
            if (this.head === null) return;
         
            // Create dummy nodes for two sublists
            const dummy1 = new Node(0);
            const dummy2 = new Node(0);
            // Initialize prev pointers for sublists
            let prev1 = dummy1;
            let prev2 = dummy2;
            // Initialize current pointer at head
            let current = this.head;
         
            // Iterate through the list
            while (current !== null) {
                // If current value is less than x
                if (current.value < x) {
                    // Add current node to the first sublist
                    prev1.next = current;
                    prev1 = current;
                } else {
                    // Add current node to the second sublist
                    prev2.next = current;
                    prev2 = current;
                }
                // Move current pointer to the next node
                current = current.next;
            }
         
            // Terminate the second sublist
            prev2.next = null;
            // Merge the sublists
            prev1.next = dummy2.next;
         
            // Update the head of the list
            this.head = dummy1.next;
        }

        removeDuplicates(){
            if(this.head === null) return false;
            if(this.head.next === null) return this.head;
            
            let temp = this.head;
            const unique = new Set();
            //let prev = null;
            while(temp !== null){
                if(unique.has(temp.value)){
                   // prev.next = temp.next;
                    this.length -=1;
                }
                else {
                    unique.add(temp.value);
                    // prev = temp;
                }
                temp = temp.next;
            }
            return this;
        }

        binaryToDecimal(){
            let num = 0;
            if(this.head === null) return 0;
            let temp = this.head;
            while(this.head !== null){
                num = num * 2 + temp.value
                temp = this.head.next;
                this.head = this.head.next;
            }
            return num;
        }

        reverseBetween(m, n) {
            if (this.head === null) return;
     
            const dummy = new Node(0);
            dummy.next = this.head;
            let prev = dummy;
     
            for (let i = 0; i < m; i++) {   // loop till previous node of m
                prev = prev.next;
            }
     
            let current = prev.next;
            for (let i = 0; i < n - m; i++) {
                const temp = current.next;
                current.next = temp.next;
                temp.next = prev.next;
                prev.next = temp;
            }
     
            this.head = dummy.next;
        }
}

let myLL = new LinkedList(10);
myLL.push(20);
myLL.push(30);
myLL.pop();
