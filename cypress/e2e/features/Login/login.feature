Feature: Login

  Background:
    Given I navigate the homepage
    And I click the Login nav link
    When the login modal is open

  Scenario: Login as an admin
    When I fill the login form with username "admin" and password "admin"
    And I click the Login button
    Then I should see the user logged in as "admin"

  Scenario Outline: Login a user "<scenario>"
    And I fill the login form with username "<username>" and password "<password>"
    And I click the Login button
    Then I should see the alert login with the message "<message>"

    Examples:
      | scenario                      | username | password | message                               |
      | with valid credentials        | oxieva   | oxieva78 |                                       |
      | does not exist                | adminNon | password | User does not exist.                  |
      | with wrong username           | admin    | pasweerd | Wrong password.                       |
      | with invalid credentials      | adminNon | pasweerd | Wrong password.                       |


  Scenario: Logout as an admin
    When I fill the login form with username "admin" and password "admin"
    And I click the Login button
    Then I should see the user logged in as "admin"
    When I click the Logout button
    Then I should see the Login nav link
