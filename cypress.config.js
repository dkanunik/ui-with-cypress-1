const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'reports/allure-results/output.xml',
    toConsole: true,
  },

  e2e: {
    supportFile: 'src/support/index.ts',
    specPattern: 'src/tests/**/*.test.{js,jsx,ts,tsx}',
    fixturesFolder: 'src/fixtures',
    responseTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  chromeWebSecurity: false,
  projectId: 'eeyaid',
});
