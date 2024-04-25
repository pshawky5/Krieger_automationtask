import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the {string}', (url) => {
  // visit krieger digital website
  console.log('Visiting URL:', url); // Log the URL being visited
  cy.visit('https://www.kriegerdigital.de/');
});
