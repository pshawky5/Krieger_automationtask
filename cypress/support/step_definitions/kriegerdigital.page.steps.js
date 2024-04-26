import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Generate a timestamp for the current date and time
const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');

// Given step to navigate to the specified website
Given("I am on the {string} website", function (website) {
  cy.visit(`https://www.${website}.de/`);
});

// When step to click on the toggle button to expand the menu
When("I click on the toggle button to expand the menu", function () {
  cy.get('#mega-menu-wrap-primary-menu').click();
});

// Then step to verify the presence and clickability of a button
Then("I should see and click the {string} button", (buttonName) => {
  cy.get(`#mega-menu-item-${buttonName.toLowerCase().replace(/\s/g, "-")} > a`)
    .should("be.visible")
    .click()
    .should("have.attr", "href");
  cy.log(`Clicked on the ${buttonName} button`);
  cy.screenshot(`${buttonName}_${timestamp}`);
});

// Then step to verify the presence and clickability of a button in the language switcher
Then("I should see and click the {string} button in the language switcher", function (buttonName) {
  cy.get(`#mega-menu-item-wpml-ls-2-${buttonName.toLowerCase().replace(/\s/g, "-")} > a`)
    .should("be.visible")
    .click()
    .should("have.attr", "href");
  cy.log(`Clicked on the ${buttonName} button in the language switcher`);
  cy.screenshot(`${buttonName}_Language_switcher_${timestamp}`);
});

// Then step to verify the presence of the footer section
Then("I should see the footer section", function () {
  cy.get('footer').should('be.visible');
});