const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {// This is required for the preprocessor to be able to generate JSON reports after each run
    setupNodeEvents: async (on, config) => {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args); // Print all current args
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          console.log('Adding Chrome flag: --disable-dev-shm-usage');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });

      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      return config;
    },
    specPattern: [
      "cypress/e2e/**/*.feature"
    ],
    stepDefinitions: 'cypress/e2e/support/step_definitions/'//step_definitions.js' // Add supportFile for e2e testing type
  },
  component: {
    specPattern: [
      "cypress/component/**/*.feature"
    ],
  },
  defaultCommandTimeout: 25000,
  animationDistanceThreshold: 1,
  waitForAnimations: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  numTestsKeptInMemory: 200,
  video: false,
  chromeWebSecurity: false,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
  // Mochawesome reporter configuration
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
  }
});
