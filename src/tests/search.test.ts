
import {SearchSteps} from "../steps/SearchSteps";
import IndexPage from "../ui/pages/IndexPage";
import QuotePage from "../ui/pages/QuotePage";

describe.skip('[SEARCH]', () => {

    beforeEach(function () {
        IndexPage.instance().open();
    });

    it('[TC-SEARCH-1] The search input suggest list contains trending tickers', () => {
        IndexPage.instance()
            .getSearchInitComponent()
            .getSearchInput()
            .click();

        IndexPage.instance()
            .getSearchInitComponent()
            .getTrendingTicketsItemsList()
            .then(($tickerList) => {
                expect($tickerList).to.have.length(5)
            });
    });

    it('[TC-SEARCH-2] The search input suggest list contains expected symbols', () => {
        IndexPage.instance()
            .getSearchInitComponent()
            .getSearchInput()
            .click()
            .type('AAPL');

        IndexPage.instance()
            .getSearchInitComponent()
            .getSuggestSymbolItemsList()
            .then(($suggestList) => {
                expect($suggestList[0].innerText).to.equal('AAPL');
            });
    });

    it('[TC-SEARCH-3] The quote page header contains required data', () => {
        SearchSteps.searchQuoteBy('AAPL');

        QuotePage.instance()
            .getQuoteHeaderComponent()
            .getCompanyTitle()
            .then(($companyTitle) => {
                expect($companyTitle[0].innerText).to.equal('Apple Inc. (AAPL)');
            });

        QuotePage.instance()
            .getQuoteHeaderComponent()
            .getRegularMarketPriceValue()
            .then(($companyTitle) => {
                expect(Number($companyTitle[0].innerText)).to.be.greaterThan(0);
            });
    });
});
