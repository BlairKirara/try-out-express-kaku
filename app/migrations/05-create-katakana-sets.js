'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('katakana_sets', {
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
      katakana: {
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
    await queryInterface.dropTable('katakana_sets');
  },
};