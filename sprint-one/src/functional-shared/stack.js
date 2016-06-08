var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.index = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return this.index;
  },
  push: function(val) {
    this.index++;
    this.storage[this.index] = val;
  },
  pop: function() {
    if (this.index === 0) { return; }
    var popped = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;
    return popped;
  }

};