import "@shelex/cypress-allure-plugin";

before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});
