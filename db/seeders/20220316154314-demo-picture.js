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
     await queryInterface.bulkInsert('Pictures', [{
      name: 'raccoon',
      src: 'https://i.pinimg.com/originals/1e/29/a4/1e29a48f084cf8e91a31c714db6d682e.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'bee',
      src: 'https://freesvg.org/img/2014-S2-4-Illustrations.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'beaver',
      src: 'https://cdn.custom-cursor.com/packs/3979/cartoons-angry-beavers-cursor-pack.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'hedgehog',
      src: 'https://static.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest/top-crop/width/360/height/360?cb=20220121091146',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'owk',
      src: 'http://clipart-library.com/img/719578.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Pictures', null, {});
  }
};
