const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')
const TGDynamicTablesPage = require('../../pages/TGDynamicTablesPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()
const tgDynamicTablesPage = new TGDynamicTablesPage()

Given('user navigates to {string}', (url) => {
    cy.visit(url)
})

Then('user should see {string} in the URL', (url) => {
    // Elon Musk
    // "Elon Musk".split(' ')

    // ["Elon", "Musk"]

    for(const word of url.split(' ')){
        cy.url().should('include', word)
    }
    
})

Then('user should see {string} in the title', (title) => {
    cy.title().should('include', title)
})

When('user click on the {string} button', (button) => {
    switch (button) {
        case 'Register':
        case 'Sign in':
            tgHtmlElementsPage.clickButtonByText(button)
            break
        case 'ADD PRODUCT':
            tgDynamicTablesPage.clickAddProductButton()
            break
        case 'CLOSE':
            tgDynamicTablesPage.clickCloseProductButton()
            break
        default:
    }
})