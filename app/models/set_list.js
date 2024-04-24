const Sequelize = require('sequelize');
const sequelize = require('../db');

const SetList = sequelize.define(
    'userId',
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
            model: User,
            key: id
        }
    },
    'name',
    {
        type: Sequelize.STRING
    },
    {
        timestamps: false,
    }
);

module.exports = SetList;