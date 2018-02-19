// put all nodes in stack in order then put into resulting array
const inorderTraversal = root => {
  if (root === null) {
    return [];
  }
  let currNode = root;
  const result = [];
  const stack = [];
  let done = false;
  while (!done) {
    if (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      if (stack.length) {
        currNode = stack.pop();
        if (currNode !== null) {
          result.push(currNode.val);
        }
        currNode = currNode.right;
      } else {
        done = true;
      }
    }
  }

  return result;
};
