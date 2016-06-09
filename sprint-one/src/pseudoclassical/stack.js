var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.push = function (value) {
  this.index++;
  this.storage[this.index] = value;
};

Stack.prototype.pop = function () {
  if (this.index === 0) { return; }
  
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return popped;
};