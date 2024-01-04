import IndexPage from "../ui/pages/Index.page";

describe('[INDEX PAGE]', () => {

    const indexPage = new IndexPage();

    beforeEach(function () {
        indexPage.open();
    })

    it('[TC-SEARCH-1] The search input suggest list contains trending tickers', () => {
        indexPage
            .getSearchInitComponent()
            .getSearchInput()
            .click();

        indexPage
            .getSearchInitComponent()
            .getTrendingTicketsList()
            .find('div:nth-of-type(2)')
            .then(($tickerList) => {
                expect($tickerList).to.have.length(5)
            });
    });

    it('[TC-SEARCH-2] The search input suggest list contains expected symbols', () => {
        indexPage
            .getSearchInitComponent()
            .getSearchInput()
            .click()
            .type('AAPL');

        indexPage
            .getSearchInitComponent()
            .getSuggestSymbolList()
            .find('div div:first-child')
            .then(($suggestList) => {
                expect($suggestList[0].innerText).to.equal('AAPL');
            });
    });

})
