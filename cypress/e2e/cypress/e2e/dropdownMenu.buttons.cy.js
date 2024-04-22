// Generate a timestamp for the current date and time
const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');


describe('Verify the availability and clickability of Drop Down Menu buttons', () => {
  it('Checks availability and clickability of buttons', () => {
    // Visit the website
    cy.visit('https://www.kriegerdigital.de/digitale-krieger/');

    // Click on the toggle button to expand the menu
    cy.get('#mega-menu-wrap-primary-menu').click();
    cy.log('Expande the toggle button');

    // Click on each button using CSS selectors
    cy.get('#mega-menu-item-141 > a')
      .click()  //click on Digital Hub
      .should('have.attr', 'href');
    cy.log('Digital Hub button is present and clicked');
    cy.screenshot(`Digital_Hub_${timestamp}`);

    cy.get('#mega-menu-item-140 > a')
      .click() //Click on Deine Karriere
      .should('have.attr', 'href');
    cy.log('Deine Karriere button is present and clicked');
    cy.screenshot(`Deine_Karriere_${timestamp}`);

    
    cy.get('#mega-menu-item-wpml-ls-2-de > a') 
      .should('be.visible')
      .click() //click on language switcher 
      .should('have.attr', 'href');
      cy.log('Language button is present and clicked');
      cy.screenshot(`Language_switcher_${timestamp}`)

      cy.log('End of Test Case Drop Down Menu buttons')
    
  });
});
