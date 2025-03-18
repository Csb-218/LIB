const {sequelize,DataTypes} = require('../lib');

const Genre = sequelize.define('Genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Genre;