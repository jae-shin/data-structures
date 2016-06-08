var Stack = function() {
  var someInstance = {};

  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    length++;
    someInstance[length] = value;
  };

  someInstance.pop = function() {
    if (length === 0) {
      return undefined;
    }
    var val = someInstance[length];
    delete someInstance.length;
    length--;
    return val;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
