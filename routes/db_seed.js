var express = require('express');
var router = express.Router();
const { sequelize } = require('../lib');
// models
const {
  authors,
  books,
  genres
} = require('../models');

router.route('/').get(async (req, res) => {
    await sequelize.sync({ force: true });

    const authors = await authors.bulkCreate([
        { name: 'J.K. Rowling', birthdate: '1965-07-31', email: 'jkrowling@books.com' },
        { name: 'George R.R. Martin', birthdate: '1948-09-20', email: 'grrmartin@books.com' }
      ]);
      
      const genres = await genres.bulkCreate([
        { name: 'Fantasy', description: 'Magical and mythical stories.' },
        { name: 'Drama', description: 'Fiction with realistic characters and events.' }
      ]);
      
      const books = await books.bulkCreate([
        { title: 'Harry Potter and the Philosopher\'s Stone', description: 'A young wizard\'s journey begins.', publicationYear: 1997, authorId: 1 },
        { title: 'Game of Thrones', description: 'A medieval fantasy saga.', publicationYear: 1996, authorId: 2 }
      ]);

      await books[0].setGenres([genres[0]]);
      await books[1].setGenres([genres[0], genres[1]]);

});


module.exports = router;