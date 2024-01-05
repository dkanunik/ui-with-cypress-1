import AbstractPage from "../types/ui/AbstractPage";
import SearchInitComponent from "../components/search/SearchInitComponent";

class IndexPage extends AbstractPage {

    private readonly _searchInitComponent : SearchInitComponent;

    private static _instance : IndexPage;

    private constructor() {
        super();
        this._searchInitComponent = new SearchInitComponent();
    }

    static instance(): IndexPage {
        if (this._instance === undefined) {
            this._instance = new IndexPage();
        }
        return this._instance;
    }

    open(): void {
        cy.visit('/');
    }

    getSearchInitComponent(): SearchInitComponent {
        return this._searchInitComponent;
    }
}

export default IndexPage;
