import AbstractComponent from "../../types/ui/AbstractComponent";

class QuoteHeaderComponent extends AbstractComponent {

    private readonly SEL_QUOTE_BLOCK: string = 'div#quote-header-info';

    getCompanyTitle()  {
        return cy.get(`${this.SEL_QUOTE_BLOCK} h1`);
    }

    getRegularMarketPriceValue() {
        return cy.get(`${this.SEL_QUOTE_BLOCK} div *[data-test="qsp-price"][data-field="regularMarketPrice"]`);
    }

}

export default QuoteHeaderComponent;
