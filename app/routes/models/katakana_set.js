const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const SetList = require('./set_list');

class KatakanaSet extends Model {}

KatakanaSet.init(
  {
    setId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SetList,
        key: 'id',
      },
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
