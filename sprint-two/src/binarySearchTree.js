var BinarySearchTree = function(value) {
  var binary = {};

  _.extend(binary, binaryMethods);

  binary.value = value;
  binary.left = null;
  binary.right = null;

  return binary;
};

var binaryMethods = {
  insert: function(value) {
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
      }
    } else if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    }
  },
  depthFirstLog: function(cb) {
    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  },
  contains: function(value) {
    if (this.value === value) { return true; }

    return !!(this.left && this.left.contains(value) ||
              this.right && this.right.contains(value));
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
