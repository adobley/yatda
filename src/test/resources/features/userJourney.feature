Feature: User Journey Flow

  Scenario: ToDo page
    When I am on the ToDo Page
    Then I see the ToDo title

    When I write a ToDo to "Buy Cheetos"
    And I click the add button
#    Then I see "Buy Cheetos" in the list

