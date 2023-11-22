const TGBasePage = require('./TGBasePage')

class TGDynamicTablesPage extends TGBasePage {

    getAddProductButton(){
        return cy.get('#add_product_btn')
    }

    getModalCard(){
        return cy.get('.modal-card')
    }

    getCloseButton(){
        return cy.get('.delete')
    }

    clickAddProductButton(){
        this.getAddProductButton().click()
    }

    clickCloseProductButton(){
        this.getCloseButton().click()
    }
}

module.exports = TGDynamicTablesPage