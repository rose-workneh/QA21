describe('Testing logout functinalty',()=>{
    it(' Verify that the system successfully  logout.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
       
       // 4. assertion
       //li[@class='success']
       cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
       cy.get('a[href="/logout/"]').click()
       cy.url().should('include','https://end-to-end-v1.onrender.com/')
    
    })
})
    