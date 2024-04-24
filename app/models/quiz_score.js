const Sequelize = require('sequelize');
const sequelize = require('../db');

const QuizScore = sequelize.define(
    'userId',
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
            model: User,
            key: id
        }
    },
    'lvl',
    {
        type: Sequelize.STRING
    },
    'score',
    {
        type: Sequelize.INTEGER
    },
    {
        timestamps: false,
    }
);

module.exports = QuizScore;