export function checkPageUrl (url) {
  cy.url()
    .should('include', url)
}
