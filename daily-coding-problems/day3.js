/**
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

class Node {
  constructor(val, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

const node = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

const serialize = (root) => {
  let result = [];

  const serializeRecur = (root) => {
    if (!root) {
      result.push("null");

      return;
    }

    result.push(root.val);
    serializeRecur(root.left);
    serializeRecur(root.right);
  };

  serializeRecur(root);

  return result.join(",");
};

const deserialize = (root) => {
  const arr = root.split(",");
  let index = 0;

  const deserializeRecur = () => {
    if (arr[index] === "null") {
      index++;

      return null;
    }

    const node = new Node(arr[index]);
    index++;
    node.left = deserializeRecur();
    node.right = deserializeRecur();

    return node;
  };

  return deserializeRecur(root);
};

console.log(deserialize(serialize(node)).left.left.val === "left.left");
