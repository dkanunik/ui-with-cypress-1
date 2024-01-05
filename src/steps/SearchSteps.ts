import IndexPage from "../ui/pages/IndexPage";

export class SearchSteps {

    static initSearchBy(searchCriteria: string) {
        IndexPage.instance()
            .getSearchInitComponent()
            .getSearchInput()
            .click()
            .type(searchCriteria);
    }

    static searchQuoteBy(searchCriteria: string) {
        SearchSteps.initSearchBy(searchCriteria);
        IndexPage.instance()
            .getSearchInitComponent()
            .getSearchButton()
            .click();
    }
}
