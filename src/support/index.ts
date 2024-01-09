/// <reference types="Cypress" />

import '@shelex/cypress-allure-plugin';
import '@testing-library/cypress/add-commands';
import './commands';

beforeEach(function () {
    cy.intercept(/.+/, { resourceType: /xhr|fetch/ }, { log: false });
});
