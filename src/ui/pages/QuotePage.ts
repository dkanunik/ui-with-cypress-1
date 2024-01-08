import AbstractPage from "../types/ui/AbstractPage";
import SearchInitComponent from "../components/search/SearchInitComponent";
import QuoteHeaderComponent from "../components/quote/QuoteHeaderComponent";

class QuotePage extends AbstractPage {

    private readonly _searchInitComponent : SearchInitComponent;
    private readonly _quoteHeaderComponent : QuoteHeaderComponent;

    private static _instance : QuotePage;

    private constructor() {
        super();
        this._searchInitComponent = new SearchInitComponent();
        this._quoteHeaderComponent = new QuoteHeaderComponent();
    }

    static instance(): QuotePage {
        if (this._instance === undefined) {
            this._instance = new QuotePage();
        }
        return this._instance;
    }

    open(): void {
        cy.visit(Cypress.env('FINANCE_BASE_HREF'));
    }

    getSearchInitComponent(): SearchInitComponent {
        return this._searchInitComponent;
    }

    getQuoteHeaderComponent(): QuoteHeaderComponent {
        return this._quoteHeaderComponent;
    }
}

export default QuotePage;
