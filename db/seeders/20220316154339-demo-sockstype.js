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
   const socks = [];
   for (let i = 0; i < count; i++) {
     socks.push({
      colorId: i + 1,
      ornamentId: Math.ceil(Math.random() * 4),
      pictureId: Math.ceil(Math.random() * 5),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
   }
     await queryInterface.bulkInsert('Sockstypes', socks, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Sockstypes', null, {});
  }
};
