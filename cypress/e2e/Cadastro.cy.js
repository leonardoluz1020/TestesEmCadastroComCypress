describe('Teste no formulario de cadastro', () => {
    beforeEach(() => {
        cy.visit('./../src/index.html')
    })
    it('Preenchendo cadastro com sucesso', () => {
        cy.get('#firstname').should('be.visible').type('Leonardo').should('have.value', 'Leonardo')
        cy.get('#lastname').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
        cy.get('#email').should('be.visible').type('leo@email.com').should('have.value', 'leo@email.com')
        cy.get('#number').should('be.visible').type('11972728484').should('have.value', '11972728484')
        cy.get('#password').should('be.visible').type('Leoluz1020').should('have.value', 'Leoluz1020')
        cy.get('#confirmpassword').should('be.visible').type('Leoluz1020')
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"][value="Masculino"').click().should('be.visible')
        cy.get('#btn-continue-button > button > a').click()
        cy.get('#firstname').should('have.value', '')
    })
    it('Preenchendo cadastro faltando nome', () => {
        cy.get('#firstname').should('be.visible').should('have.value', '')
        cy.get('#lastname').should('be.visible').type('Oliveira').should('have.value', 'Oliveira')
        cy.get('#email').should('be.visible').type('leo@email.com').should('have.value', 'leo@email.com')
        cy.get('#number').should('be.visible').type('1199558844').should('have.value', '1199558844')
        cy.get('#password').should('be.visible').type('Corinthians2012').should('have.value', 'Corinthians2012')
        cy.get('#confirmpassword').should('be.visible').type("Corinthians2012").should('have.value', 'Corinthians2012')
        cy.get('input[type="radio"][value="Masculino"]').check().should('be.checked')
        cy.get('#btn-continue-button > button > a').should('be.visible').click()
        cy.contains('span','Digite seu nome').should('have.css','text-decoration','none solid rgb(255, 0, 0)')
    })
    it('Prenchendo cadastri faltando sobre nome', () =>{
        cy.get('#firstname').should('be.visible').type('Luana').should('have.value','Luana')
        cy.get('#lastname').should('be.visible').should('have.value','')
        cy.get('#email').type('luna@email.com').should('have.value', 'luna@email.com')
        cy.get('#number').should('be.visible').type('115544499955').should('have.value','115544499955')
        cy.get('#password').should('be.visible').type('TeaWithCoffe23').should('have.value','TeaWithCoffe23')
        cy.get('#confirmpassword').should('be.visible').type('TeaWithCoffe23').should('have.value','TeaWithCoffe23')
        cy.get('input[type="radio"][value="Feminino"]').check().should('be.checked')
        cy.get('#btn-continue-button > button > a').should('be.visible').click()
        cy.contains('span','Digite seu sobrenome').should('have.css','text-decoration','none solid rgb(255, 0, 0)')
    })
})