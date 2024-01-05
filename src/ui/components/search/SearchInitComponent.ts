import {TIMEOUT_30_SECONDS} from "../../../utils/waits/timeouts";
import AbstractComponent from "../../types/ui/AbstractComponent";

class SearchInitComponent extends AbstractComponent {

    getSearchInput() {
        return cy.get('input#yfin-usr-qry');
    }

    getSearchButton() {
        return cy.get('button#header-desktop-search-button');
    }

    getTrendingTicketsItemsList() {
        return cy.get(`div[data-id="search-assist-input-recomlst"] ul li`);
    }

    getSuggestSymbolItemsList() {
        return cy.get(`div[data-id="search-assist-input-sugglst"] ul li div div:first-child`, {timeout: TIMEOUT_30_SECONDS});
    }
}

export default SearchInitComponent;
