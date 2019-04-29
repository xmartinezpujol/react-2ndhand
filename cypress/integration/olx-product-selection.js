import * as navigation from '../helpers/navigation';
import * as paths from '../helpers/paths';
import * as selectors from '../helpers/selectors';

let productId;

context('Product to ProductList flow', () => {
  beforeEach(() => {});
  describe('Select a Product', () => {
    it('navigates to product by click in card', ()=> {
      cy.visit(`http://localhost:5000/${paths.productList()}`)
        .get(selectors.olxLogo)
        .should('be.visible')
        .get(selectors.productCard)
        .should('be.visible')
        .first()
        .click();
      cy.url().then((url) => (productId = url.split('/').pop()));
    });
    it('checks product detail page after click', () => {
      navigation.checkPageUrl(paths.productDetail(productId));
      cy.get(selectors.productCardDetail)
        .should('be.visible')
    });
    it('goes back when clicking back arrow', () => {
      cy.get(selectors.productCardDetailBackArrow)
        .click()
        .get(selectors.productCard)
        .should('be.visible')
    })
  });
});

