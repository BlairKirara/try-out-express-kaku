const Sequelize = require('sequelize');
const sequelize = require('../db');

const KatakanaSet = sequelize.define(
    'setId',
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
            model: SetList,
            key: id
        }
    },
    'katakana',
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

module.exports = KatakanaSet;