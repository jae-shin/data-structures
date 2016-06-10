var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {

  };

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail) { 
      list.tail.next = node;
    }
    list.tail = node;
    
    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    if (head) {
      list.head = head.next;
      return head.value;
    }
  };

  list.removeTail = function(value) {

  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;  
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};