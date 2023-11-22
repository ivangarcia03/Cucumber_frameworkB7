class WikipediaPage {

    getSearchInput(){
        return cy.get('#searchInput')
    }

    getFirstHeading(){
        return cy.get('#firstHeading')
    }

    searchInput(searchInput){
        this.getSearchInput().type(searchInput + '{enter}')
    }
}

module.exports = WikipediaPage