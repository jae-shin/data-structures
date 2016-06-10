

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
  } else {
    // check if a tuple with same key exists, if so overwrite
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        return;
      }
    }

    // TODO: refactor for loop with native findIndex()

    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage.get(index)[k];
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, undefined);
  // this.insert(k, undefined);
  //delete this._storage.get(index)[k];

  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


