"use strict";

const assert = require("assert");

const insert = (root, value) => {
  if (root.value === null) {
    root.value = value;
    return;
  }
  let newNode = { value };
  let currentNode = root;
  while (newNode) {
    if (value < currentNode.value) {
      // go left
      if (!currentNode.left) {
        currentNode.left = { value };
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if (value > currentNode.value) {
      // go right
      if (!currentNode.right) {
        currentNode.right = { value };
        break;
      } else {
        currentNode = currentNode.right;
      }
    } else {
      break;
    }
  }
};

const insertRecursively = (root, value) => {
  if (!root.value) {
    root.value = value;
    root.left = {};
    root.right = {};
    return;
  }
  if (value < root.value) {
    // go left
    insertRecursively(root.left, value);
  } else if (value > root.value) {
    // go right
    insertRecursively(root.right, value);
  }
};

const find = (root, value) => {
  let node = root;
  while (node) {
    if (node.value === value) {
      break;
    } else if (value > node.value) {
      // go right
      node = node.right;
    } else {
      // go left
      node = node.left;
    }
  }
  return node;
};

const findRecursively = (root, value) => {
  if (!root) {
    return root;
  }
  if (root.value === value) {
    return root;
  } else if (value > root.value) {
    // go right
    return findRecursively(root.right, value);
  } else {
    // go left
    return findRecursively(root.left, value);
  }
};

const checkTree = bstree => {
  assert.equal(bstree.value, 5);
  assert.equal(bstree.left.value, 3);
  assert.equal(bstree.right.value, 10);
  assert.equal(bstree.left.left.value, 1);
  assert.equal(bstree.left.right.value, 4);
  assert.equal(bstree.right.left.value, 7);
  assert.equal(bstree.right.right.value, 12);
};

{
  const root = { value: null };
  insert(root, 5);
  insert(root, 3);
  insert(root, 10);
  insert(root, 1);
  insert(root, 4);
  insert(root, 7);
  insert(root, 12);
  checkTree(root);
}

{
  const root = { value: null };
  insertRecursively(root, 5);
  insertRecursively(root, 3);
  insertRecursively(root, 10);
  insertRecursively(root, 1);
  insertRecursively(root, 4);
  insertRecursively(root, 7);
  insertRecursively(root, 12);
  checkTree(root);
  // find
  assert.equal(find(root, 7).value, 7);
  assert.equal(find(root, 999) === undefined, true);
  // findRecursively
  assert.equal(findRecursively(root, 7).value, 7);
  assert.equal(findRecursively(root, 999) === undefined, true);
}
