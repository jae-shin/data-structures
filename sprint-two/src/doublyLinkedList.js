var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value); // new node to add to head
    var head = list.head; // grab old head node
    
    if (head) {
      head.prev = node;
      node.next = head;
    }
    list.head = node;

    if (list.tail === null) {
      list.tail = node;
    }
  };

  list.addToTail = function(value) {
    var node = Node(value); // new node to add to tail
    var tail = list.tail; // grab old tail node

    if (tail) { 
      tail.next = node;
      node.prev = tail;
    }
    list.tail = node;
    
    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function() {
    var head = list.head; // grab head node

    if (head) {
      list.head = head.next;
      head.next.prev = null;
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