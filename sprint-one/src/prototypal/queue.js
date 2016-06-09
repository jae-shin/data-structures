var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.start = 1;
  queue.end = 1;
  return queue;
};

var queueMethods = {
  size: function() {
    return this.end - this.start;
  },
  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },
  dequeue: function() {
    if (this.start === this.end) { return; }
    
    var popped = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return popped;
  }
};