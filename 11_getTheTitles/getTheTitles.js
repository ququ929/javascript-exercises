const getTheTitles = function(books) {
    // when we want to create a new array, we can use array.prototype.map
    return books.map(book => book.title);

    // let titles = [];

    // for (let book of books) {
    //     titles.push(book.title);
    // }

    // return titles;    
};

// Do not edit below this line
module.exports = getTheTitles;
