const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I am on the Krieger Digital website", function () {
  cy.visit("https://www.kriegerdigital.de/digitale-krieger/");
});

When("I click on the toggle button to expand the menu", function () {
  cy.get("#mega-menu-wrap-primary-menu").click();
});

Then("I should see and click the {string} button", function (buttonName) {
  cy.get(`#mega-menu-item-${buttonName.toLowerCase().replace(/\s/g, "-")} > a`)
    .should("be.visible")
    .click()
    .should("have.attr", "href");
});

Then("I verify that the buttons are clickable", function () {
  cy.log("All buttons are clicked successfully");
});
