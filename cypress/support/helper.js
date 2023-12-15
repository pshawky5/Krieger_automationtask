import {DEFAULT_TIMEOUT, LOCATOR_TYPES} from './constants.js';

cy.helper = {};
cy.helper.goto = (pageDescription) => {
    const pageUrl = cy.pageMap.getPageUrl(pageDescription);
    cy.visit(pageUrl);
    cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentuuid = null;
};

cy.helper.verifyPage = (pageDescription) => {
    const regexp = cy.pageMap.getPageRegExp(pageDescription);

    if(regexp) {
        cy.url().should('match', new RegExp(regexp));
    } else {
        const url = cy.pageMap.getPageUrl(pageDescription);
        cy.url().should("contain", url);
    }

    cy.log(`I'm on the ${pageDescription}`);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPageByDescription(pageDescription);
};

cy.helper.invokeText = (selectorIdentifier, attribute) => {
    cy.helper.getElement(selectorIdentifier).invoke("text", attribute);
};

cy.helper.getFixture = (subFolder, fixtureFile) => {
    return cy.fixture(subFolder+"/"+fixtureFile);
};

cy.helper.getElement = (selectorIdentifier,parameter) => {
    const selectorObject = cy.scope?.currentPageObject?.selectors[selectorIdentifier];
    if (selectorObject === undefined) {
        cy.logger.log(
            "Error",
            `No element found for selectorIdentifier [${selectorIdentifier}]. returning undefined`,
        );
        return undefined;
    }
    return selectorObject(parameter);
};

//---------------------------------------

/**
 * This function needs to be fine-tuned in the future
 * @param text
 * @returns {*}
 */
cy.helper.stringIncludesRegularExpression = (text) => {
    return text.includes(".*");
};

;cy.helper.getDateInSeconds = () => {
    return Math.floor(Date.now() / 1000);
};
cy.helper.getDate = (date) => {
    date=date.substring(0, 10)
    let day = date.replaceAll(".", "-").substring(0, 2);
    let month = date.replaceAll(".", "-").substring(3, 5);
    let year = date.replaceAll(".", "-").substring(6, 10);
    let dateFormat = year + "-" + month + "-" + day;
    return Date.parse(dateFormat);
};