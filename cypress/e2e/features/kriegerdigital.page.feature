Feature: Krieger Digital website

@TestCase_1
Scenario: Check availability and clickability of Dropdown menu buttons
    Given I am on the "Kriegerdigital.de" website
    When I click on the toggle button to expand the menu
    Then I should see and click the "Digital Hub" button
    And I should see and click the "Deine Karriere" button
    And I should see and click the "FAQs" button
    And I should see and click the "Jetzt bewerben!" button
    And I should see and click the "Deutsch" button in the language switcher

@TestCase_2
Scenario: Clicking 'Jetzt bewerben!' button opens new tab with career opportunities
    Given I am on the Krieger Digital website
    When I click on the toggle button to expand the menu
    Then I should see and click the "Jetzt bewerben!" button
    And a new tab with career opportunities should be opened
    And I should see and click the "Alle Stellenangebote" button on the new tab
    And the webpage should automatically scroll down to the section with available number of "aktuelle Stellenangebote"

@TestCase_3
Scenario: Verify Availability of Footer Links
    Given I am on the Krieger Digital website
    Then I should see the footer section
    And it should contain at least 5 links
    When I click on each footer link
    Then I should be navigated to the respective page or section
