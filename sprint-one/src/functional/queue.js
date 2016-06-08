var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 1;
  var end = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if (start === end) { return undefined; }

    var popped = storage[start];
    delete storage[start];
    start++;
    return popped;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
