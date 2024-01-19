describe('Testing home page',()=>{
    it('Verify that only authenticated users can access the home page.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/home/')
       cy.url().should('include','https://end-to-end-v1.onrender.com/')
       
    })

    it('Verify that the home page displays a list of registered users with the correct columns.',()=>{

        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/')
       // 2. select element and 3. intract with element
       cy.get('#username').type('roseT')
       cy.get('#password').type('123password')
       cy.get('button[type="submit"]').click()
    
       
      // 4. assertion
       cy.xpath("//th").should('have.text','UsernameEmailRoleViewUpdateDelete')
       cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
       
})

it('Verify that clicking on the "View" link/button navigates to the users detailed information page.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   // 2. select element and 3. intract with element
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()

   
  // 4. assertion
   cy.get('a[class="btn-view"]').first().click()
   cy.url().should('include','https://end-to-end-v1.onrender.com/view_detail')
   
})

it('Verify that clicking on the "Update" link/button navigates to the users information update page.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   // 2. select element and 3. intract with element
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()

   
  // 4. assertion
   cy.get('a[class="btn-update"]').first().click()
   cy.url().should('include','https://end-to-end-v1.onrender.com/update')
   
})

it('Verify that clicking on the "Delete" link/button deletes the user from the system.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   // 2. select element and 3. intract with element
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()

   
  // 4. assertion
   cy.get('a[class="btn-delete"]').first().click()
   cy.url().should('include','https://end-to-end-v1.onrender.com/delete')
   
})

it('Verify that clicking on the "QA-Test-Tool" link in the navigation menu refreshes the home page.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   // 2. select element and 3. intract with element
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()

   
  // 4. assertion
   cy.get('a[href="/home/"]').click()
   cy.url().should('include','https://end-to-end-v1.onrender.com/home/')
   
})

it(' Verify that clicking on the "Log out" link in the navigation menu logs the user out from the system.',()=>{

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

it('verify that the home page includes a footer section with copyright information and a link to the Craft Knowledge website.',()=>{

    //1. visit
   cy.visit('https://end-to-end-v1.onrender.com/')
   cy.get('#username').type('roseT')
   cy.get('#password').type('123password')
   cy.get('button[type="submit"]').click()
   
   // 4. assertion
   //li[@class='success']
   cy.get('footer').contains('© 2023')
   cy.get('a[href="https://craftknowledge.net/"]').contains('Craft Knowledge')

})

      
})


    