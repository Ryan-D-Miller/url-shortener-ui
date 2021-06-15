describe('Form', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('http://localhost:3000/')
    })
    it('Should bee able to select and fill out the form and see the updated information', () => {
        cy.get('input[name="title"]')
            .type("newUrl")
            .should('have.value', 'newUrl')
        cy.get('input[name="long_url"]')
            .type("http://ImanewLongURL.com/withtomuchinformation")
            .should('have.value', "http://ImanewLongURL.com/withtomuchinformation")
    })
    it('Should be able to submit information to the form and see see that the fields are emptied', () => {
        cy.get('input[name="title"]')
            .type("newUrl")
        cy.get('input[name="long_url"]')
            .type("http://ImanewLongURL.com/withtomuchinformation")
        cy.get('button').click()
        cy.get('input[name="title"]').should('have.value', '')
        cy.get('input[name="long_url"]').should('have.value', '')
    })
    it('Should')
})