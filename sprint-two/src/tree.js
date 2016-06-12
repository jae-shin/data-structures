var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null; // parent should be a tree, init to null

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  // children
  return _.reduce(this.children, function (acc, child) {
    //if (child.contains(target)) { return true; }
    if (acc) { return true; }
    return child.contains(target);
  }, false);

};

treeMethods.removeFromParent = function() {
  // this method returns the parent tree
  var parent = this.parent;
  if (parent) {
    parent.children.splice(parent.children.indexOf(this), 1);
    this.parent = null;
    return parent;
  }

  // if parent does not exist
  return undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
