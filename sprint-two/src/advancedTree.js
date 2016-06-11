var AdvancedTree = function(value) {
  var newTree = {};
  _.extend(newTree, advancedTreeMethods);
  newTree.value = value;
  newTree.parent = null; // parent should be a tree, init to null

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var advancedTreeMethods = {};

advancedTreeMethods.addChild = function(value) {
  var child = AdvancedTree(value);
  child.parent = this;
  this.children.push(child);
};

advancedTreeMethods.contains = function(target) {
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

advancedTreeMethods.removeFromParent = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
