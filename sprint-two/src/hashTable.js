

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  if (obj === undefined) {
    obj = {};
  }
  obj[k] = v;
  this._storage.set(index, obj);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, undefined);
  // this.insert(k, undefined);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


