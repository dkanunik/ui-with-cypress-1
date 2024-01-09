import {
    configure,
} from "@testing-library/dom";

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            setLocalStorage(key: string, value: string): Chainable<JQuery<HTMLElement>>
            getLocalStorage(key: string): Chainable<JQuery<HTMLElement>>
        }
    }
}

export { configure };
