const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')


When('user search for {string}', (search) => {
    cy.get('[name="q"]').type(search + '{enter}')
})

Then('user should see {string} in the URL', (url) => {
    cy.url().should('include', url)
})

Then('user should see {string} in the title', (title) => {
    cy.title().should('include', title)
})