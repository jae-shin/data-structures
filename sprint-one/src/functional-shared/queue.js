var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var size = 0;
  var obj = {};

  _.extend(obj, queueMethods);
  console.log(typeof obj.size);
  console.log(obj.size());

  return obj;
};


var queueMethods = {
  size: function() {
    return 0;
  }
};


