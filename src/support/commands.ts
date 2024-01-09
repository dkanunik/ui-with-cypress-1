Cypress.Commands.add('setLocalStorage' as any, (key: string, value: string) => {
    cy.window().then(window => {
        window.localStorage.setItem(key, value);
    })
});

Cypress.Commands.add('getLocalStorage' as any, (key: string) => {
    cy.window().then(window => {
        window.localStorage.getItem(key);
    })
});
