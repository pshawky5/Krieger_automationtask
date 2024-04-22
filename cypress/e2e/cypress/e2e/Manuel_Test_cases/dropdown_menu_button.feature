Feature: Verify the availability and clickability of dropdown menu buttons on the Krieger Digital website

  Scenario: Check availability and clickability of Dropdown menu buttons
    Given I am on the Krieger Digital website
    Then I should see the following buttons:
      | Digital Hub     |
      | Deine Karriere  |
      | Language select |
    When I click on each button
    Then each button should be clickable