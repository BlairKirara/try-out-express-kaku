const Sequelize = require('sequelize');
const sequelize = require('../db');

const HiraganaSet = sequelize.define(
    'setId',
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
            model: SetList,
            key: id
        }
    },
    'hiragana',
    {
        type: Sequelize.STRING
    },
    'romaji',
    {
        type: Sequelize.STRING
    },
    {
        timestamps: false,
    }
);

module.exports = HiraganaSet;