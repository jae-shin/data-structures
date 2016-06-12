describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  describe('advanced set', function() {
    it('should be capable of handling numeric inputs', function() {
      set.add(1);
      set.add(2);
      set.add(3);
      expect(set.contains(1)).to.equal(true);
      expect(set.contains(2)).to.equal(true);
      expect(set.contains(3)).to.equal(true);
      set.remove(5);
      set.remove(2);
      expect(set.contains(2)).to.equal(false);
    });

    it('should be capable of handling inputs of any type', function() {
      set.add('Ricky Martin');
      set.add(3);
      set.add(true);
      set.add([4, 'foo', {name: 'jae'}]);
      expect(set.contains(true)).to.equal(true);
      expect(set.contains('Ricky Martin')).to.equal(true);
      expect(set.contains([4, 'foo', {name: 'jae'}])).to.equal(true);
      set.remove(true);
      expect(set.contains(true)).to.equal(false);
    });
  });
});
