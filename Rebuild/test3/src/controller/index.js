const auth = require('./auth_controller');
const book = require('./book_controller');
const author = require('./author_controller');
const publisher = require('./publisher_controller');

module.exports = {
    auth,
    book,
    author,
    publisher
};