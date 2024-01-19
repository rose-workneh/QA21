describe('Testing view page functinalty',()=>{
    it('This test case verifies that only authenticated users can access the user detail page.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/view_detail/22/')
    
      // 4. assertion
      cy.url().should('include','https://end-to-end-v1.onrender.com/')
       
    })
    
    it('verify that the user detail page correctly displays the users information, including their full name, username, email, role, date of birth, and address.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
       // 2. select element and 3. intract with element
       
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
       cy.get('a[href="/view_detail/46/"]').click()

      // 4. assertion
      cy.url().should('include','https://end-to-end-v1.onrender.com/view_detail/')
      //cy.get('section').contains('rose workneh roseT 1234@dedT.com')
      cy.contains('span', 'rose workneh')
      cy.contains('span', 'roseT')
      cy.contains('span', '1234@dedT.com')
      cy.contains('span', 'Administrator')
      cy.contains('span', 'Jan. 1, 1990')
      cy.contains('span','silver spring')

    })
    
    it('This test case verifies that clicking on the "QA-Test-Tool" link in the navigation menu navigates the user to the home page.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
       // 2. select element and 3. intract with element
       
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
    
      // 4. assertion
      cy.get('a[class="btn-view"]').first().click()
      cy.get('a[href="/home/"]').click()
     cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
       
    })
    it(' This test case ensures that clicking on the "Log out" link in the navigation menu allows the user to log out from the system.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
       
       // 4. assertion
       //li[@class='success']
       cy.get('a[class="btn-view"]').first().click()
       cy.get('a[href="/logout/"]').click()
       cy.url().should('include','https://end-to-end-v1.onrender.com/')
    
    
})


 
it('verify that the home page includes a footer section with copyright information and a link to the Craft Knowledge website.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()
   
   // 4. assertion
   //li[@class='success']
   cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
   cy.get('a[class="btn-view"]').first().click()
   cy.get('a[class="link-deco"]').contains('Craft Knowledge')
   cy.get('footer').contains('© 2023')
   cy.get('a[href="https://craftknowledge.net/"]').click()
   cy.origin('https://craftknowledge.net', () => {
  cy.on('uncaught:exception', (e) => {
    if (e.message.includes('Things went bad')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
  })
})

   cy.url().should('include','https://craftknowledge.net/')


})




})
   