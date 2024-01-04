import AbstractComponent from "../types/AbstractComponent";
import {TIMEOUT_30_SECONDS} from "../../utils/waits/timeouts";

class SearchInitComponent extends AbstractComponent {

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
        return cy.get('div[data-id="search-assist-input-sugglst"] ul li', {timeout: TIMEOUT_30_SECONDS});
    }
}

export default SearchInitComponent;
