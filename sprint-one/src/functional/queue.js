var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startIndex = 0;
  var enterIndex = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (startIndex === 0) {
      startIndex++;
    }
    storage[enterIndex] = value;
    enterIndex++;
  };

  someInstance.dequeue = function() {
    if (startIndex === 0 || startIndex === enterIndex) {
      return undefined;
    }
    var val = storage[startIndex];

    delete storage.startIndex;
    startIndex++;

    return val;
  };

  someInstance.size = function() {
    if (startIndex === 0) {
      return 0;
    }
    return enterIndex - startIndex;
  };

  return someInstance;
};
