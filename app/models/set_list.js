const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

class SetList extends Model {}

SetList.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'SetList',
    tableName: 'set_lists',
  }
);

module.exports = SetList;
