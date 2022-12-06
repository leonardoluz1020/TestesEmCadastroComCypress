describe('Teste no formulario de cadastro', () =>{
    beforeEach(() =>{
        cy.visit('./../src/index.html')
    })
    it('teste', () => {
        cy.get('#firstname').should('be.visible').type('Leonardo').should('have.value', 'Leonardo')
        cy.get('#lastname').should('be.visible').type('Oliveira').should('have.value','Oliveira')
        cy.get('#email').should('be.visible').type('leo@email.com').should('have.value', 'leo@email.com')
        cy.get('#number').should('be.visible').type('11972728484').should('have.value','11972728484')
        cy.get('#password').should('be.visible').type('Leoluz1020').should('have.value','Leoluz1020')
        // cy.get('#impri-force > span')
        cy.get('#confirmpassword').should('be.visible').type('Leoluz1020')
        cy.get('input[type="radio"]').should('have.length',4)
        cy.get('input[type="radio"][value="Masculino"').click().should('be.visible')
    })

})