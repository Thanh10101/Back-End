'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Routes', [{
      url: '/User/display-product',
      description: 'Display product',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('Routes', [{
      url: '/User/create-product',
      description: 'Creat product',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});

  }
};
