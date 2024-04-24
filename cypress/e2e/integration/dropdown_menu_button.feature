Feature: Verify the availability and clickability of dropdown menu buttons on the Krieger Digital website

  Background:
    Given I am on the "Krieger Digital website"

  @dropdown_menu
  Scenario: Check availability and clickability of Dropdown menu buttons
    When I click on the toggle button to expand the menu
    Then I should see and click the "Digital Hub" button
    And I should see and click the "Deine Karriere" button
    And I should see and click the "Language select" button