import IndexPage from "../ui/pages/IndexPage";

describe('[HEALTH CHECK]', () => {

    it('[ENV-1] Check ENV variables', () => {
        expect(Cypress.env('FINANCE_BASE_HREF')).to.equal('https://finance.yahoo.com')
    });

    it('[ENV-2] Check endpoints', () => {
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
    it('[ENV-3] Check UI readiness', () => {
        IndexPage.instance().open();
        cy.findByText('Finance Home').should("exist");
    });
});
