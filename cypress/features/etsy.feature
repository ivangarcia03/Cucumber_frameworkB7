Feature: Wiki search functionality

    Scenario: Validate wiki search
        Given user navigates to "https://www.wikipedia.org/"
        When user search for "Tesla" on Wikipedia
        Then user should see "Tesla" in the title
        And user should see "Tesla" in the URL
        And user should see "Tesla" in the first heading