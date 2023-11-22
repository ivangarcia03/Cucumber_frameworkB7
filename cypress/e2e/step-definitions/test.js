const {Given} = require('@badeball/cypress-cucumber-preprocessor')

Given('user navigate to {string}', (url) =>{
    cy.visit(url)
})