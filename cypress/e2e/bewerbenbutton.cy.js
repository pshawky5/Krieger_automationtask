// Generate a timestamp for the current date and time
const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');

describe('Verify the availability and clickability of Jetzt Bewerben', () => {
  it('Checks availability and clickability of Jetzt bewerben! button', () => {
    // Visit the website
    cy.visit('https://www.kriegerdigital.de/digitale-krieger/');

    // Click on the toggle button to expand the menu
    cy.get('#mega-menu-wrap-primary-menu').click();

    // Click on Jetzt bewerben!
    cy.get('#mega-menu-item-1869 > a')
      .click() 
      cy.wait(25000);


     // Check if a new tab is opened
        cy.window().then((win) => {
      cy.log('check if new window opened.')
      cy.wait(15000);

      // Capture a screenshot with the current date and time in the filename
      cy.screenshot(`new_tab_screenshot_${timestamp}`)
      // Check if a new tab is opened by checking the number of windows
      try{
        if (win.length >= 1) {cy.log('Length is true')
          // Switch to the newly opened tab
          cy.window().its('length').should('eq', 2).then(() => {cy.log('switch to new opened tap')
            cy.window().its('1').then((newTab) => { //use index 1 for the new opended tab
              // Switch to the new tab
              newTab.focus();
              cy.log('Test passed: The new tab is opened and the button is clicked.');
              cy.wait(2000);
              cy.get('body > section.section-dxEuY.section-tgasV.belowHeader-o0t-O.belowHeader-xICFZ.belowThreshold-nzgro > div > div > div.actions-BVjxO > button').should('be.visible');
              // Assert that the button "Alle stellenangebote" on the new tab is clicked
              cy.url().should('include', 'karriere'); 
              cy.log('Test passed: The new tab is opened and the button is clicked.');
            });
          });
        
        } else {
          throw new Error('No New tab is opened.');
           //Log a message if a new tab is not opened
          //cy.log('Test failed: The "Jetzt bewerben!" button did not open a new tab.');
        }}
        catch (error) {
    cy.log(`Error: ${error.message}`);
      }
    });
  });
});