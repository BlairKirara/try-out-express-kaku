'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

class QuizScore extends Model {}

QuizScore.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    lvl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'QuizScore',
    tableName: 'quiz_scores',
  }
);

module.exports = QuizScore;