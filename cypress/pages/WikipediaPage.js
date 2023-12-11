class WikipediaPage {

    // Locators
    getSearchInput(){
        return cy.get('#searchInput')
    }

    getFirstHeading(){
        return cy.get('#firstHeading')
    }

    languages(){
        return cy.get('.central-featured strong')
    }


    // Methods
    searchInput(searchInput){
        this.getSearchInput().type(searchInput + '{enter}')
    }


}

module.exports = WikipediaPage