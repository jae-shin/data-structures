

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
    var bucketIndex = bucket.findIndex(function(tuple) {
      return tuple[0] === k;
    });

    if (bucketIndex > -1) {
      bucket[bucketIndex][1] = v;
    } else {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  var bucketIndex = bucket.findIndex(function(tuple) {
    return tuple[0] === k;
  });

  if (bucketIndex > -1) {
    return bucket[bucketIndex][1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  var bucketIndex = bucket.findIndex(function(tuple) {
    return tuple[0] === k;
  });

  if (bucketIndex > -1) {
    var value = bucket[bucketIndex][1];
    bucket.splice(bucketIndex, 1);
    return value;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


