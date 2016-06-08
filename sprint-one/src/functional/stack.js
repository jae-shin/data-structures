var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.pop = function() {
    if (index === 0) {
      return undefined;
    }
    var popped = storage[index];
    delete storage[index];
    index--;    
    return popped;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
