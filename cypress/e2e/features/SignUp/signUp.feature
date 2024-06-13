Feature: Sign Up

 Background:
    Given I visit the home page
    And I click the Sign up nav link
    When I see the modal is open

  Scenario: Create a new user 
    And I fill the form with username "m9tp*" and password "password"
    And I click the Sign Up button 
    Then I should see the alert with the message "Sign up successful."
    And I click the OK button
    And I should see the homepage

  Scenario Outline: Create a new user with "<scenario>"
    And I fill the form with username "<username>" and password "<password>"
    And I click the Sign Up button
    Then I should see the alert with the message "<message>"

    Examples:
      | scenario                      | username | password | message                               |
      | User already exists           | testUser | password | This user already exist.              |
      | Missing username              |          | password | Please fill out Username and Password.|
      | Missing password              | testuser |          | Please fill out Username and Password.|
      | Missing username and password |          |          | Please fill out Username and Password.|
