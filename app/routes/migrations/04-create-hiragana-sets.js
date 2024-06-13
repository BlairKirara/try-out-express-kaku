'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hiragana_sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      setId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'set_lists',
          key: 'id',
        },
      },
      hiragana: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      romaji: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hiragana_sets');
  },
};