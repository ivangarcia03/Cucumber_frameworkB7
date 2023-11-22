const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const WikipediaPage = require('../../../pages/WikipediaPage')


const wikipediaPage = new WikipediaPage()

When(/^user search for "([^"]*)" on Wikipedia$/, (input) => {
	wikipediaPage.searchInput(input)
})


Then(/^user should see "([^"]*)" in the first heading$/, (headingText) => {
	wikipediaPage.getFirstHeading().should('have.text' ,headingText)
})