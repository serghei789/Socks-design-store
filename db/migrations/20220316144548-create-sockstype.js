'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sockstypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id'
        }
      },
      ornamentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ornaments',
          key: 'id'
        }
      },
      pictureId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pictures',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sockstypes');
  }
};
