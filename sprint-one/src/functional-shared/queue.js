var Queue = function() {
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


