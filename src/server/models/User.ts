const { DataTypes } = require('sequelize');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (sequelize) => sequelize.define('user', {
  nickname: DataTypes.TEXT,
});
