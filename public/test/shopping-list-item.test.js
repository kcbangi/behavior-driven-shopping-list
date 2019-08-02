const expect = chai.expect;

describe("ShoppingListItem", function() {
  it("should be a class", function() {
    expect(ShoppingListItem).to.be.a("function");
  });
  it("should have a name", function() {
    const pineapple = new ShoppingListItem("pineapple");
    expect(pineapple.name).equal("pineapple");
  });
  it("should have description", function() {
    const apple = new ShoppingListItem("apple", "red");
    expect(apple.description).equal("red");
  });
  it("should have isDone", function() {
    const apple = new ShoppingListItem("apple", "red");
    expect(apple.isDone).not.equal(undefined);
  });
  it("should have two arguments, 'name' and description'.", function() {
    const apple = new ShoppingListItem("apple", "red");
    expect(apple.name).equal("apple");
    expect(apple.description).equal("red");
  });
  it('should have "check" method', function() {
    const apple = new ShoppingListItem();
    expect(apple.check).to.be.a("function");
  });
  it("check function should turn isDone to true", function() {
    const apple = new ShoppingListItem();
    apple.check();
    expect(apple.isDone).equal(true);
  });
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
