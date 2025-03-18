var express = require('express');
var router = express.Router();
const { sequelize } = require('../lib');
// models

const {
  author,
  book,
  genre
} = require('../models');

router.route('/').get(async (req, res) => {
    await sequelize.sync({ force: true });

    const authorsData = await author.bulkCreate([
        { name: 'J.K. Rowling', birthdate: '1965-07-31', email: 'jkrowling@books.com' },
        { name: 'George R.R. Martin', birthdate: '1948-09-20', email: 'grrmartin@books.com' }
      ]);
      
      const genresData = await genre.bulkCreate([
        { name: 'Fantasy', description: 'Magical and mythical stories.' },
        { name: 'Drama', description: 'Fiction with realistic characters and events.' }
      ]);
      
      const booksData = await book.bulkCreate([
        { title: 'Harry Potter and the Philosopher\'s Stone', description: 'A young wizard\'s journey begins.', publicationYear: 1997, authorId: 1 },
        { title: 'Game of Thrones', description: 'A medieval fantasy saga.', publicationYear: 1996, authorId: 2 }
      ]);

      await booksData[0].setGenres([genresData[0]]);
      await booksData[1].setGenres([genresData[0], genresData[1]]);

});


module.exports = router;