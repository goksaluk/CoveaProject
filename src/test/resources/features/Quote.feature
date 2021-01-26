@quote
Feature: Covea Scenarios
  Background:
    Given the user is on the quote page

  Scenario: A invalid email address is entered
    When an invalid email address is entered
    Then an error is displayed
  Scenario: A valid email address is entered
    When a valid email address is entered
    Then no error is displayed
#  Scenario: Email address and confirm email address do not match
#    When a valid email address is entered
#    And a different valid confirm email address is entered
#    Then an error for email is displayed
#  Scenario: Email address and confirm email address match
#    When a valid email address is entered
#    And the same valid confirm email address is entered
#    Then no error for email is displayed
#  Scenario: A invalid date of birth is entered
#    When an invalid date of birth is entered
#    Then an error for date of birth is displayed
#  Scenario: Postcode lookup for valid postcode
#    When they complete the Your Details section
#    And enter a valid postcode and clicks find address
#    Then a list of addresses is shown
#  Scenario: Invalid account number and sort code combination
#    When they complete all sections above Direct Debit Details
#    And enter an invalid account number - sort code combination is entered
#    Then an error is displayed
#  Scenario: Quote form completed
#    When they complete all sections with valid information
#    And click continue
#    Then the summary page is displayed