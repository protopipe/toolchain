Feature: Assembling Handlebars (F1)
    As a Frontend Developer
    I want be able to add Handlebars partials and helpers to my components
    In order to use a Templatelanguage which is renderable in the front- and backend.

    Scenario: A simple Page Component without any Subcomponents or partials. (F1S1)
    Given I am in a fresh directory 'f1s1'
    And I ran `yo protopipe simplePage --cli --componentType page`#TODO
    And created a file `src/templates/index.hbs` with content:
    """
    Hello World
    """
    When I start the webpack-dev-server
    And I visit "http://localhost:3000"
    Then I should see "Hello World" in my browser
