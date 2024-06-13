const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const SetList = require('./set_list');

class HiraganaSet extends Model {}

HiraganaSet.init(
  {
    setId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SetList,
        key: 'id',
      },
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
