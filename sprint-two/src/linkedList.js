var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;

    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    if (head) {
      list.head = head.next;
      return head.value;
    }
  };

  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      } 
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
