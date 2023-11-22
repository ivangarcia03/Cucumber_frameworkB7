const TGBasePage = require('./TGBasePage')

class TGHtmlElementsPage extends TGBasePage {
    getButtons() {
        return cy.get('#register_button, #signin_button')
    }

    getButtonMessage() {
        return cy.get('.is-block')
    }

    getFirstDropdown() {
        return cy.get('#company_dropdown1')
    }

    getSecondDropdown() {
        return cy.get('#company_dropdown2')
    }

    getTextInputOne() {
        return cy.get('#text_input1')
    }

    getTextInputTwo() {
        return cy.get('#text_input2')
    }

    // getAppleCheckbox() {
    //     return cy.get('#checkbox_1')
    // }

    // getMicrosoftCheckbox() {
    //     return cy.get('#checkbox_2')
    // }

    // getTeslaCheckbox() {
    //     return cy.get('#checkbox_3')
    // }

    // getCheckboxByLabel(label) {
    //     switch (label) {
    //         case 'Apple':
    //             return this.getAppleCheckbox()
    //         case 'Microsoft':
    //             return this.getMicrosoftCheckbox()
    //         case 'Tesla':
    //             return this.getTeslaCheckbox()
    //         default:
    //             throw new Error(label + ' not found')
    //     }
    // }

    checkboxes = {
        'Apple': '#checkbox_1',
        'Microsoft': '#checkbox_2',
        'Tesla': '#checkbox_3'
    }

    getCheckboxByLabel(label){
        return cy.get(this.checkboxes[label])
    }

    clickButtonByText(buttonName) {
        this.getButtons().contains(buttonName).click()
    }


}

module.exports = TGHtmlElementsPage