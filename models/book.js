const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1000,
      max: new Date().getFullYear()
    }
  }
});

// Associations
Book.belongsTo(Author ,  {
    foreignKey: {
      name: "authorId",
      allowNull: false,
    },
  }); // One book belongs to one author

Book.belongsToMany(Genre, { through: 'BookGenres' }); // Many-to-many relationship with Genre
Genre.belongsToMany(Book, { through: 'BookGenres' }); // Many-to-many relationship with Book

module.exports = Book;