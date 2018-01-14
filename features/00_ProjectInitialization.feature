Feature: Project initialization (F0)
    In order to provide a flat leaning curve and reduce the intial setup costs for creating new modules
    As a frontend developer
    I want to run an init command which should create the basic structure of an component.

    Even though the scaffolder is not part of this repository (you can find it here: https://github.com/protopipe/generator-protopipe),
    these tests are verifying that both projects fit together.

    Background:
        Given NPM package 'yo' is installed globally
        And NPM package 'generator-protopipe' is installed globally

    Scenario: Creating simple folder structure (F0S1)
        Given I am in a fresh directory 'f0s1'
        When I run `yo protopipe examples --examples --componentType page`
        Then there should be a Gruntfile
        And there should be a package.json
        And there should be a bower.json
