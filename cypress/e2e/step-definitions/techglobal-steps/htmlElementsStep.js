const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../../pages/TGHtmlElementsPage')


const tgHtmlElementsPage = new TGHtmlElementsPage()



When('user click on the {string} card', (cardName) => {
    cy.contains(cardName).click()
})


Then('user should see the {string} page heading', (headingText) => {
    tgHtmlElementsPage.getHeading().should('have.text', headingText)
})


Then('the URL should contain {string}', (url) => {
    cy.url().should('contain', url)
})


Then('the text under it should be {string}', (message) => {
    tgHtmlElementsPage.getButtonMessage().should('have.text', message)
})


When(/^user select "([^"]*)" from the first dropdown menu$/, (dropdownOption) => {
    tgHtmlElementsPage.getFirstDropdown().select(dropdownOption)
})

When(/^user select "([^"]*)" from the second dropdown menu$/, (dropdownOption) => {
    tgHtmlElementsPage.getSecondDropdown().select(dropdownOption)

})

Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (value) => {
    tgHtmlElementsPage.getFirstDropdown().should('have.value', value)
})

Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (value) => {
    tgHtmlElementsPage.getSecondDropdown().should('have.value', value)
})


When(/^user enter "([^"]*)" into the first text input field$/, (input) => {
    tgHtmlElementsPage.getTextInputOne().type(input)
})

When(/^user enter "([^"]*)" into the second text input field$/, (input) => {
    tgHtmlElementsPage.getTextInputTwo().type(input)

})

Then(/^the first text input field should contain "([^"]*)"$/, (value) => {
    tgHtmlElementsPage.getTextInputOne().should('have.value', value)

})

Then(/^the second text input field should contain "([^"]*)"$/, (value) => {
    tgHtmlElementsPage.getTextInputTwo().should('have.value', value)
})


When(/^user select the "([^"]*)" checkbox$/, (checkbox) => {
    tgHtmlElementsPage.getCheckboxByLabel(checkbox).check()
})

When(/^user deselect the "([^"]*)" checkbox$/, (checkbox) => {
    tgHtmlElementsPage.getCheckboxByLabel(checkbox).uncheck()
})


Then(/^the "([^"]*)" checkbox should not be checked$/, (checkbox) => {
    tgHtmlElementsPage.getCheckboxByLabel(checkbox).should('not.be.checked')
})


When(/^user select the "([^"]*)" and "([^"]*)" checkboxes$/, (checkbox1, checkbox2) => {
    tgHtmlElementsPage.getCheckboxByLabel(checkbox1).check()
    tgHtmlElementsPage.getCheckboxByLabel(checkbox2).check()
})


Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, (checkbox1, checkbox2) => {
	tgHtmlElementsPage.getCheckboxByLabel(checkbox1).should('be.checked')
    tgHtmlElementsPage.getCheckboxByLabel(checkbox2).should('be.checked')
})


Then(/^the "([^"]*)" checkbox remains unchecked$/, (checkbox) => {
    tgHtmlElementsPage.getCheckboxByLabel(checkbox).should('not.be.checked')
})