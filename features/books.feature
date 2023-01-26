Feature: Part C scenario


    Scenario: Correct non-zero number of books found by author

        Given I have the following books in the store
            | title                                | author      |
            | The Devil in the White city          | Eric Larson |
            | The Lion, the Witch and the Wardrobe | C.S.Lewis   |
            | In the Garden of the Beasts          | Eric Larson |

        When I search for  books by author Eric Larson
        Then I find 2 books