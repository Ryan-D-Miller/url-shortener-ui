describe('App', () => {
    beforeEach(() => {

    })
    it('Should have a title', () => {
        cy.loadStubs();
        cy.visit('http://localhost:3000/')
        cy.get('h1').should('have.text', 'URL Shortener')
    })
    it('Should have a shortened urlContainer', () => {
        cy.loadStubs();
        cy.visit('http://localhost:3000/')
        cy.get('.url').first().children().eq(0).should('have.text', 'Stubbed data')
    })
    it('should say something went wrong if an error is returned on get request', () => {
        cy.intercept('http://localhost:3001/api/v1/urls', {statusCode: 404, body: "cypress forced error"})
        cy.visit('http://localhost:3000/')
        cy.get('main').children().eq(1).should('have.text', "Something went Wrong")
    })    
})