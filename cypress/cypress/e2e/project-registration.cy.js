describe('Testing Registration functinalty',()=>{
    it('Verify that the system validates the first name input correctly.',()=>{
         //1. visit
        cy.visit('https://end-to-end-v1.onrender.com/registration/')

        // 2. select element and 3. intract with element
        cy.get('#first_name').type('111@!')
        cy.get('#last_name').type('rose')
        cy.get('#username').type('roseuser')
        cy.get('#email').type('rose@gamil.com')
        cy.get('#phone').type('22222222')
        cy.get('#date_of_birth').type('1990-01-01')
        cy.get('#address').type('silver spring')
        cy.get('#password1').type('123password')
        cy.get('#confirm-password').type('123password')
        cy.get('#role').select('Administrator')
        cy.get(':nth-child(12) > input').click()
       
        // 4. assertion
        cy.xpath("//li[@class='my-list li']").should('have.text',' First name should only contain letters')
        cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
        
    })

    it('Verify that the system validates the last name input correctly.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/registration/')

       // 2. select element and 3. intract with element
       cy.get('#first_name').type('rose')
       cy.get('#last_name').type('234@!')
       cy.get('#username').type('roseuser')
       cy.get('#email').type('rose@gamil.com')
       cy.get('#phone').type('22222222')
       cy.get('#date_of_birth').type('1990-01-01')
       cy.get('#address').type('silver spring')
       cy.get('#password1').type('123password')
       cy.get('#confirm-password').type('123password')
       cy.get('#role').select('Administrator')
       cy.get(':nth-child(12) > input').click()
      
       // 4. assertion
       cy.xpath("//li[@class='my-list li']").should('have.text',' Last name should only contain letters')
       cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
       
   })
   
   it('Verify that the system validates the username input correctly.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/registration/')

   // 2. select element and 3. intract with element
   cy.get('#first_name').type('rose')
   cy.get('#last_name').type('workneh')
   cy.get('#username').type('roseuser3')
   cy.get('#email').type('rose@gamil.com')
   cy.get('#phone').type('22222222')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('silver spring')
   cy.get('#password1').type('123password')
   cy.get('#confirm-password').type('123password')
   cy.get('#role').select('Administrator')
   cy.get('input[value="Register"]').click()

   // 4. assertion
   cy.xpath("//li[@class='my-list li']").should('have.text',' Username should only contain letters')
   cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
})

it('Verify that the system validates the phone number input correctly.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/registration/')

   // 2. select element and 3. intract with element
   cy.get('#first_name').type('rose')
   cy.get('#last_name').type('workneh')
   cy.get('#username').type('roseuser')
   cy.get('#email').type('rose@gamil.com')
   cy.get('#phone').type('2222222222')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('silver spring')
   cy.get('#password1').type('123password')
   cy.get('#confirm-password').type('123password')
   cy.get('#role').select('Administrator')
   cy.get('input[value="Register"]').click()

   // 4. assertion
   //cy.xpath("//li[@class='my-list li']").should('have.text',' Phone number should be in the format: (123) 456-7890')
   cy.xpath("//li[@class='my-list li']").should('have.text',' Phone number should be in the format: (123) 456-7890')
   cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
})

it('Verify that the system checks for the uniqueness of the entered username.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/registration/')

   // 2. select element and 3. intract with element
   cy.get('#first_name').type('rose')
   cy.get('#last_name').type('workneh')
   cy.get('#username').type('rose')
   cy.get('#email').type('1234@ded.com')
   cy.get('#phone').type('+1234567890')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('silver spring')
   cy.get('#password1').type('123password')
   cy.get('#confirm-password').type('123password')
   cy.get('#role').select('Administrator')
   cy.get('input[value="Register"]').click()

   // 4. assertion
   
   cy.xpath("//li[@class='my-list li']").should('have.text',' Username already exists')
   cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
})

it('Verify that the system validates the password inputs correctly.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/registration/')

   // 2. select element and 3. intract with element
   cy.get('#first_name').type('rose')
   cy.get('#last_name').type('workneh')
   cy.get('#username').type('rose')
   cy.get('#email').type('1234@ded.com')
   cy.get('#phone').type('+1234567890')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('silver spring')
   cy.get('#password1').type('123password')
   cy.get('#confirm-password').type('1030password')
   cy.get('#role').select('Administrator')
   cy.get('input[value="Register"]').click()

   // 4. assertion
   
   cy.xpath("//li[@class='my-list li']").should('have.text',' Passwords do not match')
   cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
})

it('Verify that the system successfully creates a new user account when all input validations pass.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/registration/')

   // 2. select element and 3. intract with element
   cy.get('#first_name').type('rose')
   cy.get('#last_name').type('workneh')
   cy.get('#username').type('roseT')
   cy.get('#email').type('1234@dedT.com')
   cy.get('#phone').type('+1234567890')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('silver spring')
   cy.get('#password1').type('123password')
   cy.get('#confirm-password').type('123password')
   cy.get('#role').select('Administrator')
   cy.get('input[value="Register"]').click()

   // 4. assertion
   //li[@class='success']
   cy.xpath("//li[@class='success']").should('have.text',' User successfully created. Please login using username and password.')
   cy.url().should('include','https://end-to-end-v1.onrender.com/')
   
})




})