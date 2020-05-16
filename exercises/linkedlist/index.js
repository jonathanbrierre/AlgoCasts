// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        let i = 0;
        let node = this.head;
        while(node){
            i++;
            node = node.next
        }
        return i; 
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head){
            return null
        }
        let node = this.head
        while (node){
            if(node.next === null){
                return node;
            }else{
                node = node.next
            }
        }
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        if(!this.head){
            return null;
        }
        this.head = this.head.next
        return this.head
    }

    removeLast(){
        if(!this.head){
            return null;
        } else if(this.size() === 1){
            this.head = null
            return;
        }

        let node = this.head
        let nextNode = this.head.next

        while(nextNode.next){
            node = node.next
            nextNode = nextNode.next
        }
        
        node.next = null
    }

    insertLast(data){
        if(this.head === null){
            this.head = new Node (data)
        }else if(!this.head.next){
            this.head.next = new Node (data)
        }else{
            let node = this.head.next
            let nextNode = node.next

            while(nextNode){
                node = node.next
                nextNode = nextNode.next
            }

            nextNode = new Node(data)

        }
        


    }
}

module.exports = { Node, LinkedList };
