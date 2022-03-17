'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Colors', [{
      name: 'Skyblue',
      code: 'rgb(200, 226, 234)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lightpink',
      code: 'rgb(242, 209 ,209)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Pink',
      code: 'rgb(198, 20, 78)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Navy blue',
      code: 'rgb(21, 53, 92)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Yellow',
      code: 'rgb(244, 191, 77)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Purple',
      code: 'rgb(106, 14, 111)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Red',
      code: 'rgb(192, 21, 24)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Green',
      code: 'rgb(33, 81, 93)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Brown',
      code: 'rgb(85, 56, 37)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Blue',
      code: 'rgb(106, 135, 167)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Colors', null, {});
     */
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
