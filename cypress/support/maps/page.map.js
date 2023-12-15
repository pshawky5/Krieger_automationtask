/**
 *
 * this class is forwarding the correct page object model or representive variables of it
 * based on the page description provided over the gherkin bdd definition
 * @author Marco Bierbach
 */

import {WILD_CARDS} from '../constants.js';
import WildCard from '../objects/wildcard.js';

const GooglePage = require("../pages/google.page");

cy.pageMap = {};

const PAGEMAP = {
    'google page': GooglePage
}

cy.pageMap.getPageByDescription = (pageDescription) => {
    if( PAGEMAP[pageDescription] === undefined ) {
        cy.logger.log("INFO", `Pagemap does not contain a definition for [${pageDescription}].`);
    }
    return PAGEMAP[pageDescription];
}

cy.pageMap.getPageUrl = (pageDescription) => {
    let pageUrl = cy.pageMap.getPageByDescription(pageDescription)?.path;
    if(pageUrl === undefined)
        return null;

    if (pageUrl.includes("<")) {
        pageUrl = cy.pageMap.replaceWildCard(pageUrl, new WildCard(WILD_CARDS.LANG_CODE, cy.localization.getLangCode()))
    }
    return pageUrl;
};

/**
 * Function to replace a wildcard inside a URL
 * DO NOT USE THIS FOR LOCATORS/SELECTORS
 */
cy.pageMap.replaceWildCard = (text , wildCard) => {
    if (wildCard.value === undefined) {
        cy.logger.log(
            "Error",
            `Value is undefined, so we can not replace anything in the text [${text}] with wildcard [${wildCard.wildCard}]`,
        );
    }
    console.log(`Going to replace ${wildCard.wildCard} with ${wildCard.value}`);
    return text.replace(wildCard.wildCard, wildCard.value);
}

cy.pageMap.replaceWildCards = (text, wildCards ) => {
    let modifiedText;
    wildCards.forEach((wildCard) => {
        modifiedText = cy.pageMap.replaceWildCard(wildCard.wildCard, wildCard.value);
    });
    return modifiedText;
}

cy.pageMap.getPageRegExp = (pageDescription) => {
    return cy.pageMap.getPageByDescription(pageDescription).regexp;
}
