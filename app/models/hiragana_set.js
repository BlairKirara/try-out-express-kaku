const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

class HiraganaSet extends Model {}

HiraganaSet.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    set: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hiragana: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    romaji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'HiraganaSet',
    tableName: 'hiragana_sets',
  }
);

module.exports = HiraganaSet;
