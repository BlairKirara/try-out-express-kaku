const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

class KatakanaSet extends Model {}

KatakanaSet.init(
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
    katakana: {
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
    modelName: 'KatakanaSet',
    tableName: 'katakana_sets',
  }
);

module.exports = KatakanaSet;
