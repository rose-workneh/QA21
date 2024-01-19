describe('Testing update functinalty',()=>{
    it('verifies that only authenticated users can access the user update page.',()=>{

        //1. visit http://localhost:2000/
       cy.visit('https://end-to-end-v1.onrender.com/update/45/')
    
       // 2. select element and 3. intract with element
       
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
    
       // 4. assertion
       //li[@class='success']
       cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
       cy.get('a[class="btn-update"]').first().click()
       cy.get('input[name="first_name"]').clear()
       cy.get('input[name="last_name"]').clear('')
       cy.get('input[type="submit" ]').click()
       cy.url().should('include','https://end-to-end-v1.onrender.com/update/45/')

    })
})