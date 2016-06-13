

// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._storage[node] = this._storage[node] || {};
};

// Return a boolean value indicating if the value passed to contains is 
// represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    _.each(this._storage, function(edges, keyNode) {
      _.each(edges, function(innerEdges, edgeNode, edges) {
        if (edgeNode === node) {
          delete edges[edgeNode];
        }
      });
    });
    delete this._storage[node];  
  }
};

// Returns a boolean indicating whether two specified nodes are connected. 
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return this._storage[fromNode].indexOf(toNode) > -1;
  return !!this._storage[fromNode][toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // this._storage[fromNode].push(toNode);
  // this._storage[toNode].push(fromNode);
  this._storage[fromNode][toNode] = this._storage[toNode];
  this._storage[toNode][fromNode] = this._storage[fromNode];
 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // this._storage[fromNode].splice(this._storage[fromNode].indexOf(toNode), 1);
  // this._storage[toNode].splice(this._storage[toNode].indexOf(fromNode), 1);
  delete this._storage[fromNode][toNode];
  delete this._storage[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this._storage, function(value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


