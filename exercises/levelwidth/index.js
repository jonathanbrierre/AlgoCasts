// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arry = [root, 's'];
    const counter = [0];
    let i = 0;
    while(arry.length >1){
        if(arry[0]==='s'){
            arry.push(arry.shift());
            i += 1;
            counter.push(0);
        } else{
            let node = arry.shift();
            arry.push(...node.children);
            counter[i] += 1;
        }
    }
    return counter
}

module.exports = levelWidth;
