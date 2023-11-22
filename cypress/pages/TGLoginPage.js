const TGBasePage = require('./TGBasePage')

class TGLoginPage extends TGBasePage {

    getUsername(){
        return cy.get('#username')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getErrorMessage(){
        return cy.get('#error_message')
    }

    clickLoginButton(){
        this.getLoginButton().click()
    }

    login(username, password){
        this.getUsername().type(username)
        this.getPassword().type(password)
    }
}

module.exports = TGLoginPage