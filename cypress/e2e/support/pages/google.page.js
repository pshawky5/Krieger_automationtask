const Page = require('./Page');

class GooglePage extends Page {

    get path () { return `https://www.google.de/?hl=en-GB` };

    //page selectors
    selectors = {
        'search input field': () => { return cy.get('[name="q"]')},
        'result stats text': () => { return cy.get('div[id="result-stats"]')},
        'cookie popup title': () => { return cy.get('h1').filter(":contains('Before you continue to Google')")},
        'cookie accept button': () => { return cy.xpath('//div[text()="Accept all"]')}
    }
}

module.exports = new GooglePage();