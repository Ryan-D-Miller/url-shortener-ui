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
    it('Should submit the form and see a new Card be added to the dom', () => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
            statusCode: 201,
            body: {
                "title": "newUrl",
                "long_url": "http://ImanewLongURL.com/withtomuchinformation",
                "id": 2,
                "short_url": "http://shortUrl.com/2"
            }
        })
        cy.get('input[name="title"]')
            .type("newUrl")
        cy.get('input[name="long_url"]')
            .type("http://ImanewLongURL.com/withtomuchinformation")
        cy.get('button').click()
        cy.get('.url').eq(1).contains('newUrl')
    })
})