'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const count = 5;
     const favors = [];
     for (let i = 0; i < count; i++) {
      favors.push({
        userId: Math.ceil(Math.random() * 2),
        socksId: Math.ceil(Math.random() * 5),
       createdAt: new Date(),
       updatedAt: new Date(),
     });
    }
     await queryInterface.bulkInsert('Favourites', favors, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Favourites', null, {});
     */
     await queryInterface.bulkDelete('Favourites', null, {});
  }
};
