var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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

treeMethods.traverse = function(cb) {
  cb.call(this);
  _.each(this.children, function(tree) {
    tree.traverse(cb);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
