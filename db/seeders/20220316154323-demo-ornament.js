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
     await queryInterface.bulkInsert('Ornaments', [{
      name: 'polka dots',
      src: 'https://www.clipartmax.com/png/middle/171-1712724_pattern-clipart-polka-dot-pattern-white-polka-dot-overlay.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'greece',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7MpFRB9Tj2xcuC7-Gy_LLt0t_y7Wl3cdgA&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'waves',
      src: 'https://na-oboi.ru/images/product_images/info_images/morskie_volny_i_rybki_art_6709_02TR.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'circles',
      src: 'https://png.pngtree.com/png-vector/20220105/ourmid/pngtree-circle-geometric-pattern-png-image_4202980.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Ornaments', null, {});
  }
};
