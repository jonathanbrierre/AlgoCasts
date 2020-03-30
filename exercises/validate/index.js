// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max){
        return false;
    }
    if (min !== null && node.data < min){
        return false;
    }

    if(node.left && !validate(node.left, min, node.data)){
        return false;
    }


    if (node.right && !validate(node.right, node.data, max)){
        return false;
    }

    return true;
}



class Node {
    construct(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }

    insert(data){
        if(data > this.data && this.right){
            return this.right.insert(data);
        } else if (data > this.data){
            this.right = new Node(data);
        } else if(data < this.data && this.left){
            return this.left.insert(data);
        } else if(data < this.data){
            this.left = new Node(data);
        }
    }

    confirm(data){
        if(this.data === data){
            return this;
        }
        if(data > this.data && this.right){
            return this.right.confirm(data);
        }
        if (data < this.data && this.left){
            return this.left.confirm(data);
        }

        return null;
    }

}

class Tree {
    construct(){
        this.root = null;
    }

    traverseBF(fn){
        let arry = [this.root];
        while(arry.length){
            let node = arry.shift();
            arry.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        let arry = [this.root];
        while(arry.length){
            let node = arry.shift();
            arry.unshift(...node.children);
            fn(node);
        }
    }
}

class Nodule{
    construct(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Nodule(data));
    }

    remove(data){
        this.children = this.children.filter((element) => element !== data);
    }
}

module.exports = validate;
