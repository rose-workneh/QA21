describe('Testing login functinalty',()=>{
    it('Verify that the system successfully creates a new user account when all input validations pass.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
    
       // 2. select element and 3. intract with element
       
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
    
       // 4. assertion
       //li[@class='success']
       cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
       
    })
   
    it(' Verify that the system behaber with an invalid username and valid password.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
    
       // 2. select element and 3. intract with element
       
       cy.get('#username').type('rose3')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
    
       // 4. assertion
       //li[@class='success']
       cy.xpath("//li[@class='error']").should('have.text',' Invalid credentials')
       cy.url().should('include','https://end-to-end-v1.onrender.com')
       
    })
   
   
   it(' Verify that the system handles invalid login credentials with both an invalid username and an invalid password.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')

   // 2. select element and 3. intract with element
   
   cy.get('#username').type('roseT')
   cy.get('#password').type('1234password')
   cy.get('button[type="submit"]').click()

   // 4. assertion
   //li[@class='success']
   cy.xpath("//li[@class='error']").should('have.text',' Invalid credentials')
   cy.url().should('include','https://end-to-end-v1.onrender.com')
   
})

    




})