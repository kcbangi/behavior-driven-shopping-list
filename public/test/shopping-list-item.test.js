const expect = chai.expect;

describe("ShoppingListItem", function() {
  describe('isClass', function(){
    it("should be a class", function() {
      expect(ShoppingListItem).to.be.a("function");
    });
  });
  describe('hasName', function(){
    it("should have a name", function() {
      const apple = new ShoppingListItem("apple");
      expect(apple.name).equal("apple");
    });
  })
  describe('hasDescription', function(){
    it("should have description", function() {
      const apple = new ShoppingListItem("apple", "red");
      expect(apple.description).equal("red");
    });
  });
  describe('isDoneMethod', function(){
    it("should have isDone", function() {
      const apple = new ShoppingListItem("apple", "red");
      expect(apple.isDone).not.equal(undefined);
    });
  });
  describe('constructorMethod', function(){
    it("should have two arguments, 'name' and description'.", function() {
      const apple = new ShoppingListItem("apple", "red");
      expect(apple.name).equal("apple");
      expect(apple.description).equal("red");
    });
  });
  describe('checkMethod', function(){
    it('should have "check" method', function() {
      const apple = new ShoppingListItem();
      expect(apple.check).to.be.a("function");
    });
    it("check function should turn isDone to true", function() {
      const apple = new ShoppingListItem();
      apple.check();
      expect(apple.isDone).equal(true);
    });
  });
  describe('uncheckMethod', function(){
    it('should have "uncheck" method', function() {
      const apple = new ShoppingListItem();
      expect(apple.uncheck).to.be.a("function");
    });
    it("uncheck function should turn isDone to false", function() {
      const apple = new ShoppingListItem();
      apple.uncheck();
      expect(apple.isDone).equal(false);
    });
  });
  describe('renderMethod', function(){
    it("should have 'render' method", function(){
      const apple = new ShoppingListItem('apple', 'red');
      expect(apple.render()).equal(`<li class="completed_${apple.isDone}"><span>${apple.name}</span> <span>${apple.description}</span></li>`)
    })
  });
});
