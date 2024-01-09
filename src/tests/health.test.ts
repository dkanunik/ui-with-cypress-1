/// <reference types="Cypress" />

import IndexPage from "../ui/pages/IndexPage";
import {SearchDataType} from "types/data/SearchDataType";

describe('[HEALTH CHECK]', () => {

    it('[HEALTH-1] Check ENV variables', () => {
        expect(Cypress.env('FINANCE_BASE_HREF')).to.equal('https://finance.yahoo.com')
    });

    it('[HEALTH-2] Check endpoints', () => {
        cy.request('GET', Cypress.env('FINANCE_BASE_HREF')).then((response) => {
            expect(response.status).to.eq(200);
        });

        cy.then(() => {
            fetch(Cypress.env('FINANCE_BASE_HREF'))
                .then((response) => {
                    response.json();
                })
                .then((data) => {
                    console.log(data);
                })
        });
    });

    /**
     * Library connection: https://testing-library.com/docs/cypress-testing-library/
     * */
    it('[HEALTH-3] Check plugins attachment', () => {
        IndexPage.instance().open();
        cy.findByText('Finance Home').should("exist");
    });

    it('[HEALTH-4] Check fixtures', () => {
        const FXT_TITLE_FOR_SEARCH : string = 'search.fixture';
        let searchTestData:  SearchDataType;
        cy.fixture(FXT_TITLE_FOR_SEARCH).then(function (data) {
            searchTestData = data;
            cy.log(`[ENV-4 TEST]: fixtures have been loaded\n ${JSON.stringify(searchTestData)}`);
            expect(searchTestData).to.have.ownPropertyDescriptor('criteria');
        });
    });

    it('[HEALTH-5] Check fixtures', () => {
        let searchTestData:  SearchDataType;
        cy.fixture('search.fixture').then(function (data) {
            cy.log(`[ENV-4 TEST]: fixtures have been loaded\n ${JSON.stringify(searchTestData)}`);
            expect(data).to.have.ownPropertyDescriptor('criteria');
        });
    });

    it('[HEALTH-6] Check commands', () => {
        cy.setLocalStorage('test', 'test');
        cy.getLocalStorage('test');
    });
});
