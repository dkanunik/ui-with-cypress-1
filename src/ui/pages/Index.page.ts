import AbstractPage from "../types/AbstractPage";
import SearchInitComponent from "../components/search-init.component";

class IndexPage extends AbstractPage {

    private readonly _searchInitComponent : SearchInitComponent;

    constructor() {
        super();
        this._searchInitComponent = new SearchInitComponent();
    }

    open(): void {
        cy.visit('/');
    }

    getSearchInitComponent(): SearchInitComponent {
        return this._searchInitComponent;
    }
}

export default IndexPage;
