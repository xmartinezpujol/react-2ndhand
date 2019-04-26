context('Product to ProductList flow', () => {
  beforeEach(() => {});
  describe('Select a Product', () => {
    it('navigate to product by click in card', () => {
      cy.visit('http://localhost:5000/list');
      cy.wait(5000);
    });
  });
});

