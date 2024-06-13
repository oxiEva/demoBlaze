Feature: Category

  Background:
    Given I am on the inventory page

  Scenario Outline: Filter items by "<category>"
    When I filter by category "<category>"
    Then I should see only items from category "<category>"

    Examples:
      | category   |
      | Laptops    |
      | Phones     |
      | Monitors   |

  Scenario: Redirect to item description page
    When I select the item "Sony vaio i5"
    Then I should be redirected to the description page of "Sony vaio i5"
