import "@shelex/cypress-allure-plugin";

beforeEach(function () {
    cy.intercept(/.+/, { resourceType: /xhr|fetch/ }, { log: false });
});
