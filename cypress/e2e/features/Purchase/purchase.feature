Feature: Purchase

  Background:
    Given I am on the home page

  Scenario: Complete purchase process with two items
    When I add the following items to the cart:
      | category | item          |
      | Laptops  | Sony vaio i5  |
      | Phones   | Samsung galaxy s6 |
    And I go to the cart
    Then I should see the total price as "1150"
    When I place the order with the following details:
      | name      | country | city    | creditCard | month | year |
      | John Doe  | USA     | New York | 1234567890 | 12    | 2024 |
    Then I should see the confirmation message
    And I return to the cart
    And my cart should be empty 
