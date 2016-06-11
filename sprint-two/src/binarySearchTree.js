var BSTQ = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.start = 1;
  obj.end = 1;

  _.extend(obj, queueMethods);

  return obj;
};


var queueMethods = {
  size: function() {
    return this.end - this.start;
  },
  enqueue: function(val) {
    this.storage[this.end] = val;
    this.end++;
  },
  dequeue: function() {
    if (this.size() !== 0) {
      var result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }
  }
};


var BinarySearchTree = function(value) {
  var binary = {};

  _.extend(binary, binaryMethods);

  binary.value = value;
  binary.left = null;
  binary.right = null;
  binary.parent = null;

  return binary;
};

var binaryMethods = {
  insert: function(value) {
    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        var newChild = BinarySearchTree(value);
        newChild.parent = this;
        this.left = newChild;
      }
    } else if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        var newChild = BinarySearchTree(value);
        newChild.parent = this;
        this.right = newChild;
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
  breadthFirstLog: function(cb) {
    var queue = BSTQ();
    cb(this.value);
    var generation = [this.left, this.right];
    if (this.left) {
      cb(this.left);

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


