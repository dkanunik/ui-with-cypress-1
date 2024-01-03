import AbstractComponent from "../types/AbstractComponent";

class SearchInitComponent extends AbstractComponent{

    getSearchInput() {
        return cy.get('input#yfin-usr-qry');
    }

    getSearchButton() {
        return cy.get('button#header-desktop-search-button');
    }

    getTrendingTicketsList() {
        return cy.get('div[data-id="search-assist-input-recomlst"] ul li');
    }

    getSuggestSymbolList() {
        return cy.get('div[data-id="search-assist-input-sugglst"] ul li');
    }
}

export default SearchInitComponent;
