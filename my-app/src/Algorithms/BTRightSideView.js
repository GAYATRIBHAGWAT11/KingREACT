
// Given the root of a binary tree, imagine yourself standing
//  on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom



var rightSideView=function(root){
    if(!root) return [];


    const queue=[root]
    // [1]
    const result=[]


    while(queue.length){
        let len =queue.length;
        result.push(queue[queue.length-1].val);

        while(len--){
            let node=queue.shift()
            if(node.left) queue.push(node.left)

            if(node.right) queue.push(node.right)
        }

    }
    return result;

}

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]