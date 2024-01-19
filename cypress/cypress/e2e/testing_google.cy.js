describe('Google home page testing', () => {
      it('verifying search functionality working', () => {
        // Testp Step
    // 1. Visiting page
           cy.visit('https://www.google.com')

    // 
            
        //  2. select or locate (find) search box
            cy.get("#APjFqb").type("cypress tutorial")
         //cy.get(".gLFyf")
        // cy.get('[jsname = "yZiJbe"]')
//   3. type in to search box

//   4. select or locate Google Search button
         // cy.get('.gNO89b')
         // cy.get('[value="Google Search"]')
         // cy.contains('Google Search')
             cy.contains('Google ፍለጋ').click()
//   5. click()

//   6. assertion
//      compere expect result (The search results page should be displayed with relevant results related to the entered query). with actual result
//         if it is the same our test pass
cy.url().should('include','cypress+tutorial')     
    })
it("veryfay xp",()=>{
    cy.visit("https://www.google.com/")          
    cy.xpath("//textarea[@id='APjFqb']").type("cypress test")
    cy.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']").click()


})


it.only("using testruner", ()=>{
    cy.visit("https://www.google.com/") 
    cy.get('#APjFqb').type("cypress tutorial")
    cy.get('.FPdoLc > center > .gNO89b').click({force:true})
})

})


    
    