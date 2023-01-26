const{Given,When,Then} = require ('@cucumber/cucumber')

const{assert,expect} = require ('chai')

let books = []
let results = []
Given('I have the following books in the store', function (dataTable) {

    books = dataTable.hashes()

});

When('I search for  books by author Eric Larson', function () {

    results = books.filter(book => book.author === 'Eric Larson')
    console.log(results)

});


Then('I find {int} books', function (count) {
    expect(results.length).to.equal(count)
    

});