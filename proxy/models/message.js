const Sequelize = require("sequelize");

var object1 = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_agent: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports = object1