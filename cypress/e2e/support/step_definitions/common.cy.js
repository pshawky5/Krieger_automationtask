import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WildCard from "../objects/wildcard";
import {WILD_CARDS} from "../constants";
//import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given("I am on the {string} website", function (website) {
  cy.visit(`https://www.${website}.de/digitale-krieger/`);
});
When(/^I go to the "(.* page)"$/, function(pageDescription) {
    cy.helper.goto(pageDescription);
});

Then(/^The "(tab title)" is in "(.*)"$/, function (element, language) {
    const expectedValue = cy.localization.getLocalizationStringWithWildCards(cy.scope.currentPage, language, element, [new WildCard(WILD_CARDS.ELEMENT_TEXT, Cypress.env('envName'))]);
    cy.logger.log("Info", `tab title should be [${expectedValue}]`);
    cy.title().should('eq', expectedValue );
});

When(/^I click the "(.* button|.* input field|.* mask|.* link)"$/, function(selectorIdentifier) {
    cy.helper.getElement(selectorIdentifier).click();
});

When(/^I type "(.*)" into the "(.* input field|.* mask|.* dropdown)"?$/, function (text, selectorIdentifier) {
    cy.helper.getElement(selectorIdentifier).type(text+"{enter}");
});

When(/^I am on the "(.* page)"$/, function (pageDescription) {
    const url = cy.pageMap.getPageUrl(pageDescription);
    cy.url().should('contain', url);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
});

Given(/^The website language is "(.*)"$/, function (language) {
    cy.scope.websiteLanguage = language;
});

Then(/^I see(?: the| a) "(.*)"( by scrolling)?$/, function (pageElement, scrollTo) {
    console.log(`searching for element with identifier ${pageElement}`);
    if(scrollTo)
        cy.helper.getElement(pageElement).scrollIntoView().should('be.visible');
    else
        cy.helper.getElement(pageElement).should('be.visible');
});

Then(/^I see that the url matches the "(.*)" url$/, function(pageDescription) {
    cy.url().should('match', cy.pageMap.getPageRegExp(pageDescription));
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
});
