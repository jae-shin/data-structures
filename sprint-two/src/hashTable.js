

var HashTable = function() {
  this._limit = 8;
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


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    
    // increase occupancy
    this._occupancy++;
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
      this._occupancy--;
      this._storage[index] = undefined;
    }
    return value;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


