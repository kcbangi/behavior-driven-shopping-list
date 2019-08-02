const expect = chai.expect;

describe("ShoppingListItem", function() {
  it("should be a class", function() {
    const apple = new ShoppingListItem("apple");
  });
  it("should have a name", function(){
    const pineapple = new ShoppingListItem('pineapple');
    expect(pineapple.name).equal('pineapple');
  })
});
