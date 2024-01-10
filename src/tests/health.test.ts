/// <reference types="Cypress" />

import IndexPage from "../ui/pages/IndexPage";
import {SearchDataType} from "types/data/SearchDataType";
import {TIMEOUT_10_SECONDS} from "../utils/waits/timeouts";

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

    /**
     * Event list: https://docs.cypress.io/api/cypress-api/catalog-of-events
     * */
    it('[HEALTH-7] Check alerts obtaining', () => {
        cy.on('window:alert',  (message) => {
            cy.log(`[HEALTH-7] ${message}`);
        })
    });

    it('[HEALTH-8] Check domains switching', () => {
        cy.visit('https://www.yahoo.com/everything/');
        cy.get('a[href="https://www.cashay.com/"]').click();
        cy.origin('https://www.cashay.com/', () => {
            cy.url().should('contain', 'cashay');
            cy.get('div#mrt-node-Nav-0-Navbar')
                .should('be.visible');
        });
    });

    /**
     * Event list: https://docs.cypress.io/api/cypress-api/catalog-of-events
     * Node module for work with ifames: https://www.npmjs.com/package/cypress-iframe
     * */
    it('[HEALTH-9] Check the player loading in the iframe', () => {
        cy.on("uncaught:exception", (e, runnable) => {
            console.log("error", e);
            console.log("runnable", runnable);
            return false;
        });

        cy.visit('https://finance.yahoo.com/');
        cy.iframe('div.evp-player iframe')
            .find('div#pframe-player-container')
            .should('be.visible');

    });

    it('[HEALTH-10] Update the global timeout on the fly', () => {
        Cypress.config('defaultCommandTimeout', TIMEOUT_10_SECONDS);
    });
});
