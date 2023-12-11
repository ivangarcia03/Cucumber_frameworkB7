const { Then } = require('@badeball/cypress-cucumber-preprocessor')
const NorthwesternPage = require('../../../pages/NorthwesternPage')

const northWesternPage = new NorthwesternPage()

Then(/^user should see below navbar items$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    northWesternPage.getNavbarItems().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })
    for (const el of arr){
        cy.log(el)
    }
})


// Then(/^user should fill the form$/, (dataTable) => {
// 	const inputs = dataTable.hashes()

//     inputs.forEach(input => {
//         cy.log(input)
//     })
// })


// Then(/^user should key-value$/, (dataTable) => {
//     const inputs = dataTable.rowsHash()

//     for(const key in inputs ){
//         cy.log(key)
//         cy.log(inputs[key])
//     }

// })


// Then(/^user should handle another type$/, (dataTable) => {
// 	const inputs = dataTable.hashes()

//     inputs.forEach(({label, input, section}) => {
//         cy.log(label)
//         cy.log(input)
//         cy.log(section)
//     })
// })