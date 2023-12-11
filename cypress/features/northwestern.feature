Feature: Northwestern Test


    Scenario: Northwestern Navbar
        Given user navigates to "https://www.northwestern.edu/"
        Then user should see below navbar items
            | About | Academics | Admissions | Campus Experience | Research | Giving |
        # Then user should fill the form
        #     | label      | input  |
        #     | First Name | Burak  |
        #     | Last Name  | Simsek |
        #     | From       | Turkey |
        #     | Live       | USA    |

        # Then user should key-value
        #     | First Name | Burak  |
        #     | Last Name  | Simsek |
        #     | From       | Turkey |
        #     | Live       | USA    |

        # Then user should handle another type
        #     | label      | input  | Section  |
        #     | First Name | Burak  | Personal |
        #     | Last Name  | Simsek | Personal |
        #     | From       | Turkey | Country  |
        #     | Live       | USA    | Living   |