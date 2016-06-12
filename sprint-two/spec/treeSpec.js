describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  describe('advanced tree', function() {
    var tree;

    beforeEach(function() {
      tree = Tree();
    });

    it('should have methods named "addChild" and "contains" and "removeFromParent", and a property named "value" and "parent"', function() {
      expect(tree.addChild).to.be.a('function');
      expect(tree.contains).to.be.a('function');
      expect(tree.removeFromParent).to.be.a('function');
      expect(tree.hasOwnProperty('value')).to.equal(true);
      expect(tree.hasOwnProperty('parent')).to.equal(true);
    });

    it('should correctly refer to parent', function() {
      tree.value = 10;
      expect(tree.parent).to.equal(null);
      tree.addChild(20);
      expect(tree.children[0].parent.value).to.equal(10);
      tree.addChild(21);
      expect(tree.children[1].parent.value).to.equal(10);
      tree.children[0].addChild(30);
      expect(tree.children[0].children[0].parent.value).to.equal(20);
      tree.children[1].addChild(31);
      expect(tree.children[1].children[0].parent.value).to.equal(21);
    });

    it('should correctly remove from parent', function() {
      tree.addChild(5);
      tree.addChild(6);
      tree.children[0].addChild(7);
      tree.children[0].addChild(9);
      tree.children[1].addChild(8);
      expect(tree.removeFromParent()).to.equal(undefined);
      expect(tree.parent).to.equal(null);
      expect(tree.contains(9)).to.equal(true);
      var leftChild = tree.children[0];
      expect(leftChild.removeFromParent()).to.equal(tree);
      expect(leftChild.parent).to.equal(null);
      expect(tree.children[0].value).to.equal(6);
      expect(tree.contains(7)).to.equal(false);
    });

    it('should be able to traverse each node in tree', function() {
      tree.addChild(5);
      tree.addChild(6);
      tree.children[0].addChild(7);
      tree.children[1].addChild(8);
      
      tree.traverse(function() {
        if (this.value) {
          this.value *= 2;
        }
      });

      // NaN
      expect(tree.value).to.equal(undefined);
      // 10
      expect(tree.children[0].value).to.equal(10);
      // 12
      expect(tree.children[1].value).to.equal(12);
      // 14
      expect(tree.children[0].children[0].value).to.equal(14);
      // 16
      expect(tree.children[1].children[0].value).to.equal(16);
    });
  });

});
