const getTheTitles = function(books) {
    return books.map((book) => Object.values(book).at(0));
};

// Do not edit below this line
module.exports = getTheTitles;
