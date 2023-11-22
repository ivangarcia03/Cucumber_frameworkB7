const { Given, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')
const TGDynamicTablesPage = require('../../pages/TGDynamicTablesPage')

const tgHtmlElementsPage = new TGHtmlElementsPage()
const tgDynamicTablesPage = new TGDynamicTablesPage()

Given('user navigates to {string}', (url) => {
    cy.visit(url)
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