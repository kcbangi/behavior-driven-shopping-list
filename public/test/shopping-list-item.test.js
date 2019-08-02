const expect = chai.expect;

describe("ShoppingListItem", function() {
  it("should be a class", function() {
    const apple = new ShoppingListItem("apple");
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
});
