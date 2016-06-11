

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  
  // how many buckets are initialized
  this._occupancy = 0;
};


HashTable.prototype._highThreshold = function() {
  return Math.floor(this._limit * 0.75);
};

HashTable.prototype._lowThreshold = function() {
  return Math.ceil(this._limit * 0.25);
};

HashTable.prototype._double = function() {
  var newLimit = this._limit * 2;
  var newHash = new HashTable(newLimit);

  this._storage.each(function(bucket, index, storage) {
    // traverse bucket
    if (bucket) {
      _.each(bucket, function(tuple) {
        newHash.insert(tuple[0], tuple[1]);
      });
    }
  });

  // reassign old hash to new hash
  this._limit = newHash._limit;
  this._storage = newHash._storage;
  this._occupancy = newHash._occupancy;
};

HashTable.prototype.insert = function(k, v) {

  if (this._occupancy >= this._highThreshold()) {
    // increase the limit of this._storage and rehash all keys
    this._double();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    
  } else {
    var bucketIndex = bucket.findIndex(function(tuple) {
      return tuple[0] === k;
    });

    if (bucketIndex > -1) {
      // override
      bucket[bucketIndex][1] = v;
    } else {
      bucket.push([k, v]);
    }
  }

  // increase occupancy
  this._occupancy++;
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
    if (bucket.length === 0) {
      this._storage[index] = undefined;
    }
    this._occupancy--;
    return value;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


