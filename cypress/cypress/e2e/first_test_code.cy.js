describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Google home page testing', () => {
    it('verifying search functionality working', () => {
      // Testp Step
  // 1. Visiting page
         cy.visit('https://www.google.com')
  // 2. selecting (find) search box
         cy.get('#APjFqb') // 
  // 3. intracting with element for type on search box.
          .type('cypress tutorial') // to type in search box
  // 4. selecting (find) goole search button
         cy.get('input[name="btnK"]').first() 
  // 5. intracting with element (type, click)
          .click() // to click on button.
  // 4. assertion.
 cy.url().should('include','cypress+tutorial')
  })})