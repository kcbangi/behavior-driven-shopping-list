describe("ShoppingList", function() {
  describe("isClass", function() {
    it("should be a class", function() {
      expect(ShoppingList).to.be.a("function");
    });
  });
  describe("item", function() {
    it("should have a property name 'item'.", function() {
      const apple = new ShoppingList("apple");
      expect(apple.item).not.to.equal(undefined);
    });
  });
  describe("Emptyarray", function() {
    it("item should be an empty array", function() {
      const apple = new ShoppingList("apple");
      expect(apple.item.length).to.equal(0);
    });
  });
});
