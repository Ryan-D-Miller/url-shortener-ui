describe('App', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('http://localhost:3000/')
    })
    it('Should have a title', () => {
        cy.get('h1').should('have.text', 'URL Shortener')
    })
    it('Should have a shortened urlContainer', () => {
        cy.get('.url').first().children().eq(0).should('have.text', 'Awesome photo')
    })
})